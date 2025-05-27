"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the catering service work?",
    answer: "Our platform connects you with verified caterers specializing in authentic Andhra Pradesh cuisine. Simply select your occasion type, enter event details, choose your menu preferences, and submit your request. Multiple caterers will send you personalized quotes, allowing you to compare and choose the best match for your event."
  },
  {
    question: "How far in advance should I book a caterer?",
    answer: "For small gatherings (under 50 guests), we recommend booking at least 1 week in advance. For medium events (50-100 guests), 2-3 weeks is ideal. For larger events like weddings with over 100 guests, booking 4-6 weeks in advance ensures you get the best caterers and customized menus."
  },
  {
    question: "Can I customize the menu for my specific dietary needs?",
    answer: "Absolutely! All our caterers offer customization options. You can specify dietary restrictions (vegetarian, non-vegetarian, vegan), spice levels, and even request specific traditional Andhra dishes that might not be on the standard menu. Just mention your requirements when submitting your request."
  },
  {
    question: "What areas do your caterers serve?",
    answer: "Our network of caterers primarily serves major cities and towns in Andhra Pradesh and Telangana, including Hyderabad, Vijayawada, Visakhapatnam, Guntur, Tirupati, and surrounding areas. Some caterers also travel to neighboring states for larger events."
  },
  {
    question: "How are the caterers verified?",
    answer: "All caterers undergo a thorough verification process that includes checking business licenses, food safety certifications, kitchen inspections, and customer reviews. We also conduct taste tests and quality assessments to ensure they maintain authentic Andhra cuisine standards."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept various payment methods including credit/debit cards, UPI, net banking, and mobile wallets. For larger events, caterers typically require a 50% advance payment with the balance due before the event."
  }
];

export function FaqSection() {
  return (
    <section className="py-16 bg-andhra-50">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="heading-2">Frequently Asked Questions</h2>
          <p className="body-text text-andhra-600 max-w-2xl mx-auto">
            Find answers to common questions about our catering services
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium text-andhra-800">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-andhra-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}