
import PageHeader from "@/components/layout/PageHeader";
import { AnnouncementCard } from "@/components/ui/announcement-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

// Sample announcements data
const allAnnouncements = [
  {
    id: 1,
    title: "Holy Week Schedule",
    date: "March 28, 2025",
    content: "Join us for our Holy Week services. Palm Sunday Masses will follow our regular Sunday schedule. Holy Thursday Mass of the Lord's Supper will be at 7:00 PM. Good Friday service will be at 3:00 PM. Easter Vigil will begin at 8:00 PM on Holy Saturday. Easter Sunday Masses will follow our regular Sunday schedule.",
    important: true
  },
  {
    id: 2,
    title: "First Communion Registration",
    date: "March 25, 2025",
    content: "Registration for First Holy Communion classes is now open. Classes will begin in September. Children must be in at least 2nd grade and have completed one year of religious education prior to the First Communion year. Please contact the parish office for more information.",
    important: false
  },
  {
    id: 3,
    title: "Parish Picnic",
    date: "March 20, 2025",
    content: "Our annual parish picnic will be held on June 12th at 12:00 PM in the parish field. All parishioners are invited to join us for food, games, and fellowship. Please bring a dish to share if your last name begins with: A-H: Side dish, I-P: Main dish, Q-Z: Dessert. Drinks will be provided.",
    important: false
  },
  {
    id: 4,
    title: "Volunteer Appreciation Dinner",
    date: "March 15, 2025",
    content: "Our annual volunteer appreciation dinner will be held on April 24th at 6:30 PM in the parish hall. All who have volunteered in any ministry over the past year are invited to attend. Please RSVP by April 17th by calling the parish office.",
    important: false
  },
  {
    id: 5,
    title: "RCIA Classes Beginning",
    date: "March 10, 2025",
    content: "Are you or someone you know interested in becoming Catholic? RCIA (Rite of Christian Initiation for Adults) classes will begin on September 15th. These sessions are for adults who wish to be baptized, received into the Catholic Church, or complete their sacraments. Please contact Deacon Robert for more information.",
    important: true
  },
  {
    id: 6,
    title: "Eucharistic Adoration",
    date: "March 5, 2025",
    content: "Eucharistic Adoration will be held every Friday from 9:00 AM to 5:00 PM in the chapel. Please consider spending some time in prayer with our Lord. Sign-up sheets for hourly adorers are available in the church vestibule.",
    important: false
  },
  {
    id: 7,
    title: "Catholic Schools Week",
    date: "February 25, 2025",
    content: "St. Michael's Catholic School will celebrate Catholic Schools Week from January 26th through February 1st. There will be special events throughout the week, including an Open House on Sunday, January 26th from 12:00 PM to 2:00 PM. All parishioners are invited to attend.",
    important: false
  },
  {
    id: 8,
    title: "Parish Mission",
    date: "February 20, 2025",
    content: "Our annual Parish Mission will be held April 10-12 at 7:00 PM each evening. This year's theme is 'Growing in Faith, Hope, and Love.' Our guest speaker will be Fr. James Martin, S.J. All parishioners are encouraged to attend this time of spiritual renewal.",
    important: true
  },
  {
    id: 9,
    title: "Knights of Columbus Breakfast",
    date: "February 15, 2025",
    content: "The Knights of Columbus will host a pancake breakfast after all Sunday morning Masses on March 6th. Proceeds will benefit the parish food pantry. Cost is $5 per person or $15 per family.",
    important: false
  },
];

const AnnouncementsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAnnouncements, setFilteredAnnouncements] = useState(allAnnouncements);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = allAnnouncements.filter(announcement => 
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAnnouncements(filtered);
  };
  
  return (
    <>
      <PageHeader title="Parish Announcements">
        <p>Stay updated with the latest news and information from St. Michael's Catholic Church</p>
      </PageHeader>
      
      <section className="section-padding">
        <div className="church-container">
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search announcements..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button type="submit">Search</Button>
            </form>
          </div>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-church-purple mb-6">Important Announcements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAnnouncements
                .filter(announcement => announcement.important)
                .map(announcement => (
                  <AnnouncementCard
                    key={announcement.id}
                    title={announcement.title}
                    date={announcement.date}
                    content={announcement.content}
                    important={announcement.important}
                  />
                ))}
            </div>
          </div>
          
          <div>
            <h2 className="font-serif text-2xl font-bold text-church-purple mb-6">All Announcements</h2>
            {filteredAnnouncements.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No announcements found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAnnouncements
                  .filter(announcement => !announcement.important)
                  .map(announcement => (
                    <AnnouncementCard
                      key={announcement.id}
                      title={announcement.title}
                      date={announcement.date}
                      content={announcement.content}
                      important={announcement.important}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AnnouncementsPage;
