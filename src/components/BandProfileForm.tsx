import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { Artist } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, Trash2 } from "lucide-react";

interface BandProfileFormProps {
  artist: Artist;
}

export function BandProfileForm({ artist }: BandProfileFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Band Profile</CardTitle>
        <CardDescription>Keep your band's information up to date to attract more fans.</CardDescription>
      </CardHeader>
      <form>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bandName">Band Name</Label>
              <Input id="bandName" defaultValue={artist.band?.name || artist.name} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bandBio">Band Bio</Label>
            <Textarea id="bandBio" placeholder="Tell everyone your story..." defaultValue={artist.bio} rows={5} />
          </div>
          <Separator />
          <div>
            <h3 className="text-lg font-medium mb-4">Band Members</h3>
            <div className="space-y-4">
              {artist.band?.members.map((member, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg bg-background">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 flex-grow">
                    <div className="space-y-2">
                      <Label htmlFor={`memberName-${index}`}>Member Name</Label>
                      <Input id={`memberName-${index}`} defaultValue={member.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`memberInstrument-${index}`}>Instrument/Role</Label>
                      <Input id={`memberInstrument-${index}`} defaultValue={member.instrument} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`memberSocials-${index}`}>Socials</Label>
                      <Input id={`memberSocials-${index}`} placeholder="@username" defaultValue={member.socials.twitter || ''} />
                    </div>
                  </div>
                   <Button variant="ghost" size="icon" type="button" className="text-destructive self-center md:self-end hover:bg-destructive/10">
                     <Trash2 className="h-4 w-4" />
                   </Button>
                </div>
              ))}
               <Button variant="outline" type="button" className="border-dashed">
                 <PlusCircle className="mr-2 h-4 w-4" />
                 Add Member
               </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6">
          <Button type="submit">Save Changes</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
