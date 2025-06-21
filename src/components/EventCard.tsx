'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Event } from '@/lib/types';
import { Calendar, MapPin, Ticket, Star, Plus, Minus } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

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
           <Link href={`/artist/${event.artistId}`} className="text-sm font-bold text-primary hover:underline transition-colors">
            {event.artist}
          </Link>
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
        <div className="mt-auto space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-center">Ticket Quantity</p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" size="icon" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-lg font-bold w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => handleQuantityChange(1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
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
