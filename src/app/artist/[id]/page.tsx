'use client';

import { Header } from '@/components/Header';
import { FollowerStats } from '@/components/FollowerStats';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { artists } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import type { BandMember } from '@/lib/types';
import { Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Artist } from '@/lib/types';
import { Loader2 } from 'lucide-react';

// This is a client component to handle loading and finding the artist
export default function PublicArtistPage({ params }: { params: { id: string } }) {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const artistId = parseInt(params.id, 10);
    const foundArtist = artists.find(a => a.id === artistId);
    
    if (foundArtist) {
      setArtist(foundArtist);
    }
    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!artist) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary">
              <AvatarImage src={artist.avatarUrl} alt={artist.name} data-ai-hint="musician portrait"/>
              <AvatarFallback>{artist.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                {artist.name}
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                {artist.bio}
              </p>
            </div>
          </div>
          
          <FollowerStats artist={artist} />
          
          {artist.band && artist.band.members.length > 0 && (
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                    <Users className="h-6 w-6" /> Band Members
                </CardTitle>
                <CardDescription>The talented individuals behind {artist.band.name}.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {artist.band.members.map((member: BandMember, index: number) => (
                    <div key={index} className="p-4 border rounded-lg bg-card-foreground/5">
                      <p className="font-bold text-lg">{member.name}</p>
                      <p className="text-muted-foreground">{member.instrument}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

        </div>
      </main>
    </div>
  );
}
