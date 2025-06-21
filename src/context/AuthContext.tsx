'use client';

import type { Artist, User } from '@/lib/types';
import { artists, users } from '@/lib/mock-data';
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type UserType = 'artist' | 'audience';

interface AuthContextType {
  user: (Artist | User) | null;
  userType: UserType | null;
  login: (name: string, pass: string, type: UserType) => boolean;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Artist | User | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUserId = sessionStorage.getItem('userId');
      const storedUserType = sessionStorage.getItem('userType') as UserType | null;
      
      if (storedUserId && storedUserType) {
        let loggedInUser;
        if (storedUserType === 'artist') {
            loggedInUser = artists.find(a => a.id === parseInt(storedUserId, 10));
        } else {
            loggedInUser = users.find(u => u.id === parseInt(storedUserId, 10));
        }
        
        if (loggedInUser) {
          setUser(loggedInUser);
          setUserType(storedUserType);
        }
      }
    } catch (error) {
        console.error("Could not access session storage", error)
    } finally {
        setIsLoading(false);
    }
  }, []);

  const login = (name: string, pass: string, type: UserType): boolean => {
    let foundUser;
    if (type === 'artist') {
        foundUser = artists.find(a => a.name.toLowerCase() === name.toLowerCase() && a.password === pass);
    } else {
        foundUser = users.find(u => u.name.toLowerCase() === name.toLowerCase() && u.password === pass);
    }
    
    if (foundUser) {
      setUser(foundUser);
      setUserType(type);
      try {
        sessionStorage.setItem('userId', String(foundUser.id));
        sessionStorage.setItem('userType', type);
      } catch (error) {
        console.error("Could not access session storage", error)
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
    try {
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('userType');
    } catch (error) {
        console.error("Could not access session storage", error)
    }
  };

  return (
    <AuthContext.Provider value={{ user, userType, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
