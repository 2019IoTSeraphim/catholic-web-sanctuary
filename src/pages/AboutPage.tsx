
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About Our Parish">
        <p>Learn about our history, mission, and the people who make St. Michael's a vibrant faith community.</p>
      </PageHeader>
      
      <section className="section-padding">
        <div className="church-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-church-purple mb-4">Our History</h2>
              <p className="mb-4 text-gray-700">
                Founded in 1895, St. Michael's Catholic Church has been serving the faithful for over 125 years. 
                What began as a small parish with just a few families has grown into a vibrant faith community 
                with thousands of parishioners.
              </p>
              <p className="mb-4 text-gray-700">
                Our beautiful church building, constructed in 1910, stands as a testament to the faith and 
                dedication of those who came before us. The stunning stained glass windows, intricate woodwork, 
                and sacred art all contribute to the reverent atmosphere where countless sacraments have been 
                celebrated over the generations.
              </p>
              <p className="text-gray-700">
                Throughout our history, St. Michael's has been guided by faithful priests and supported by 
                dedicated parishioners who have built a legacy of faith, service, and community outreach 
                that continues to this day.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/src/assets/images/church-building.jpg" 
                alt="St. Michael's Church Building" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-church-cream">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-church-purple mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by our Catholic faith, we strive to live out our mission every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-church-purple/10 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-church-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-center font-semibold text-church-purple mb-2">Faith</h3>
                <p className="text-center text-gray-700">
                  We embrace and celebrate our Catholic faith through vibrant worship, the sacraments, and lifelong 
                  faith formation for all ages.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-church-purple/10 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-church-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-center font-semibold text-church-purple mb-2">Community</h3>
                <p className="text-center text-gray-700">
                  We foster a welcoming, inclusive parish where everyone can find a spiritual home and forge meaningful relationships.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-church-purple/10 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-church-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-center font-semibold text-church-purple mb-2">Service</h3>
                <p className="text-center text-gray-700">
                  We answer Christ's call to serve by reaching out to those in need in our parish, community, and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="church-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-church-purple mb-4">Our Clergy & Staff</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated people who guide and serve our parish community
            </p>
          </div>
          
          <Tabs defaultValue="clergy" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="clergy">Clergy</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
            </TabsList>
            
            <TabsContent value="clergy" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ClergySummary
                  name="Rev. John Donovan"
                  title="Pastor"
                  image="/src/assets/images/pastor.jpg"
                  bio="Fr. John has served as pastor of St. Michael's since 2018. He was ordained in 2005 and has a passion for liturgy and Catholic education."
                />
                <ClergySummary
                  name="Rev. Michael Chen"
                  title="Associate Pastor"
                  image="/src/assets/images/associate-pastor.jpg"
                  bio="Fr. Michael joined our parish in 2022. He focuses on youth ministry and outreach to young adults."
                />
                <ClergySummary
                  name="Deacon Robert Smith"
                  title="Permanent Deacon"
                  image="/src/assets/images/deacon.jpg"
                  bio="Deacon Robert has served our parish for over 15 years. He leads our RCIA program and is involved in marriage preparation."
                />
              </div>
            </TabsContent>
            
            <TabsContent value="staff" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <StaffSummary
                  name="Sarah Johnson"
                  title="Parish Secretary"
                  image="/src/assets/images/secretary.jpg"
                  contact="office@stmichaels.church"
                />
                <StaffSummary
                  name="Mark Williams"
                  title="Director of Religious Education"
                  image="/src/assets/images/dre.jpg"
                  contact="dre@stmichaels.church"
                />
                <StaffSummary
                  name="Lisa Chen"
                  title="Music Director"
                  image="/src/assets/images/music-director.jpg"
                  contact="music@stmichaels.church"
                />
                <StaffSummary
                  name="James Rodriguez"
                  title="Youth Minister"
                  image="/src/assets/images/youth-minister.jpg"
                  contact="youth@stmichaels.church"
                />
                <StaffSummary
                  name="Emily Thompson"
                  title="Finance Manager"
                  image="/src/assets/images/finance.jpg"
                  contact="finance@stmichaels.church"
                />
                <StaffSummary
                  name="Thomas Garcia"
                  title="Facilities Manager"
                  image="/src/assets/images/facilities.jpg"
                  contact="facilities@stmichaels.church"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

const ClergySummary = ({ name, title, image, bio }: { name: string; title: string; image: string; bio: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-serif text-xl font-bold text-church-purple">{name}</h3>
      <p className="text-church-burgundy font-medium mb-2">{title}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
};

const StaffSummary = ({ name, title, image, contact }: { name: string; title: string; image: string; contact: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-serif text-lg font-bold text-church-purple">{name}</h3>
      <p className="text-church-burgundy font-medium mb-1">{title}</p>
      <p className="text-gray-600 text-sm">{contact}</p>
    </div>
  );
};

export default AboutPage;
