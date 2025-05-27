"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Request Submitted Successfully!</h1>
          
          <p className="text-gray-600 mb-6">
            Thank you for submitting your event request. Our verified caterers will review your requirements and respond shortly.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-500 mb-2">Reference Number</p>
            <p className="font-mono text-lg font-medium">{id}</p>
          </div>

          <p className="text-sm text-gray-500 mb-8">
            We have sent a confirmation email with the details of your request. You can also track the status of your request using the reference number above.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button variant="outline">View My Requests</Button>
            </Link>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 