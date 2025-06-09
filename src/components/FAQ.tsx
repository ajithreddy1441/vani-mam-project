
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What should I expect in my first therapy session?",
      answer: "Your first session will focus on getting to know you and understanding your concerns. We'll discuss your goals, background, and what brought you to therapy. This helps me create a personalized treatment plan that works best for you."
    },
    {
      question: "How long does therapy typically take?",
      answer: "The duration varies depending on your individual needs and goals. Some people see improvements in a few sessions, while others benefit from longer-term therapy. We'll regularly review your progress and adjust the treatment plan as needed."
    },
    {
      question: "Is everything I share kept confidential?",
      answer: "Yes, everything you share is strictly confidential. I follow all ethical guidelines and legal requirements for patient confidentiality. Information is only shared with your explicit consent or in rare situations where there's a risk of harm."
    },
    {
      question: "Do you offer online therapy sessions?",
      answer: "Yes, I offer secure video sessions for your convenience. Online therapy can be just as effective as in-person sessions and provides flexibility for those with busy schedules or transportation challenges."
    },
    {
      question: "What types of therapy approaches do you use?",
      answer: "I use evidence-based approaches including Cognitive Behavioral Therapy (CBT), mindfulness-based techniques, and psychodynamic therapy. The approach is tailored to your specific needs and what works best for your situation."
    },
    {
      question: "How do I know if therapy is right for me?",
      answer: "Therapy can benefit anyone looking to improve their mental health, relationships, or life satisfaction. If you're experiencing persistent stress, anxiety, depression, or life challenges, therapy can provide valuable support and tools."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about therapy and our services.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
