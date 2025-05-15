
import { CalendarIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type AnnouncementCardProps = {
  title: string;
  date: string;
  content: string;
  important?: boolean;
};

export function AnnouncementCard({ title, date, content, important = false }: AnnouncementCardProps) {
  return (
    <Card className={`transition-all duration-300 ${important ? 'border-church-burgundy' : ''}`}>
      <CardHeader className={`pb-2 ${important ? 'bg-church-burgundy/10' : ''}`}>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-church-purple">{title}</CardTitle>
          {important && (
            <span className="bg-church-burgundy text-white text-xs px-2 py-1 rounded-full">
              Important
            </span>
          )}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="mr-1 h-4 w-4" />
          <span>{date}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription>{content}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="hover:bg-church-purple hover:text-white">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
