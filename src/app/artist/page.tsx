'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Header } from '@/components/Header';
import { FollowerStats } from '@/components/FollowerStats';
import { BandProfileForm } from '@/components/BandProfileForm';
import { OpenMicRegistration } from '@/components/OpenMicRegistration';
import { ArtistLeaderboard } from '@/components/ArtistLeaderboard';
import { MyShows } from '@/components/MyShows';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { artists } from '@/lib/mock-data';
import { Mic, Trophy, UserCircle, Loader2, Music } from 'lucide-react';
import type { Artist } from '@/lib/types';

export default function ArtistPage() {
  const { user, userType, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (userType !== 'artist' || !user)) {
      router.replace('/login');
    }
  }, [user, userType, isLoading, router]);

  if (isLoading || !user || userType !== 'artist') {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  const artist = user as Artist;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-8 md:py-12 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              Artist Dashboard
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Welcome, {artist.name}. Manage your profile, register for events, and track your growth.
            </p>
          </div>

          <FollowerStats artist={artist} />

          <Tabs defaultValue="profile" className="mt-12">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-4">
              <TabsTrigger value="profile"><UserCircle className="mr-2 h-4 w-4" />Band Profile</TabsTrigger>
              <TabsTrigger value="shows"><Music className="mr-2 h-4 w-4" />My Shows</TabsTrigger>
              <TabsTrigger value="register"><Mic className="mr-2 h-4 w-4" />Open Mic</TabsTrigger>
              <TabsTrigger value="leaderboard"><Trophy className="mr-2 h-4 w-4" />Leaderboard</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="mt-6">
              <BandProfileForm artist={artist} />
            </TabsContent>
            <TabsContent value="shows" className="mt-6">
              <MyShows artist={artist} />
            </TabsContent>
            <TabsContent value="register" className="mt-6">
              <OpenMicRegistration />
            </TabsContent>
            <TabsContent value="leaderboard" className="mt-6">
              <ArtistLeaderboard artists={artists} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
