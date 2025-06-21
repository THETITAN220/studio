'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Header } from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Ticket } from 'lucide-react';
import type { User } from '@/lib/types';
import { events } from '@/lib/mock-data';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, userType, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (userType !== 'audience' || !user)) {
      router.replace('/login');
    }
  }, [user, userType, isLoading, router]);

  if (isLoading || !user || userType !== 'audience') {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const audienceMember = user as User;
  const bookedEvents = audienceMember.bookedTickets.map(ticket => {
    const event = events.find(e => e.id === ticket.eventId);
    return { ...event, quantity: ticket.quantity };
  }).filter(Boolean);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-8 md:py-12 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              My Profile
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Welcome, {audienceMember.name}. Here are your booked tickets.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                <Ticket className="h-6 w-6" /> Booked Tickets
              </CardTitle>
              <CardDescription>All the events you're ready to vibe at.</CardDescription>
            </CardHeader>
            <CardContent>
              {bookedEvents.length > 0 ? (
                <div className="space-y-6">
                  {bookedEvents.map((booking) => (
                    booking && booking.id && (
                        <div key={booking.id} className="flex flex-col sm:flex-row items-start gap-4 p-4 border rounded-lg bg-card-foreground/5">
                            <Image
                                src={booking.imageUrl!}
                                alt={booking.title!}
                                width={150}
                                height={100}
                                className="rounded-md object-cover w-full sm:w-[150px] aspect-video sm:aspect-[3/2]"
                                data-ai-hint={booking.aiHint}
                            />
                            <div className="flex-grow">
                                <h3 className="font-bold text-lg">{booking.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {new Date(booking.date!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} at {booking.venue}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Artist: <Link href={`/artist/${booking.artistId}`} className="text-primary hover:underline">{booking.artist}</Link>
                                </p>
                            </div>
                            <div className="text-center bg-primary/10 p-3 rounded-lg w-full sm:w-auto mt-4 sm:mt-0">
                                <p className="font-bold text-2xl text-primary">{booking.quantity}</p>
                                <p className="text-xs text-primary/80 uppercase tracking-wider">Tickets</p>
                            </div>
                        </div>
                    )
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">You haven't booked any tickets yet. <Link href="/audience" className="text-primary hover:underline">Find an event!</Link></p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
