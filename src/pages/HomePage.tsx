
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MassScheduleCard } from "@/components/ui/mass-schedule-card";
import { EventCard } from "@/components/ui/event-card";
import { AnnouncementCard } from "@/components/ui/announcement-card";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-church-purple text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/src/assets/images/church-interior.jpg)' }}
        >
          <div className="absolute inset-0 bg-church-purple/60"></div>
        </div>
        
        <div className="church-container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to St. Michael's Catholic Church
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl">
              Join our vibrant faith community as we grow together in Christ's love through worship, 
              fellowship, and service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-church-gold hover:bg-church-gold/90 text-church-purple">
                <Link to="/mass-times">Mass Times</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mass Schedule Section */}
      <section className="bg-church-cream py-16">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-church-purple mb-4">Mass Schedule</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for the celebration of the Holy Eucharist
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/mass-times">View Full Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-church-purple mb-4">Latest Announcements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest news and announcements from our parish
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnnouncementCard
              title="Holy Week Schedule"
              date="March 28, 2025"
              content="Join us for our Holy Week services. Palm Sunday, Holy Thursday, Good Friday, and Easter Vigil schedules are now available."
              important={true}
            />
            <AnnouncementCard
              title="First Communion Registration"
              date="March 25, 2025"
              content="Registration for First Holy Communion classes is now open. Classes will begin in September."
            />
            <AnnouncementCard
              title="Parish Picnic"
              date="March 20, 2025"
              content="Our annual parish picnic will be held on June 12th. All parishioners are invited to join us for food, games, and fellowship."
            />
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/announcements">View All Announcements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-muted py-16">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-church-purple mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for these special events in our parish community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EventCard
              title="Bible Study: Gospel of John"
              date="April 5, 2025"
              time="7:00 PM - 8:30 PM"
              location="Parish Hall"
              description="Join us for an in-depth study of the Gospel of John led by Deacon Michael."
              imageUrl="/src/assets/images/bible-study.jpg"
            />
            <EventCard
              title="Parish Mission"
              date="April 10-12, 2025"
              time="7:00 PM"
              location="Main Church"
              description="Three nights of prayer, reflection, and renewal with guest speaker Fr. James Martin."
              imageUrl="/src/assets/images/parish-mission.jpg"
            />
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-church-purple text-white">
        <div className="church-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Be Part of Our Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            St. Michael's Catholic Church is more than just a place of worship. It's a community where we grow in faith together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Card className="max-w-sm bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold mb-3">New Parishioners</h3>
                <p className="mb-4 text-white/80">
                  We warmly welcome you to our parish family. Learn how to register and get involved.
                </p>
                <Button className="bg-church-gold text-church-purple hover:bg-church-gold/90">
                  Register Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="max-w-sm bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold mb-3">Volunteer</h3>
                <p className="mb-4 text-white/80">
                  Share your time and talents with our parish community through various ministries.
                </p>
                <Button className="bg-church-gold text-church-purple hover:bg-church-gold/90">
                  Get Involved
                </Button>
              </CardContent>
            </Card>
            
            <Card className="max-w-sm bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold mb-3">Donate</h3>
                <p className="mb-4 text-white/80">
                  Support our parish's mission through your generous contributions.
                </p>
                <Button className="bg-church-gold text-church-purple hover:bg-church-gold/90">
                  Support Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
