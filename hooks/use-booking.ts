"use client";

import { useState } from "react";

type OccasionType = "birthday" | "marriage" | "housewarming";
type MealType = "breakfast" | "lunch" | "dinner";

interface EventDetails {
  date: string;
  guestCount: number;
  location: string;
}

interface MenuItem {
  id: string;
  name: string;
  isSelected: boolean;
  isVeg: boolean;
  spiceLevel: number;
}

export interface BookingState {
  occasionType: OccasionType | null;
  mealType: MealType | null;
  eventDetails: EventDetails;
  selectedMenuItems: MenuItem[];
  step: number;
}

export function useBooking() {
  const [booking, setBooking] = useState<BookingState>({
    occasionType: null,
    mealType: null,
    eventDetails: {
      date: "",
      guestCount: 0,
      location: "",
    },
    selectedMenuItems: [],
    step: 1,
  });

  console.log("Current booking state:", booking);

  const setOccasionType = (type: OccasionType) => {
    setBooking((prev) => ({
      ...prev,
      occasionType: type,
    }));
    console.log("Set occasion type:", type);
  };

  const setMealType = (type: MealType) => {
    setBooking((prev) => ({
      ...prev,
      mealType: type,
    }));
    console.log("Set meal type:", type);
  };

  const setEventDetails = (details: Partial<EventDetails>) => {
    setBooking((prev) => ({
      ...prev,
      eventDetails: {
        ...prev.eventDetails,
        ...details,
      },
    }));
    console.log("Updated event details:", details);
  };

  const toggleMenuItem = (itemId: string) => {
    setBooking((prev) => ({
      ...prev,
      selectedMenuItems: prev.selectedMenuItems.map((item) =>
        item.id === itemId ? { ...item, isSelected: !item.isSelected } : item
      ),
    }));
    console.log("Toggled menu item:", itemId);
  };

  const setMenuItems = (items: MenuItem[]) => {
    setBooking((prev) => ({
      ...prev,
      selectedMenuItems: items,
    }));
    console.log("Set menu items", items.length);
  };

  const nextStep = () => {
    setBooking((prev) => ({
      ...prev,
      step: prev.step + 1,
    }));
    console.log("Advanced to next step");
  };

  const previousStep = () => {
    setBooking((prev) => ({
      ...prev,
      step: Math.max(1, prev.step - 1),
    }));
    console.log("Went back to previous step");
  };

  const resetBooking = () => {
    setBooking({
      occasionType: null,
      mealType: null,
      eventDetails: {
        date: "",
        guestCount: 0,
        location: "",
      },
      selectedMenuItems: [],
      step: 1,
    });
    console.log("Reset booking state");
  };

  const submitBooking = async () => {
    console.log("Submitting booking request:", booking);
    // In a real implementation, this would make an API call to submit the booking
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, bookingId: `BK-${Math.floor(Math.random() * 10000)}` });
      }, 1500);
    });
  };

  return {
    booking,
    setOccasionType,
    setMealType,
    setEventDetails,
    toggleMenuItem,
    setMenuItems,
    nextStep,
    previousStep,
    resetBooking,
    submitBooking,
  };
}