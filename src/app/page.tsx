import HotelCardWidget from "@/components/HotelCardWidget";
import { formatDate, addDays } from "@/lib/utils/date";

export default function Home() {
  const today = new Date();
  const tomorrow = addDays(today, 1);
  const initialCheckIn = formatDate(today);
  const initialCheckOut = formatDate(tomorrow);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Widget Demos
          </h1>
        </div>

        <div className="grid gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Hotel Card Widget
            </h2>
            <div className="w-full">
              <HotelCardWidget
                hotelId="1043289"
                initialCheckIn={initialCheckIn}
                initialCheckOut={initialCheckOut}
                initialGuestCount={2}
                className="w-full"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Hotels Search Widget
            </h2>
            <div className="w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
