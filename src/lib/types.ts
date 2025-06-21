export interface BandMember {
  name: string;
  instrument: string;
  socials: {
    twitter?: string;
    instagram?: string;
  };
}

export interface Artist {
  id: number;
  name: string;
  password?: string;
  bio: string;
  followers: number;
  bandFollowers: number;
  engagement: number;
  ticketsSold: number;
  band?: {
    name: string;
    members: BandMember[];
  };
  avatarUrl: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  imageUrl: string;
  artist: string;
  artistId: number;
  aiHint: string;
}

export interface BookedTicket {
  eventId: number;
  quantity: number;
}

export interface User {
  id: number;
  name:string;
  password?: string;
  bookedTickets: BookedTicket[];
}
