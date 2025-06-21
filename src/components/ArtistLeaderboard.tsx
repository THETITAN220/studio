import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import type { Artist } from '@/lib/types';
import { UserPlus, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ArtistLeaderboardProps {
  artists: Artist[];
}

export function ArtistLeaderboard({ artists }: ArtistLeaderboardProps) {
  const sortedArtists = [...artists].sort((a, b) => b.engagement - a.engagement);

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20 text-center">Rank</TableHead>
            <TableHead>Artist</TableHead>
            <TableHead className="text-center hidden md:table-cell">Engagement</TableHead>
            <TableHead className="text-right hidden sm:table-cell">Tickets Sold</TableHead>
            <TableHead className="text-center w-24">Follow</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedArtists.map((artist, index) => (
            <TableRow key={artist.id}>
              <TableCell className="text-center font-bold text-lg">
                <div className="flex items-center justify-center gap-2">
                  {index < 3 ? <Trophy className="h-6 w-6 text-accent" /> : <span>{index + 1}</span>}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <Image
                    src={artist.avatarUrl}
                    alt={artist.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                    data-ai-hint="musician portrait"
                  />
                  <div>
                    <div className="font-medium">{artist.name}</div>
                    <div className="text-sm text-muted-foreground truncate max-w-xs hidden sm:block">{artist.bio}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center hidden md:table-cell">
                <Badge variant="secondary" className="text-base font-mono bg-accent/10 text-accent border-accent/20">
                  {artist.engagement}
                </Badge>
              </TableCell>
              <TableCell className="text-right hidden sm:table-cell font-mono">{artist.ticketsSold}</TableCell>
              <TableCell className="text-center">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary rounded-full">
                  <UserPlus className="h-5 w-5" />
                  <span className="sr-only">Follow {artist.name}</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
