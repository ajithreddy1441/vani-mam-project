import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { database } from '@/lib/firebaseConfig';
import { ref, set, push } from 'firebase/database';

import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    concerns: '',
    date: undefined as Date | undefined,
    time: ''
  });

  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm();

  const handleAppointmentSubmit = async () => {
    const appointmentRef = push(ref(database, `appointments`));
    await set(appointmentRef, formData)
      .then(() => {
        toast({
          title: 'Appointment Submitted!',
          description: "We'll contact you within 24 hours to confirm."
        });
      })
      .catch(error => {
        console.error('Firebase Error:', error);
        toast({
          title: 'Error!',
          description: 'Something went wrong. Please try again later.',
          variant: 'destructive'
        });
      });
  };

  const handleEmailJSSubmit = async () => {
    const templateParams = {
      ...formData,
      date: formData.date ? format(formData.date, 'PPP') : 'Not selected'
    };

    try {
      // Send to admin
      await emailjs.send('service_lfdnad2', 'template_u2cys4k', templateParams, 'octSxKxyxTdgqfLgy');
      // Send to client
      await emailjs.send('service_lfdnad2', 'template_s5ngkhe', templateParams, 'octSxKxyxTdgqfLgy');

      toast({
        title: 'Confirmation Sent!',
        description: 'Your appointment request has been emailed.'
      });
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Email Failed',
        description: 'There was an issue sending your confirmation.',
        variant: 'destructive'
      });
    }
  };

  const handleCombinedSubmit = async () => {
    await handleAppointmentSubmit();
    await handleEmailJSSubmit();
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      concerns: '',
      date: undefined,
      time: ''
    });
  };

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
  const services = ['Individual Therapy', 'Couples Counseling', 'Family Therapy', 'Child Psychology', 'Group Therapy', 'Online Consultation'];

  return (
    <section id="appointments" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Book Your Appointment</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Take the first step towards better mental health. Schedule your consultation today.
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-white dark:bg-gray-800">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-900 dark:text-white">Schedule Your Session</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(handleCombinedSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input {...register('name', { required: true })} id="name" type="text" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input {...register('email', { required: true })} id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input {...register('phone', { required: true })} id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="h-12"><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Preferred Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full h-12 justify-start text-left font-normal", !formData.date && "text-muted-foreground")}> 
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={formData.date} onSelect={(date) => handleInputChange('date', date)} disabled={(date) => date < new Date()} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time *</Label>
                  <Select onValueChange={(value) => handleInputChange('time', value)}>
                    <SelectTrigger className="h-12"><SelectValue placeholder="Select time slot" /></SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="concerns">Tell us about your concerns</Label>
                <Textarea {...register('concerns')} id="concerns" value={formData.concerns} onChange={(e) => handleInputChange('concerns', e.target.value)} placeholder="Please share what brings you here today (optional)" className="min-h-[120px] resize-none" />
              </div>

              <Button type="submit" className="w-full h-12 bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-semibold text-lg">
                Book Appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppointmentBooking;
