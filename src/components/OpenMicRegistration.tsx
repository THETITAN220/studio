import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { events } from "@/lib/mock-data";
import { Checkbox } from "@/components/ui/checkbox";

export function OpenMicRegistration() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Register for an Open Mic</CardTitle>
        <CardDescription>Select an upcoming event and secure your slot.</CardDescription>
      </CardHeader>
      <form>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="event">Select Event</Label>
            <Select>
              <SelectTrigger id="event">
                <SelectValue placeholder="Choose an event..." />
              </SelectTrigger>
              <SelectContent>
                {events.map((event) => (
                  <SelectItem key={event.id} value={String(event.id)}>
                    {event.title} - {new Date(event.date).toLocaleDateString()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I confirm my band profile is up to date.
            </label>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6">
          <Button type="submit">Register for Slot</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
