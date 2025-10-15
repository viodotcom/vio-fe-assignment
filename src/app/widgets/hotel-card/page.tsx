"use client";

import { useSearchParams } from "next/navigation";
import HotelCardWidget from "@/components/HotelCardWidget";
import { formatDate, addDays } from "@/lib/utils/date";

export default function HotelCardWidgetPage() {
  const searchParams = useSearchParams();

  const hotelId = searchParams.get("hotelId") || "";
  const checkInParam = searchParams.get("checkIn");
  const checkOutParam = searchParams.get("checkOut");
  const guestCountParam = searchParams.get("guestCount");
  const today = new Date();
  const tomorrow = addDays(today, 1);

  const initialCheckIn = checkInParam || formatDate(today);
  const initialCheckOut = checkOutParam || formatDate(tomorrow);
  const initialGuestCount = guestCountParam ? parseInt(guestCountParam, 10) : 2;

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
        <HotelCardWidget
          hotelId={hotelId}
          initialCheckIn={initialCheckIn}
          initialCheckOut={initialCheckOut}
          initialGuestCount={initialGuestCount}
          className="w-full"
        />
      </div>
    </div>
  );
}
