import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const caterers = [
  {
    id: 1,
    name: "Andhra Delight Caterers",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    responseTime: 15,
    specialties: ["Biryani", "Gongura Dishes", "Traditional Sweets"],
    location: "Hyderabad, Telangana"
  },
  {
    id: 2,
    name: "Spice Junction",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    responseTime: 22,
    specialties: ["Pulihora", "Andhra Meals", "Seafood"],
    location: "Vijayawada, Andhra Pradesh"
  },
  {
    id: 3,
    name: "South Spice Masters",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    responseTime: 10,
    specialties: ["Wedding Feasts", "Bamboo Biryani", "Authentic Curries"],
    location: "Guntur, Andhra Pradesh"
  }
];

export function FeaturedCaterers() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12 space-y-3">
          <h2 className="heading-2">Featured Caterers</h2>
          <p className="body-text text-andhra-600 max-w-2xl mx-auto">
            Connect with our top-rated caterers specializing in authentic Andhra Pradesh cuisine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caterers.map((caterer) => (
            <Card key={caterer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={caterer.image}
                  alt={caterer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-poppins text-xl font-semibold">{caterer.name}</h3>
                  <div className="flex items-center bg-primary-100 px-2 py-1 rounded-md">
                    <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{caterer.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-andhra-600 mb-4">
                  Responded in {caterer.responseTime} mins · {caterer.location}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {caterer.specialties.map((specialty, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-secondary-100 text-secondary-800 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">View Profile</Button>
                  <Button className="flex-1 bg-primary hover:bg-primary-600">Request Quote</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary-50">
            View All Caterers
          </Button>
        </div>
      </div>
    </section>
  );
}