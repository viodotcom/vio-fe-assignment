export default function Home() {
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
              <iframe
                src="/widgets/hotel-card?hotelId=1043289&checkIn=2026-01-15&checkOut=2026-01-16&guestCount=2"
                className="w-full h-[462px] border-0 rounded-lg"
                title="HotelCardWidget Demo"
                sandbox="allow-scripts allow-same-origin"
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
