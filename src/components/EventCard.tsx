import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Event } from '@/lib/types';
import { Calendar, MapPin, Ticket, Star } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col group hover:shadow-accent/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={event.aiHint}
        />
         <div className="absolute top-0 right-0 bg-background/80 backdrop-blur-sm p-2 rounded-bl-lg">
          <p className="text-sm font-bold text-primary">{event.artist}</p>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
        <div className="space-y-2 text-sm text-muted-foreground pt-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.venue}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col mt-auto">
        <div className="mt-auto space-y-2">
           <Button className="w-full">
            <Ticket className="mr-2 h-4 w-4" />
            Buy Tickets
          </Button>
          <Button variant="outline" className="w-full text-accent border-accent hover:bg-accent/10 hover:text-accent">
            <Star className="mr-2 h-4 w-4" />
            Get Backstage Pass
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
