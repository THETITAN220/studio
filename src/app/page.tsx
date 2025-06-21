import { Header } from '@/components/Header';
import { RoleSelection } from '@/components/RoleSelection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <RoleSelection />
      </main>
    </div>
  );
}
