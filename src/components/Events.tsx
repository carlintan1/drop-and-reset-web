import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    title: "Beginner's Social Rally",
    date: "November 15, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Court 1-2",
    description: "New to pickleball? Join us for a friendly session and meet the community.",
  },
  {
    title: "Weekly League Match",
    date: "November 18, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "All Courts",
    description: "Competitive doubles tournament for intermediate and advanced players.",
  },
  {
    title: "Community BBQ & Play",
    date: "November 22, 2025",
    time: "4:00 PM - 8:00 PM",
    location: "Outdoor Courts",
    description: "Family-friendly event with open play, food, and social time.",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-foreground/70">
            Mark your calendar and join us on the court
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {upcomingEvents.map((event) => (
            <Card key={event.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{event.location}</span>
                </div>
                <Button className="w-full mt-4 rounded-full" variant="outline">
                  Register
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
