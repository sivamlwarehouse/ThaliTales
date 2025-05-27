"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const eventId = searchParams.get("eventId");

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Card className="p-8 bg-white shadow-lg rounded-xl">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Request Submitted Successfully!
            </h1>
            <p className="text-gray-600">
              Thank you for choosing our catering service. Your event request has been
              received and is being processed.
            </p>
            {eventId && (
              <p className="text-sm text-gray-500">
                Event Reference ID: {eventId}
              </p>
            )}
            <div className="mt-8 space-y-3">
              <Button
                onClick={() => router.push(`/quotes/${eventId}`)}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              >
                View Quotes
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/")}
                className="w-full"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="p-8 bg-white shadow-lg rounded-xl">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
              </div>
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded animate-pulse"></div>
            </div>
          </Card>
        </div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
} 