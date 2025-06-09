
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const achievements = [
    "M.A. in Psychology from Andhra University",
    "Certified CBT Therapist",
    "Licensed Clinical Psychologist",
    "Member of Indian Association of Clinical Psychologists"
  ];

  const specializations = [
    "Anxiety & Depression",
    "Relationship Counseling",
    "Family Therapy",
    "Stress Management",
    "Child Psychology",
    "Trauma Therapy"
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Dr. Vani
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With over a decade of experience in clinical psychology, I am dedicated to helping individuals 
            find balance, heal from trauma, and build resilience for a fulfilling life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 shadow-xl border-0 bg-white dark:bg-gray-800">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Education & Credentials
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-xl border-0 bg-white dark:bg-gray-800">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-3">
                {specializations.map((spec, index) => (
                  <Badge 
                    key={index} 
                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 text-sm"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">My Approach</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I believe in a holistic approach to mental health, combining evidence-based therapies 
                  with compassionate understanding. Every individual's journey is unique, and I tailor 
                  my therapeutic approach to meet your specific needs and goals.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
