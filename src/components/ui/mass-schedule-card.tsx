
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type MassScheduleProps = {
  day: string;
  times: string[];
  description?: string;
  special?: boolean;
};

export function MassScheduleCard({ day, times, description, special = false }: MassScheduleProps) {
  return (
    <Card className={`transition-all duration-300 ${special ? 'border-church-gold bg-church-gold/5' : ''}`}>
      <CardHeader className={`pb-2 ${special ? 'bg-church-gold/10' : ''}`}>
        <CardTitle className="flex items-center text-xl text-church-purple">
          <CalendarIcon className="mr-2 h-5 w-5 text-church-burgundy" /> 
          {day}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-2">
          {times.map((time, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <ClockIcon className="mr-2 h-4 w-4 text-church-burgundy/70" />
              {time}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
