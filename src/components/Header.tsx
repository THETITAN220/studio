'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { VibeMicLogo } from '@/components/VibeMicLogo';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '@/context/AuthContext';
import { Button } from './ui/button';
import { LogOut, User } from 'lucide-react';

export function Header() {
  const { artist, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header className="py-4 px-4 md:px-6 bg-card/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold transition-opacity hover:opacity-80">
          <VibeMicLogo className="h-6 w-6" />
          <span className="text-xl font-headline">Vibe n Mic</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          {artist ? (
            <>
              <span className="text-sm font-medium hidden sm:inline">Welcome, {artist.name}</span>
               <Button variant="ghost" onClick={handleLogout} size="sm">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <Button asChild variant="ghost" size="sm">
               <Link href="/login">
                <User className="mr-2 h-4 w-4" />
                Artist Login
              </Link>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
