import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Reddy",
    role: "Birthday Celebration Host",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop",
    content: "The catering service for my mother's 60th birthday was outstanding. The authentic Andhra biryani and gongura dishes reminded us of home. Everyone was impressed!",
    rating: 5
  },
  {
    id: 2,
    name: "Ravi Kumar",
    role: "Wedding Organizer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop",
    content: "We had a traditional Telugu wedding with over 200 guests. The caterers handled everything professionally - from appetizers to main courses. The bamboo biryani was the highlight!",
    rating: 5
  },
  {
    id: 3,
    name: "Lakshmi Prasad",
    role: "Housewarming Host",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop",
    content: "For our griha pravesham, we wanted traditional Andhra food. The caterer prepared everything exactly as requested, and the pulihora was just like my grandmother used to make.",
    rating: 4
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 space-y-3">
          <h2 className="heading-2">What Our Customers Say</h2>
          <p className="body-text text-andhra-600 max-w-2xl mx-auto">
            Hear from customers who found the perfect caterers for their special occasions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-andhra-800">{testimonial.name}</h3>
                    <p className="text-sm text-andhra-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-andhra-600 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}