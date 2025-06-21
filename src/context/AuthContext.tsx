'use client';

import type { Artist } from '@/lib/types';
import { artists } from '@/lib/mock-data';
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface AuthContextType {
  artist: Artist | null;
  login: (name: string, pass: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check sessionStorage for a logged-in user on initial load
    try {
      const storedArtistId = sessionStorage.getItem('artistId');
      if (storedArtistId) {
        const loggedInArtist = artists.find(a => a.id === parseInt(storedArtistId, 10));
        if (loggedInArtist) {
          setArtist(loggedInArtist);
        }
      }
    } catch (error) {
        console.error("Could not access session storage", error)
    } finally {
        setIsLoading(false);
    }
  }, []);

  const login = (name: string, pass: string): boolean => {
    const foundArtist = artists.find(a => a.name.toLowerCase() === name.toLowerCase() && a.password === pass);
    if (foundArtist) {
      setArtist(foundArtist);
      try {
        sessionStorage.setItem('artistId', String(foundArtist.id));
      } catch (error) {
        console.error("Could not access session storage", error)
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setArtist(null);
    try {
      sessionStorage.removeItem('artistId');
    } catch (error) {
        console.error("Could not access session storage", error)
    }
  };

  return (
    <AuthContext.Provider value={{ artist, login, logout, isLoading }}>
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
