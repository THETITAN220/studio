import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, Mic, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RoleSelection() {
  return (
    <div className="container mx-auto py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Welcome to Vibe n Mic</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
          Your stage for open mic nights. Whether you're here to discover new talent or to share your own, get started below.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl font-headline">Audience</CardTitle>
              <CardDescription>Experience the show</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Discover amazing artists, book your tickets, and get ready for an unforgettable night of live music.
            </p>
            <Button asChild className="w-full">
              <Link href="/audience">
                Browse Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mic className="h-8 w-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl font-headline">Artist</CardTitle>
              <CardDescription>Take the stage</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Sign up for open mic slots, create your band profile, and connect with your fans. Your spotlight awaits.
            </p>
            <Button asChild className="w-full">
              <Link href="/artist">
                Artist Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
