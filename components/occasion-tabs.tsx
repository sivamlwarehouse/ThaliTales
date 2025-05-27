"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Calendar } from "lucide-react";
import Image from "next/image";

const occasions = [
  {
    id: "birthday",
    title: "Birthday Party",
    description: "Celebrate your special day with authentic Andhra cuisine",
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "marriage",
    title: "Marriage",
    description: "Make your wedding memorable with traditional feasts",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "housewarming",
    title: "Housewarming Ceremony",
    description: "Welcome guests to your new home with delicious food",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2080&auto=format&fit=crop"
  }
];

const mealTypes = [
  { id: "breakfast", name: "Breakfast" },
  { id: "lunch", name: "Lunch" },
  { id: "dinner", name: "Dinner" }
];

const menus = {
  birthday: {
    breakfast: [
      { name: "Idli", isVeg: true, spiceLevel: 1 },
      { name: "Pesarattu", isVeg: true, spiceLevel: 2 },
      { name: "Upma", isVeg: true, spiceLevel: 2 },
      { name: "Medu Vada", isVeg: true, spiceLevel: 2 },
      { name: "Coconut Chutney", isVeg: true, spiceLevel: 1 },
      { name: "Sambar", isVeg: true, spiceLevel: 3 },
      { name: "Filter Coffee", isVeg: true, spiceLevel: 0 }
    ],
    lunch: [
      { name: "Pulihora", isVeg: true, spiceLevel: 3 },
      { name: "Chicken Curry", isVeg: false, spiceLevel: 4 },
      { name: "Gutti Vankaya", isVeg: true, spiceLevel: 3 },
      { name: "Tomato Pappu", isVeg: true, spiceLevel: 2 },
      { name: "Curd Rice", isVeg: true, spiceLevel: 1 }
    ],
    dinner: [
      { name: "Biryani (Chicken or Veg)", isVeg: false, spiceLevel: 4 },
      { name: "Mirchi Bajji", isVeg: true, spiceLevel: 4 },
      { name: "Rasam", isVeg: true, spiceLevel: 3 },
      { name: "Appadams", isVeg: true, spiceLevel: 1 },
      { name: "Payasam", isVeg: true, spiceLevel: 1 }
    ]
  },
  marriage: {
    breakfast: [
      { name: "Poha", isVeg: true, spiceLevel: 2 },
      { name: "Masala Dosa", isVeg: true, spiceLevel: 3 },
      { name: "Rava Kesari", isVeg: true, spiceLevel: 1 },
      { name: "Medu Vada", isVeg: true, spiceLevel: 2 },
      { name: "Sambar", isVeg: true, spiceLevel: 3 },
      { name: "Filter Coffee", isVeg: true, spiceLevel: 0 }
    ],
    lunch: [
      { name: "Andhra Chicken Curry", isVeg: false, spiceLevel: 5 },
      { name: "Gongura Mutton", isVeg: false, spiceLevel: 5 },
      { name: "Tomato Pappu", isVeg: true, spiceLevel: 2 },
      { name: "Gutti Vankaya", isVeg: true, spiceLevel: 3 },
      { name: "Pulihora", isVeg: true, spiceLevel: 3 },
      { name: "Curd Rice", isVeg: true, spiceLevel: 1 }
    ],
    dinner: [
      { name: "Biryani", isVeg: false, spiceLevel: 4 },
      { name: "Mirchi Bajji", isVeg: true, spiceLevel: 4 },
      { name: "Kobbari Pachadi", isVeg: true, spiceLevel: 2 },
      { name: "Rasam", isVeg: true, spiceLevel: 3 },
      { name: "Payasam", isVeg: true, spiceLevel: 1 }
    ]
  },
  housewarming: {
    breakfast: [
      { name: "Idli", isVeg: true, spiceLevel: 1 },
      { name: "Pesarattu", isVeg: true, spiceLevel: 2 },
      { name: "Upma", isVeg: true, spiceLevel: 2 },
      { name: "Coconut Chutney", isVeg: true, spiceLevel: 1 },
      { name: "Sambar", isVeg: true, spiceLevel: 3 },
      { name: "Filter Coffee", isVeg: true, spiceLevel: 0 }
    ],
    lunch: [
      { name: "Pulihora", isVeg: true, spiceLevel: 3 },
      { name: "Gutti Vankaya", isVeg: true, spiceLevel: 3 },
      { name: "Chicken Curry", isVeg: false, spiceLevel: 4 },
      { name: "Tomato Pappu", isVeg: true, spiceLevel: 2 },
      { name: "Curd Rice", isVeg: true, spiceLevel: 1 }
    ],
    dinner: [
      { name: "Biryani", isVeg: false, spiceLevel: 4 },
      { name: "Mirchi Bajji", isVeg: true, spiceLevel: 4 },
      { name: "Rasam", isVeg: true, spiceLevel: 3 },
      { name: "Payasam", isVeg: true, spiceLevel: 1 }
    ]
  }
};

export function OccasionTabs() {
  const [selectedOccasion, setSelectedOccasion] = useState("birthday");
  const [selectedMealType, setSelectedMealType] = useState("lunch");

  console.log("Selected occasion:", selectedOccasion);
  console.log("Selected meal type:", selectedMealType);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 space-y-3">
          <h2 className="heading-2">Choose Your Occasion</h2>
          <p className="body-text text-andhra-600 max-w-2xl mx-auto">
            We offer specialized catering services for different occasions with authentic Andhra Pradesh cuisine
          </p>
        </div>

        <Tabs defaultValue="birthday" className="w-full" onValueChange={setSelectedOccasion}>
          <TabsList className="grid grid-cols-3 mb-8 w-full md:w-fit mx-auto">
            {occasions.map((occasion) => (
              <TabsTrigger key={occasion.id} value={occasion.id} className="px-6">
                {occasion.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {occasions.map((occasion) => (
            <TabsContent key={occasion.id} value={occasion.id} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="col-span-1 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={occasion.image}
                      alt={occasion.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-poppins text-xl font-semibold mb-2">{occasion.title}</h3>
                    <p className="text-andhra-600 mb-4">{occasion.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm text-andhra-700">3-4 hours</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm text-andhra-700">10-200 guests</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-andhra-700">Book 3 days in advance</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-1 lg:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                      {mealTypes.map((type) => (
                        <Button 
                          key={type.id} 
                          variant={selectedMealType === type.id ? "default" : "outline"}
                          onClick={() => setSelectedMealType(type.id)}
                          className={selectedMealType === type.id ? "bg-primary hover:bg-primary-600" : ""}
                        >
                          {type.name}
                        </Button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {menus[selectedOccasion as keyof typeof menus][selectedMealType as "breakfast" | "lunch" | "dinner"].map((dish, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-andhra-50 hover:bg-white hover:shadow-md transition-all">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-andhra-800">{dish.name}</h4>
                              <div className="flex items-center gap-2 mt-2">
                                <span className={`badge ${dish.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                  {dish.isVeg ? 'Veg' : 'Non-veg'}
                                </span>
                                <div className="flex items-center">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className={`text-sm ${i < dish.spiceLevel ? `spice-level-${dish.spiceLevel}` : 'text-gray-300'}`}>
                                      🌶️
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex justify-center">
                      <Button className="bg-primary hover:bg-primary-600">
                        Plan This Menu
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}