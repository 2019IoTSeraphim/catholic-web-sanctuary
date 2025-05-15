
import PageHeader from "@/components/layout/PageHeader";
import { MassScheduleCard } from "@/components/ui/mass-schedule-card";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Clock, MapPin } from "lucide-react";

const MassTimesPage = () => {
  return (
    <>
      <PageHeader title="Mass Times & Sacraments">
        <p>Join us for the celebration of the Holy Eucharist and the Sacraments</p>
      </PageHeader>
      
      <section className="section-padding">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-church-purple mb-4">Regular Mass Schedule</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              "The Eucharist is the source and summit of the Christian life." - Catechism of the Catholic Church
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <MassScheduleCard 
              day="Weekdays" 
              times={["7:30 AM", "12:00 PM"]}
              description="Monday through Friday"
            />
            <MassScheduleCard 
              day="Saturday" 
              times={["8:30 AM", "5:00 PM (Sunday Vigil)"]}
            />
            <MassScheduleCard 
              day="Sunday" 
              times={["8:00 AM", "10:00 AM", "12:00 PM", "5:00 PM"]}
              special={true}
            />
          </div>
          
          <div className="bg-muted p-6 rounded-lg border border-border">
            <h3 className="font-serif text-xl font-bold text-church-purple mb-3">Holy Days of Obligation</h3>
            <p className="mb-4 text-gray-700">
              Holy Days of Obligation are special days when Catholics are obligated to attend Mass.
              The schedule for these days is typically:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Clock className="mr-2 h-4 w-4 text-church-burgundy shrink-0 mt-1" />
                <span>Vigil Mass: 7:00 PM (evening before)</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-4 w-4 text-church-burgundy shrink-0 mt-1" />
                <span>Holy Day: 7:30 AM, 12:00 PM, and 7:00 PM</span>
              </li>
            </ul>
            <p className="mt-4 text-sm italic text-muted-foreground">
              *Please check the bulletin or call the parish office for specific Holy Day schedules, 
              as they may vary depending on the feast day.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-church-cream">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-church-purple mb-4">Confession Schedule</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Sacrament of Reconciliation offers God's forgiveness and grace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="font-serif text-xl font-bold text-church-purple mb-4">Regular Confession Times</h3>
                <ul className="space-y-4 text-gray-700 flex-grow">
                  <li className="flex items-start">
                    <CalendarIcon className="mr-2 h-5 w-5 text-church-burgundy shrink-0" />
                    <div>
                      <span className="font-medium">Saturday</span>
                      <p>3:30 PM - 4:30 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CalendarIcon className="mr-2 h-5 w-5 text-church-burgundy shrink-0" />
                    <div>
                      <span className="font-medium">Wednesday</span>
                      <p>5:30 PM - 6:30 PM</p>
                    </div>
                  </li>
                </ul>
                <p className="text-sm italic text-muted-foreground mt-4">
                  Confessions are also available by appointment. Please contact the parish office.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="font-serif text-xl font-bold text-church-purple mb-4">About the Sacrament</h3>
                <p className="text-gray-700 flex-grow">
                  The Sacrament of Reconciliation (Confession) is an encounter with God's mercy and forgiveness. 
                  Through this sacrament, we receive absolution for our sins and are reconciled with God and the Church.
                </p>
                <p className="text-sm italic text-muted-foreground mt-4">
                  For resources on examination of conscience or if you're nervous about returning to confession after 
                  a long time, please visit our parish office or speak with one of our priests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-church-purple mb-4">Other Sacraments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The seven sacraments are channels of God's grace in our lives
            </p>
          </div>
          
          <Tabs defaultValue="baptism" className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="baptism">Baptism</TabsTrigger>
              <TabsTrigger value="communion">First Communion</TabsTrigger>
              <TabsTrigger value="confirmation">Confirmation</TabsTrigger>
              <TabsTrigger value="marriage">Marriage</TabsTrigger>
            </TabsList>
            
            <TabsContent value="baptism" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-church-purple mb-4">Baptism</h3>
                  <p className="mb-4 text-gray-700">
                    Baptism is the first sacrament of initiation, where we are cleansed of original sin and welcome 
                    the newly baptized into the family of God.
                  </p>
                  <h4 className="font-medium text-lg mb-2 text-church-burgundy">Requirements</h4>
                  <ul className="mb-4 space-y-1 text-gray-700">
                    <li>• Parents must be registered members of the parish</li>
                    <li>• Parents must attend a baptismal preparation class</li>
                    <li>• Godparents must be practicing Catholics</li>
                  </ul>
                  <h4 className="font-medium text-lg mb-2 text-church-burgundy">Schedule</h4>
                  <p className="text-gray-700">
                    Baptisms are typically celebrated on the 2nd and 4th Sundays of the month at 2:00 PM. 
                    Please contact the parish office to schedule.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/src/assets/images/baptism.jpg" 
                    alt="Baptism" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="communion" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-church-purple mb-4">First Holy Communion</h3>
                  <p className="mb-4 text-gray-700">
                    First Holy Communion is when a person first receives the Eucharist, the Body and Blood of Christ. 
                    This sacrament typically takes place in second grade after proper preparation.
                  </p>
                  <h4 className="font-medium text-lg mb-2 text-church-burgundy">Requirements</h4>
                  <ul className="mb-4 space-y-1 text-gray-700">
                    <li>• Children must be baptized</li>
                    <li>• Complete two years of religious education</li>
                    <li>• Regular attendance at Sunday Mass</li>
                  </ul>
                  <h4 className="font-medium text-lg mb-2 text-church-burgundy">Schedule</h4>
                  <p className="text-gray-700">
                    First Communion Mass is typically celebrated in May. Preparation classes begin in September. 
                    Please contact our Director of Religious Education for more information.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/src/assets/images/communion.jpg" 
                    alt="First Communion" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="confirmation" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-church-purple mb-4">Confirmation</h3>
                  <p className="mb-4 text-gray-700">
                    Confirmation completes the grace of Baptism and strengthens us with the gifts of the Holy Spirit. 
                    It is typically celebrated in high school.
                  </p>
                  <h4 className="font-medium text-lg mb-2 text-church-burgundy">Requirements</h4>
                  <ul className="mb-4 space-y-1 text-gray-700">
                    <li>• Must be baptized and have received First Communion</li>
                    <li>• Complete the two-year Confirmation preparation program</li>
                    <li>• Choose a sponsor who is a confirmed, practicing Catholic</li>
                    <li>• Complete service hours and attend a retreat</li>
                  </ul>
                  <h4 className="font-medium text-lg mb-2 text-church-burgundy">Schedule</h4>
                  <p className="text-gray-700">
                    Confirmation is typically celebrated in the spring with the Bishop. Preparation begins in the fall. 
                    Please contact our Youth Minister for more information.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/src/assets/images/confirmation.jpg" 
                    alt="Confirmation" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="marriage" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-church-purple mb-4">Marriage</h3>
                  <p className="mb-4 text-gray-700">
                    The Sacrament of Marriage unites a man and a woman in a covenant of love, reflecting Christ's love for the Church.
                  </p>
                  <h4 className="font-medium text-lg mb-2 text-church-burgundy">Requirements</h4>
                  <ul className="mb-4 space-y-1 text-gray-700">
                    <li>• At least one person must be Catholic</li>
                    <li>• Complete marriage preparation program (6 months minimum)</li>
                    <li>• Meet with the priest or deacon for preparation sessions</li>
                    <li>• Attend a Pre-Cana retreat</li>
                  </ul>
                  <h4 className="font-medium text-lg mb-2 text-church-burgundy">Schedule</h4>
                  <p className="text-gray-700">
                    Please contact the parish office at least 6 months before your desired wedding date to begin the 
                    preparation process and check availability.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/src/assets/images/wedding.jpg" 
                    alt="Catholic Wedding" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default MassTimesPage;
