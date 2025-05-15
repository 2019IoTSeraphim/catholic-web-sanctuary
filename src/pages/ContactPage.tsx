
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock, Church } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting St. Michael's Parish. We'll respond shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    <>
      <PageHeader title="Contact Us">
        <p>We'd love to hear from you! Reach out with any questions, prayer requests, or to learn more about our parish.</p>
      </PageHeader>
      
      <section className="section-padding">
        <div className="church-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-church-purple/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-church-purple" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-church-purple mb-2">Our Location</h3>
                    <address className="not-italic text-gray-700">
                      123 Catholic Church St.<br />
                      New York, NY 10001<br />
                    </address>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-church-purple/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-church-purple" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-church-purple mb-2">Phone</h3>
                    <p className="text-gray-700">
                      Parish Office: (555) 123-4567<br />
                      Religious Education: (555) 123-4568
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-church-purple/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-church-purple" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-church-purple mb-2">Email</h3>
                    <p className="text-gray-700">
                      General Inquiries: <a href="mailto:info@stmichaels.church" className="text-church-burgundy hover:underline">info@stmichaels.church</a><br />
                      Pastor: <a href="mailto:pastor@stmichaels.church" className="text-church-burgundy hover:underline">pastor@stmichaels.church</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-church-purple/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-church-purple" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-church-purple mb-2">Office Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 4:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-church-purple/10 p-3 rounded-full">
                    <Church className="h-6 w-6 text-church-purple" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-church-purple mb-2">Mass Times</h3>
                    <p className="text-gray-700">
                      Weekdays: 7:30 AM and 12:00 PM<br />
                      Saturday: 8:30 AM and 5:00 PM (Vigil)<br />
                      Sunday: 8:00 AM, 10:00 AM, 12:00 PM, and 5:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-serif text-2xl font-bold text-church-purple mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="Your Name" 
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          placeholder="(555) 123-4567" 
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <select 
                          id="subject" 
                          name="subject" 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Mass Intentions">Mass Intentions</option>
                          <option value="Sacraments">Sacraments</option>
                          <option value="Join the Parish">Join the Parish</option>
                          <option value="Prayer Request">Prayer Request</option>
                          <option value="Volunteer">Volunteer Opportunities</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="How can we help you?" 
                        rows={6} 
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-church-purple hover:bg-church-purple/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="church-container">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.246022065738!2d-74.00596371214574!3d40.7127437339001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3c30bdf%3A0xb89d1fe6bc499443!2sLower%20Manhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1616603487125!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="St. Michael's Catholic Church Map"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
