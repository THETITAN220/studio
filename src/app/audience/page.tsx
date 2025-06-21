import { Header } from '@/components/Header';
import { EventCard } from '@/components/EventCard';
import { MapPlaceholder } from '@/components/MapPlaceholder';
import { ArtistLeaderboard } from '@/components/ArtistLeaderboard';
import { events, artists } from '@/lib/mock-data';
import { Separator } from '@/components/ui/separator';

export default function AudiencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-8 md:py-12 px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              Upcoming Events
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Discover the next big thing. Book your spot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <Separator className="my-12 bg-primary/10" />

          <MapPlaceholder />

          <Separator className="my-12 bg-primary/10" />

          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                Artist Leaderboard
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Follow and support your favorite artists.
              </p>
            </div>
            <ArtistLeaderboard artists={artists} />
          </div>
        </div>
      </main>
    </div>
  );
}
