import { Header } from '@/components/Header';
import { FollowerStats } from '@/components/FollowerStats';
import { BandProfileForm } from '@/components/BandProfileForm';
import { OpenMicRegistration } from '@/components/OpenMicRegistration';
import { ArtistLeaderboard } from '@/components/ArtistLeaderboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { artists } from '@/lib/mock-data';
import { Mic, Trophy, UserCircle } from 'lucide-react';

export default function ArtistPage() {
  const artist = artists[1]; // Use Echo Drifters as example

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
              Manage your profile, register for events, and track your growth.
            </p>
          </div>

          <FollowerStats artist={artist} />

          <Tabs defaultValue="profile" className="mt-12">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
              <TabsTrigger value="profile"><UserCircle className="mr-2 h-4 w-4" />Band Profile</TabsTrigger>
              <TabsTrigger value="register"><Mic className="mr-2 h-4 w-4" />Open Mic Registration</TabsTrigger>
              <TabsTrigger value="leaderboard"><Trophy className="mr-2 h-4 w-4" />Leaderboard</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="mt-6">
              <BandProfileForm artist={artist} />
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
