import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Artist } from '@/lib/types';
import { Heart, Users } from 'lucide-react';

interface FollowerStatsProps {
  artist: Artist;
}

export function FollowerStats({ artist }: FollowerStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Artist Followers</CardTitle>
          <Heart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{artist.followers.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">Your personal following</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Band Followers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{artist.bandFollowers.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">Followers for {artist.band?.name || artist.name}</p>
        </CardContent>
      </Card>
    </div>
  );
}
