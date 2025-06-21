import type { Artist, Event } from './types';

export const events: Event[] = [
  {
    id: 1,
    title: 'Acoustic Soul Night',
    date: '2024-08-15',
    venue: 'The Gilded Lily',
    imageUrl: 'https://placehold.co/600x400.png',
    artist: 'Luna Bloom',
    artistId: 1,
    aiHint: 'acoustic guitar concert'
  },
  {
    id: 2,
    title: 'Indie Rock Showcase',
    date: '2024-08-22',
    venue: 'The Velvet Underground',
    imageUrl: 'https://placehold.co/600x400.png',
    artist: 'Echo Drifters',
    artistId: 2,
    aiHint: 'rock band stage'
  },
  {
    id: 3,
    title: 'Jazz & Blues Jam',
    date: '2024-09-05',
    venue: 'The Blue Note Cafe',
    imageUrl: 'https://placehold.co/600x400.png',
    artist: 'Rivertown Roots',
    artistId: 3,
    aiHint: 'jazz club musician'
  },
];

export const artists: Artist[] = [
  {
    id: 1,
    name: 'Luna Bloom',
    password: 'password',
    bio: 'Solo artist with a dreamy voice and a guitar, weaving tales of love and loss through ethereal folk-pop melodies.',
    followers: 1245,
    bandFollowers: 0,
    engagement: 98,
    ticketsSold: 350,
    avatarUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 2,
    name: 'Echo Drifters',
    password: 'password',
    bio: 'A four-piece indie rock band known for their energetic live shows and anthemic choruses that get the crowd moving.',
    followers: 850,
    bandFollowers: 3400,
    engagement: 95,
    ticketsSold: 520,
    avatarUrl: 'https://placehold.co/100x100.png',
    band: {
      name: 'Echo Drifters',
      members: [
        { name: 'Jax', instrument: 'Vocals, Guitar', socials: {} },
        { name: 'Rina', instrument: 'Bass', socials: {} },
        { name: 'Leo', instrument: 'Drums', socials: {} },
        { name: 'Mia', instrument: 'Keys, Synth', socials: {} },
      ],
    },
  },
  {
    id: 3,
    name: 'Rivertown Roots',
    password: 'password',
    bio: 'Bringing the heart of blues and the soul of jazz to the modern age. A collective of seasoned musicians who live for the groove.',
    followers: 630,
    bandFollowers: 2100,
    engagement: 89,
    ticketsSold: 280,
    avatarUrl: 'https://placehold.co/100x100.png',
    band: {
      name: 'Rivertown Roots',
      members: [
        { name: 'Big Earl', instrument: 'Vocals, Harmonica', socials: {} },
        { name: 'Silas', instrument: 'Guitar', socials: {} },
        { name: 'Martha', instrument: 'Upright Bass', socials: {} },
      ],
    },
  },
  {
    id: 4,
    name: 'Starlight Sirens',
    password: 'password',
    bio: 'Synth-pop duo creating cosmic soundscapes with powerful vocals. Their music is an escape to another dimension.',
    followers: 450,
    bandFollowers: 1500,
    engagement: 85,
    ticketsSold: 210,
    avatarUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 5,
    name: 'AntarticMonkeys',
    password: 'password',
    bio: 'Indie rock sensations from the south pole. Known for their chilly riffs and warm vocals.',
    followers: 2024,
    bandFollowers: 8600,
    engagement: 99,
    ticketsSold: 780,
    avatarUrl: 'https://placehold.co/100x100.png',
    band: {
      name: 'AntarticMonkeys',
      members: [
        { name: 'Alex', instrument: 'Vocals, Guitar', socials: {} },
        { name: 'Jamie', instrument: 'Guitar', socials: {} },
        { name: 'Nick', instrument: 'Bass', socials: {} },
        { name: 'Matt', instrument: 'Drums', socials: {} },
      ],
    },
  },
];
