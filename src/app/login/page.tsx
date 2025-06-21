'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Header } from '@/components/Header';
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { FormEvent } from 'react';

function LoginForm({
  userType,
  onLogin,
}: {
  userType: 'audience' | 'artist';
  onLogin: (success: boolean) => void;
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const success = login(username, password, userType);
    onLogin(success);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`${userType}-username`}>{userType === 'artist' ? 'Band Name' : 'Username'}</Label>
          <Input id={`${userType}-username`} type="text" placeholder={userType === 'artist' ? 'e.g. Echo Drifters' : 'e.g. Alex Fan'} required value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${userType}-password`}>Password</Label>
          <Input id={`${userType}-password`} type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">Sign In</Button>
      </CardFooter>
    </form>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = (success: boolean, userType: 'audience' | 'artist') => {
    if (success) {
      router.push(userType === 'artist' ? '/artist' : '/profile');
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid username or password.",
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center p-4">
        <Tabs defaultValue="audience" className="w-full max-w-sm">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="artist">Artist</TabsTrigger>
          </TabsList>
          <TabsContent value="audience">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline">Audience Login</CardTitle>
                <CardDescription>Sign in to view your profile and tickets.</CardDescription>
              </CardHeader>
              <LoginForm userType="audience" onLogin={(success) => handleLogin(success, 'audience')} />
            </Card>
          </TabsContent>
          <TabsContent value="artist">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline">Artist Login</CardTitle>
                <CardDescription>Enter your band name and password to access your dashboard.</CardDescription>
              </CardHeader>
              <LoginForm userType="artist" onLogin={(success) => handleLogin(success, 'artist')} />
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
