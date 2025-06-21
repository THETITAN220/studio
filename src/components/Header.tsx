import Link from 'next/link';
import { VibeMicLogo } from '@/components/VibeMicLogo';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 bg-card/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold transition-opacity hover:opacity-80">
          <VibeMicLogo className="h-6 w-6" />
          <span className="text-xl font-headline">Vibe n Mic</span>
        </Link>
      </div>
    </header>
  );
}
