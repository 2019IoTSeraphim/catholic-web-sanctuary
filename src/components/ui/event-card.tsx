
import { CalendarIcon, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type EventCardProps = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
};

export function EventCard({ title, date, time, location, description, imageUrl }: EventCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-church-purple">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <CalendarIcon className="mr-2 h-4 w-4 text-church-burgundy" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="mr-2 h-4 w-4 text-church-burgundy" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="mr-2 h-4 w-4 text-church-burgundy" />
          <span>{location}</span>
        </div>
        <CardDescription className="pt-2">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full hover:bg-church-purple hover:text-white">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
