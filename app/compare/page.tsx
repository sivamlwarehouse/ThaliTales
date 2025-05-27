"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, Check, X, Clock, Users, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const quotes = [
  {
    id: 1,
    catererName: "Andhra Delight Caterers",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    price: 12500,
    pricePerPerson: 250,
    deliveryTime: "2 hours before event",
    servingStyle: "Buffet",
    specialRequirements: true,
    customizationOptions: true,
    menuItems: {
      starters: ["Mirchi Bajji", "Punugulu", "Chicken 65"],
      mains: ["Andhra Chicken Curry", "Gongura Mutton", "Pulihora", "Gutti Vankaya", "Tomato Pappu"],
      sides: ["Curd Rice", "Appadam", "Pesarattu"],
      desserts: ["Payasam", "Bobbatlu"]
    }
  },
  {
    id: 2,
    catererName: "Spice Junction",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    price: 11000,
    pricePerPerson: 220,
    deliveryTime: "3 hours before event",
    servingStyle: "Served",
    specialRequirements: true,
    customizationOptions: false,
    menuItems: {
      starters: ["Punugulu", "Banana Bajji", "Chicken Pakora"],
      mains: ["Andhra Chicken Curry", "Natu Kodi Pulusu", "Pulihora", "Bendakaya Pulusu", "Tomato Pappu"],
      sides: ["Curd Rice", "Appadam", "Pesarattu"],
      desserts: ["Semiya Payasam"]
    }
  },
  {
    id: 3,
    catererName: "South Spice Masters",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    price: 14000,
    pricePerPerson: 280,
    deliveryTime: "2.5 hours before event",
    servingStyle: "Buffet & Live Stations",
    specialRequirements: true,
    customizationOptions: true,
    menuItems: {
      starters: ["Mirchi Bajji", "Punugulu", "Chicken 65", "Royyala Vepudu"],
      mains: ["Bamboo Chicken Biryani", "Gongura Mutton", "Pulihora", "Gutti Vankaya", "Tomato Pappu", "Kakarakaya Pulusu"],
      sides: ["Curd Rice", "Appadam", "Pesarattu", "Onion Pakoda"],
      desserts: ["Payasam", "Bobbatlu", "Ariselu"]
    }
  }
];

const eventDetails = {
  occasionType: "Birthday Party",
  date: "May 30, 2025",
  time: "7:00 PM",
  location: "123 Example Street, Hyderabad",
  guestCount: 50
};

export default function ComparePage() {
  const [selectedQuotes, setSelectedQuotes] = useState<number[]>([1, 2]);
  const { toast } = useToast();

  const toggleQuote = (id: number) => {
    if (selectedQuotes.includes(id)) {
      // Ensure at least one quote remains selected
      if (selectedQuotes.length > 1) {
        setSelectedQuotes(selectedQuotes.filter(quoteId => quoteId !== id));
      }
    } else {
      setSelectedQuotes([...selectedQuotes, id]);
    }
    console.log("Selected quotes:", selectedQuotes);
  };

  const handleAccept = (catererName: string) => {
    console.log(`Accepting quote from ${catererName}`);
    toast({
      title: "Quote Accepted",
      description: `You've accepted the quote from ${catererName}. They will contact you shortly to confirm the details.`,
    });
  };

  const filteredQuotes = quotes.filter(quote => selectedQuotes.includes(quote.id));

  return (
    <main className="min-h-screen bg-andhra-50">
      <Navigation />
      
      <section className="py-10">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="heading-2 mb-4">Compare Catering Quotes</h1>
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-andhra-500">Date & Time</p>
                      <p className="font-medium">{eventDetails.date}, {eventDetails.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-andhra-500">Guests</p>
                      <p className="font-medium">{eventDetails.guestCount} people</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-andhra-500">Location</p>
                      <p className="font-medium">{eventDetails.location}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-andhra-500">Occasion</p>
                    <p className="font-medium">{eventDetails.occasionType}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-andhra-700 font-medium">Compare:</span>
            {quotes.map(quote => (
              <Button 
                key={quote.id} 
                variant={selectedQuotes.includes(quote.id) ? "default" : "outline"}
                size="sm"
                className={selectedQuotes.includes(quote.id) ? "bg-primary hover:bg-primary-600" : ""}
                onClick={() => toggleQuote(quote.id)}
              >
                {quote.catererName}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredQuotes.map(quote => (
              <Card key={quote.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <Image 
                    src={quote.image}
                    alt={quote.catererName}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
                    <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-medium">{quote.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-2 font-poppins">{quote.catererName}</h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-andhra-500">Total Price</p>
                      <p className="text-xl font-semibold text-primary">₹{quote.price.toLocaleString()}</p>
                      <p className="text-xs text-andhra-500">(₹{quote.pricePerPerson}/person)</p>
                    </div>
                    <div>
                      <p className="text-sm text-andhra-500">Serving Style</p>
                      <p className="font-medium">{quote.servingStyle}</p>
                    </div>
                    <div>
                      <p className="text-sm text-andhra-500">Delivery</p>
                      <p className="font-medium">{quote.deliveryTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-andhra-500">Special Requirements</p>
                      <p className="font-medium flex items-center">
                        {quote.specialRequirements ? 
                          <><Check className="h-4 w-4 text-green-500 mr-1" /> Available</> : 
                          <><X className="h-4 w-4 text-red-500 mr-1" /> Not Available</>}
                      </p>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="mains" className="w-full mb-6">
                    <TabsList className="grid grid-cols-4">
                      <TabsTrigger value="starters">Starters</TabsTrigger>
                      <TabsTrigger value="mains">Mains</TabsTrigger>
                      <TabsTrigger value="sides">Sides</TabsTrigger>
                      <TabsTrigger value="desserts">Desserts</TabsTrigger>
                    </TabsList>
                    <TabsContent value="starters" className="mt-4">
                      <ul className="list-disc pl-5 space-y-1">
                        {quote.menuItems.starters.map((item, index) => (
                          <li key={index} className="text-andhra-700">{item}</li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="mains" className="mt-4">
                      <ul className="list-disc pl-5 space-y-1">
                        {quote.menuItems.mains.map((item, index) => (
                          <li key={index} className="text-andhra-700">{item}</li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="sides" className="mt-4">
                      <ul className="list-disc pl-5 space-y-1">
                        {quote.menuItems.sides.map((item, index) => (
                          <li key={index} className="text-andhra-700">{item}</li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="desserts" className="mt-4">
                      <ul className="list-disc pl-5 space-y-1">
                        {quote.menuItems.desserts.map((item, index) => (
                          <li key={index} className="text-andhra-700">{item}</li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">Message</Button>
                    <Button 
                      className="flex-1 bg-accent-500 hover:bg-accent-600 text-white"
                      onClick={() => handleAccept(quote.catererName)}
                    >
                      Accept & Pay
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}