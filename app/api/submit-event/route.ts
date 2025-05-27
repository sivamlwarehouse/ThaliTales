import { NextResponse } from 'next/server';

const mockCaterers = [
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
    ],
    specialties: ["Dosa", "Idli", "Biryani"],
    minOrderQuantity: 50
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
    ],
    specialties: ["Thali", "Pulao", "Sweets"],
    minOrderQuantity: 25
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
    ],
    specialties: ["Seafood", "Premium Thali", "International Fusion"],
    minOrderQuantity: 100
  },
  {
    id: 4,
    catererName: "Andhra Spice Magic",
    rating: 4.7,
    reviews: 167,
    pricePerPerson: 449,
    deliveryTime: "3 hours before event",
    specialNote: "Authentic Andhra flavors",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    features: [
      "Spice customization",
      "Live appam counter",
      "Traditional servers",
      "Special pickle selection"
    ],
    specialties: ["Andhra Thali", "Biryani", "Pickles"],
    minOrderQuantity: 50
  },
  {
    id: 5,
    catererName: "Kerala Taste Buds",
    rating: 4.8,
    reviews: 142,
    pricePerPerson: 479,
    deliveryTime: "3-4 hours before event",
    specialNote: "Authentic Kerala cuisine",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    features: [
      "Traditional Kerala style",
      "Fresh seafood options",
      "Live counter for appam",
      "Special banana leaf service"
    ],
    specialties: ["Kerala Sadhya", "Seafood", "Appam"],
    minOrderQuantity: 40
  },
  {
    id: 6,
    catererName: "Bangalore Food Studio",
    rating: 4.5,
    reviews: 89,
    pricePerPerson: 429,
    deliveryTime: "2 hours before event",
    specialNote: "Modern fusion with traditional taste",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    features: [
      "Contemporary presentation",
      "Fusion options available",
      "Live counters",
      "Special diet menus"
    ],
    specialties: ["Karnataka Special", "Fusion Food", "Modern Indian"],
    minOrderQuantity: 30
  }
];

export async function POST(request: Request) {
  try {
    const eventData = await request.json();

    // Generate a unique event ID (in a real app, this would come from your database)
    const eventId = `EVT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Here you would typically:
    // 1. Validate the data
    // 2. Save to your database
    // 3. Send notifications to caterers
    // 4. Return a success response with quotes

    return NextResponse.json(
      { 
        message: 'Event request submitted successfully',
        eventId: eventId,
        quotes: mockCaterers
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing event submission:', error);
    return NextResponse.json(
      { message: 'Failed to process event submission' },
      { status: 500 }
    );
  }
} 