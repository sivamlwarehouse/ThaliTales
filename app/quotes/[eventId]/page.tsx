"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Check, X } from "lucide-react";

// Mock data for caterer quotes
const mockQuotes = [
  {
    id: 1,
    catererName: "Royal South Indian Kitchen",
    rating: 4.8,
    reviews: 156,
    pricePerPerson: 499,
    deliveryTime: "2-3 hours before event",
    specialNote: "Includes setup and serving staff",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
    features: [
      "Professional serving staff",
      "Live dosa counter",
      "Customizable spice levels",
      "Eco-friendly packaging"
    ]
  },
  {
    id: 2,
    catererName: "Traditional Thali Masters",
    rating: 4.6,
    reviews: 98,
    pricePerPerson: 399,
    deliveryTime: "3 hours before event",
    specialNote: "Known for authentic recipes",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    features: [
      "Traditional banana leaf serving",
      "Pure ghee preparations",
      "Special dietary options",
      "Complimentary desserts"
    ]
  },
  {
    id: 3,
    catererName: "Premium South Feast",
    rating: 4.9,
    reviews: 203,
    pricePerPerson: 599,
    deliveryTime: "4 hours before event",
    specialNote: "Premium ingredients & presentation",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    features: [
      "Premium ingredients only",
      "Elegant presentation",
      "Live cooking stations",
      "Dedicated event manager"
    ]
  }
];

export default function QuotesPage() {
  const params = useParams();
  const [selectedQuote, setSelectedQuote] = React.useState<number | null>(null);

  const handleAcceptQuote = (quoteId: number) => {
    setSelectedQuote(quoteId);
    // Here you would typically handle the payment flow
    // For now, we'll just show a selected state
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Available Caterer Quotes</h1>
          <p className="text-gray-600">
            Compare quotes from our verified caterers and choose the best option for your event
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {mockQuotes.map((quote) => (
            <Card key={quote.id} className={`overflow-hidden transition-all duration-200 ${
              selectedQuote === quote.id ? 'ring-2 ring-primary' : ''
            }`}>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Caterer Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{quote.catererName}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{quote.rating}</span>
                        <span className="text-gray-500">({quote.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{quote.deliveryTime}</span>
                    </div>
                    <p className="text-sm text-gray-600">{quote.specialNote}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-medium mb-3">Included in Package:</h4>
                    <ul className="space-y-2">
                      {quote.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & Action */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="text-2xl font-bold">₹{quote.pricePerPerson}</div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                    
                    {selectedQuote === quote.id ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-green-600">
                          <Check className="h-5 w-5" />
                          <span className="font-medium">Quote Accepted</span>
                        </div>
                        <Button 
                          className="w-full"
                          onClick={() => window.location.href = `/payment/${params.eventId}/${quote.id}`}
                        >
                          Proceed to Payment
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        className="w-full"
                        onClick={() => handleAcceptQuote(quote.id)}
                        disabled={selectedQuote !== null}
                      >
                        Accept Quote
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedQuote && (
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Ready to proceed with your selected caterer? Click below to complete your booking.
            </p>
            <Button 
              size="lg"
              onClick={() => window.location.href = `/payment/${params.eventId}/${selectedQuote}`}
            >
              Proceed to Payment
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 