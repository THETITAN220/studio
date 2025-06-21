import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function MapPlaceholder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">Event Locations</CardTitle>
        <CardDescription>Find your way to the next great performance.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-primary/20 shadow-inner">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Map of event locations"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
            data-ai-hint="city map"
          />
        </div>
      </CardContent>
    </Card>
  );
}
