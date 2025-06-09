
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions focused on your personal growth and healing journey.",
      price: "₹1,000 per session",
      duration: "50 minutes",
      features: ["Anxiety & Depression", "Trauma Recovery", "Self-esteem Building", "Stress Management"]
    },
    {
      title: "Couples Counseling",
      description: "Strengthen your relationship through improved communication and understanding.",
      price: "₹1,500 per session",
      duration: "60 minutes",
      features: ["Communication Skills", "Conflict Resolution", "Intimacy Issues", "Pre-marital Counseling"]
    },
    {
      title: "Family Therapy",
      description: "Heal family dynamics and create a supportive home environment.",
      price: "₹2,000 per session",
      duration: "60 minutes",
      features: ["Parent-Child Issues", "Sibling Conflicts", "Family Communication", "Behavioral Problems"]
    },
    {
      title: "Child Psychology",
      description: "Specialized care for children and adolescents facing emotional challenges.",
      price: "₹1,000 per session",
      duration: "45 minutes",
      features: ["ADHD Support", "Learning Difficulties", "Behavioral Issues", "Social Skills"]
    },
    {
      title: "Group Therapy",
      description: "Connect with others who share similar experiences in a supportive environment.",
      price: "₹1,200 per session",
      duration: "90 minutes",
      features: ["Anxiety Support Groups", "Depression Support", "Addiction Recovery", "Grief Counseling"]
    },
    {
      title: "Online Consultation",
      description: "Convenient therapy sessions from the comfort of your home.",
      price: "₹1,000 per session",
      duration: "50 minutes",
      features: ["Video Calls", "Flexible Scheduling", "Secure Platform", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive mental health services tailored to your individual needs and circumstances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white dark:bg-gray-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </CardTitle>
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-orange-600 dark:text-orange-400">{service.price}</span>
                  <span>{service.duration}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
