
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bharat Chandra",
      rating: 5,
      text: "Dr. Vani helped me overcome my anxiety and depression. Her compassionate approach and practical strategies have transformed my life.",
      location: "Hyderabad"
    },
    {
      name: "Rajesh",
      rating: 5,
      text: "The couples counseling sessions saved our marriage. Dr. Vani's guidance helped us communicate better and understand each other.",
      location: "Visakhapatnam"
    },
    {
      name: "Ajith kumar",
      rating: 5,
      text: "As a working professional, I was struggling with stress and work-life balance. The therapy sessions have been incredibly helpful.",
      location: "Visakhapatnam"
    },
    {
      name: "Arjun kumar",
      rating: 5,
      text: "Dr. Vani's expertise in child psychology helped my son overcome his behavioral issues. We're grateful for her patience and understanding.",
      location: "Hyderabad"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real stories from people who have found healing and growth through our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
