"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, PartyPopper, Coffee, Home, ShoppingCart, Utensils } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 1, title: "Select Occasion Type" },
  { id: 2, title: "Choose Meal Type" },
  { id: 3, title: "Enter Event Details" },
  { id: 4, title: "Menu Selection" },
  { id: 5, title: "Review & Request" }
];

interface EventDetails {
  date: string;
  guestCount: string;
  location: string;
  specialInstructions?: string;
}

interface FormData {
  occasionType: string;
  mealType: string;
  eventDetails: EventDetails;
  menuSelection: string[];
}

interface SelectionCardProps {
  value: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
  icon?: React.ReactNode;
  description?: string;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  value,
  isSelected,
  onSelect,
  icon,
  description
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [rippleEffect, setRippleEffect] = React.useState({ x: 0, y: 0, show: false });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    setRippleEffect({ x, y, show: true });
    onSelect(value);
    toast.success(`Selected: ${value}`, {
      icon: isSelected ? "❌" : "✅"
    });
    
    setTimeout(() => setRippleEffect({ x: 0, y: 0, show: false }), 500);
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 group ${
        isSelected
          ? "bg-gradient-to-br from-orange-100 via-orange-50 to-white border-2 border-orange-500 shadow-lg"
          : "bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:via-orange-50/50 hover:to-white border-2 border-gray-100 hover:border-orange-300 hover:shadow-md"
      }`}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {rippleEffect.show && (
        <motion.div
          initial={{ scale: 0, opacity: 0.35 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bg-orange-400/30 w-10 h-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            left: rippleEffect.x,
            top: rippleEffect.y,
          }}
        />
      )}
      <motion.div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
        }`}
        style={{
          background: 'radial-gradient(circle at center, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.1) 50%, rgba(251, 146, 60, 0.05) 100%)',
        }}
      />
      <div className="p-6 flex flex-col items-center text-center gap-3 relative z-10">
        <motion.div
          className={`text-3xl transition-all duration-300 ${
            isSelected 
              ? 'text-orange-600' 
              : 'text-gray-600 group-hover:text-orange-500'
          }`}
          animate={{ 
            scale: isSelected ? 1.1 : 1,
            rotate: isHovered ? 360 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <motion.h3 
          className={`font-semibold text-lg transition-colors duration-300 ${
            isSelected 
              ? 'text-orange-600' 
              : 'text-gray-800 group-hover:text-orange-600'
          }`}
          animate={{ scale: isSelected ? 1.05 : 1 }}
        >
          {value}
        </motion.h3>
        {description && (
          <p className={`text-sm transition-colors duration-300 ${
            isSelected 
              ? 'text-orange-600/80' 
              : 'text-gray-500 group-hover:text-orange-600/70'
          }`}>
            {description}
          </p>
        )}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-2 right-2 bg-orange-500 text-white rounded-full p-1.5 shadow-lg"
            >
              <Check className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {isHovered && !isSelected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-3 left-0 right-0 text-center text-sm font-medium text-orange-600 bg-orange-50/80 py-1"
        >
          Click to select
        </motion.div>
      )}
      <motion.div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
        }`}
        style={{
          background: 'linear-gradient(45deg, rgba(251, 146, 60, 0.1) 0%, rgba(251, 146, 60, 0.15) 100%)',
        }}
      />
    </motion.div>
  );
};

const occasionTypes = [
  { value: "Birthday Party", icon: <PartyPopper />, description: "Celebrate your special day" },
  { value: "Marriage", icon: "💑", description: "Make your wedding memorable" },
  { value: "Housewarming Ceremony", icon: <Home />, description: "Welcome to your new home" }
];

const mealTypes = [
  { value: "Breakfast", icon: "🍳", description: "Start your day right" },
  { value: "Lunch", icon: "🍱", description: "Midday feast" },
  { value: "Dinner", icon: "🍽️", description: "Evening celebration" }
];

const menuItems = [
  {
    id: "idli-sambar",
    name: "Idli & Sambar",
    description: "Soft steamed rice cakes served with lentil soup",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    category: "Breakfast",
    icon: "🍚"
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potatoes",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    category: "Breakfast",
    icon: "🥞"
  },
  {
    id: "vada",
    name: "Vada",
    description: "Crispy lentil doughnuts served with chutney",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    category: "Snacks",
    icon: "🍩"
  },
  {
    id: "biryani",
    name: "Biryani",
    description: "Fragrant rice dish with aromatic spices",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    category: "Main Course",
    icon: "🍚"
  },
  {
    id: "curd-rice",
    name: "Curd Rice",
    description: "Cooling yogurt rice with mild tempering",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    category: "Main Course",
    icon: "🥛"
  },
  {
    id: "rasam",
    name: "Rasam",
    description: "Tangy and spicy tamarind soup",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    category: "Soups",
    icon: "🥣"
  },
  {
    id: "payasam",
    name: "Payasam",
    description: "Sweet dessert made with milk and vermicelli",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    category: "Dessert",
    icon: "🍶"
  },
  {
    id: "mixed-veg-curry",
    name: "Mixed Vegetable Curry",
    description: "Assorted vegetables in aromatic gravy",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    category: "Main Course",
    icon: "🥘"
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    description: "Cottage cheese in rich tomato gravy",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    category: "Main Course",
    icon: "🧀"
  },
  {
    id: "chicken-curry",
    name: "Chicken Curry",
    description: "Traditional spiced chicken curry",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    category: "Non-Veg",
    icon: "🍗"
  },
  {
    id: "fish-curry",
    name: "Fish Curry",
    description: "Fresh fish cooked in tangy curry",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
    category: "Non-Veg",
    icon: "🐟"
  }
];

interface MenuItemCardProps {
  item: {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    icon: string;
  };
  isSelected: boolean;
  onSelect: (name: string) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
        isSelected
          ? "bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50/30 border-2 border-orange-500 shadow-lg"
          : "bg-white hover:bg-orange-50/30 border-2 border-gray-100 hover:border-orange-200"
      }`}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        onSelect(item.name);
        toast.success(isSelected ? `Removed: ${item.name}` : `Added: ${item.name}`, {
          icon: item.icon
        });
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-2xl">{item.icon}</span>
          <span className="text-xs px-2 py-1 bg-orange-50 rounded-full text-orange-600">
            {item.category}
          </span>
        </div>
        <h3 className={`font-medium ${isSelected ? "text-orange-600" : "text-gray-800"}`}>
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
        
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-2 right-2 bg-orange-500 text-white rounded-full p-1"
            >
              <Check className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>

        {isHovered && !isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-2 left-0 right-0 text-center text-sm text-orange-600"
          >
            Click to add
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export function EventStepper() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<FormData>({
    occasionType: "",
    mealType: "",
    eventDetails: {
      date: "",
      guestCount: "",
      location: "",
      specialInstructions: "",
    },
    menuSelection: [],
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      
      // Send the form data to the backend
      const response = await fetch('/api/submit-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit event request');
      }

      const data = await response.json();
      
      // Show success message
      toast.success("Request submitted! Showing available caterers...");
      
      // Redirect to quotes page instead of confirmation
      router.push(`/quotes/${data.eventId}`);
    } catch (error) {
      console.error('Error submitting event:', error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepComplete = (stepId: number) => {
    switch (stepId) {
      case 1:
        return !!formData.occasionType;
      case 2:
        return !!formData.mealType;
      case 3:
        return (
          !!formData.eventDetails.date &&
          !!formData.eventDetails.guestCount &&
          !!formData.eventDetails.location
        );
      case 4:
        return formData.menuSelection.length > 0;
      case 5:
        // For the review step, check if all previous steps are complete
        return (
          !!formData.occasionType &&
          !!formData.mealType &&
          !!formData.eventDetails.date &&
          !!formData.eventDetails.guestCount &&
          !!formData.eventDetails.location &&
          formData.menuSelection.length > 0
        );
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {occasionTypes.map((occasion) => (
                <SelectionCard
                  key={occasion.value}
                  value={occasion.value}
                  isSelected={formData.occasionType === occasion.value}
                  onSelect={(value) => setFormData({ ...formData, occasionType: value })}
                  icon={occasion.icon}
                  description={occasion.description}
                />
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {mealTypes.map((meal) => (
                <SelectionCard
                  key={meal.value}
                  value={meal.value}
                  isSelected={formData.mealType === meal.value}
                  onSelect={(value) => setFormData({ ...formData, mealType: value })}
                  icon={meal.icon}
                  description={meal.description}
                />
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.eventDetails.date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      eventDetails: {
                        ...formData.eventDetails,
                        date: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guestCount">Guest Count</Label>
                <Input
                  id="guestCount"
                  type="number"
                  placeholder="Number of guests"
                  value={formData.eventDetails.guestCount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      eventDetails: {
                        ...formData.eventDetails,
                        guestCount: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="location">Event Location</Label>
                <Input
                  id="location"
                  placeholder="Enter the venue address"
                  value={formData.eventDetails.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      eventDetails: {
                        ...formData.eventDetails,
                        location: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                <Input
                  id="specialInstructions"
                  placeholder="Any special requirements or preferences"
                  value={formData.eventDetails.specialInstructions}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      eventDetails: {
                        ...formData.eventDetails,
                        specialInstructions: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  isSelected={formData.menuSelection.includes(item.name)}
                  onSelect={(name) => {
                    if (formData.menuSelection.includes(name)) {
                      setFormData({
                        ...formData,
                        menuSelection: formData.menuSelection.filter((item) => item !== name),
                      });
                    } else {
                      setFormData({
                        ...formData,
                        menuSelection: [...formData.menuSelection, name],
                      });
                    }
                  }}
                />
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Event Summary</h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm text-gray-500">Occasion Type</dt>
                  <dd className="font-medium">{formData.occasionType}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Meal Type</dt>
                  <dd className="font-medium">{formData.mealType}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Event Date</dt>
                  <dd className="font-medium">{formData.eventDetails.date}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Guest Count</dt>
                  <dd className="font-medium">{formData.eventDetails.guestCount}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm text-gray-500">Location</dt>
                  <dd className="font-medium">{formData.eventDetails.location}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm text-gray-500">Selected Menu Items</dt>
                  <dd className="flex flex-wrap gap-2 mt-2">
                    {formData.menuSelection.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Plan Your Event</h2>
          <p className="text-gray-600">
            Complete these simple steps to broadcast your request to our verified caterers
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentStep === step.id
                    ? "bg-gradient-to-r from-orange-600/90 to-orange-500 shadow-lg ring-2 ring-orange-500/30 text-white transform scale-110"
                    : currentStep > step.id
                    ? "bg-gradient-to-r from-orange-500 to-orange-400 shadow-md text-white"
                    : "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-500"
                }`}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.id
                )}
              </div>
              {step.id !== steps.length && (
                <div
                  className={`w-24 h-1 mx-2 transition-all duration-300 ${
                    currentStep > step.id 
                    ? "bg-gradient-to-r from-orange-500 to-orange-400" 
                    : "bg-gradient-to-r from-gray-200 to-gray-100"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">
              {steps[currentStep - 1].title}
            </h3>
            {renderStepContent()}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100"
          >
            Previous
          </Button>
          {currentStep === steps.length ? (
            <Button
              onClick={handleSubmit}
              disabled={!isStepComplete(currentStep) || isSubmitting}
              className={`transition-all duration-300 min-w-[120px] ${
                isStepComplete(currentStep) && !isSubmitting
                  ? "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 shadow-lg hover:scale-105 active:scale-95"
                  : "bg-gray-200 text-gray-500"
              } text-white`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                "Submit Request"
              )}
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!isStepComplete(currentStep)}
              className={`transition-all duration-300 ${
                isStepComplete(currentStep)
                  ? "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 shadow-lg hover:scale-105 active:scale-95"
                  : "bg-gray-200 text-gray-500"
              } text-white`}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}