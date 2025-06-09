
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToAppointments = () => {
    const element = document.querySelector('#appointments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Find Your
                <span className="block bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Inner Peace
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Professional psychological counseling with compassionate care. 
                I help you navigate life's challenges and discover your true potential.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToAppointments}
                className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl shadow-2xl">
              <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-2xl shadow-inner flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full flex items-center justify-center">
                    <img 
                      src="/profile-varsha.jpg" 
                      alt="Dr. Vani" 
                      className="w-24 h-24 rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Dr. Vani</h3>
                  <p className="text-gray-600 dark:text-gray-300">Psychologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
