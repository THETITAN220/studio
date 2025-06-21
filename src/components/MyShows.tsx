import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EventCard } from "@/components/EventCard";
import { events } from "@/lib/mock-data";
import type { Artist } from "@/lib/types";
import { Music } from "lucide-react";

interface MyShowsProps {
  artist: Artist;
}

export function MyShows({ artist }: MyShowsProps) {
  const artistEvents = events.filter(event => event.artistId === artist.id);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
            <Music className="h-6 w-6" /> Your Upcoming Shows
        </CardTitle>
        <CardDescription>Here are the events you are scheduled to perform at.</CardDescription>
      </CardHeader>
      <CardContent>
        {artistEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artistEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-8">You have no upcoming shows scheduled.</p>
        )}
      </CardContent>
    </Card>
  );
}
