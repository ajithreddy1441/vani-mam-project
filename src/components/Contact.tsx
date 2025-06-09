
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 11 2345 6789"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["dr.vani@mindhealing.com", "appointments@mindhealing.com"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Mind Healing Clinic", "123, Wellness Center", "Visakhapatnam"],
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
      action: "Book Appointment"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to take the first step? Reach out to schedule your consultation or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white dark:bg-gray-800">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 dark:text-gray-300 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16">
          <Card className="shadow-xl border-0 bg-white dark:bg-gray-800">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-orange-200 to-pink-200 dark:from-orange-800 dark:to-pink-800 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Visit Our Clinic
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our comfortable and welcoming space is designed to help you feel at ease during your visit.
                  </p>
                  <Button className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
