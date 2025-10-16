export interface HotelCardWidgetProps {
  // Hotel identifier for API calls
  hotelId: string;
  
  // Initial values for the stay
  initialCheckIn: string; // ISO date string
  initialCheckOut: string; // ISO date string
  
  // Initial guest count
  initialGuestCount?: number;
  
  // Optional styling
  className?: string;
}

// Simplified hotel interface for the widget
export interface SimpleHotel {
  id: string;
  name: string;
  price: number;
  currency: string;
  imageUrl?: string;
  starRating?: number;
  location?: string;
}

// Props for individual hotel card display
export interface HotelCardProps {
  hotel: SimpleHotel;
  checkIn: string;
  checkOut: string;
  guestCount: number;
  onPreviousDay: () => void;
  onNextDay: () => void;
  className?: string;
}
