// API response type definitions

// Error handling
export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public response?: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// Search endpoint types
export interface SearchRequest {
  query: Query;
  checkIn?: string;
  checkOut?: string;
  rooms: string;
  language: string;
  currency: string;
  anonymousId?: string;
  userDevice: "desktop" | "mobile" | "tablet";
  userCountry: string;
  timeout?: number;
  hotelAttributes?: string[];
  filters?: Filters;
  pageSize?: number;
  sortField?: "price" | "guestRating";
  sortOrder?: "ascending" | "descending";
  label?: string;
  attributes?: string[];
  optimizeRooms?: boolean;
}

export interface Query {
  hotelIds?: string[];
  hotelIdsProvider?: string;
  hotelNames?: HotelNamesQuery;
  place?: PlaceQuery;
  placeId?: string;
  iataCode?: string;
  lat?: number;
  lon?: number;
  precision?: string;
  radius?: number;
}

export interface HotelNamesQuery {
  names: string[];
  country?: string;
  city?: string;
}

export interface PlaceQuery {
  name: string;
  country?: string;
}

export interface Filters {
  starRatings?: number[];
  price?: PriceFilter;
  guestRating?: string;
  propertyTypes?: number[];
  notPropertyTypes?: number[];
  themes?: number[];
  facilities?: number[];
  freeCancellation?: boolean;
}

export interface PriceFilter {
  min?: number;
  max?: number;
}

export interface SearchResponse {
  hotels: Hotel[];
  failedToMap?: string[];
  place?: Place;
  stay?: Stay;
  availableHotelsCount?: number;
}

export interface Hotel {
  id?: string;
  requestedName?: string;
  details?: HotelDetails;
  offers: Offer[];
  anchorRate?: Rate;
}

export interface HotelDetails {
  name: string;
  location: Geolocation;
  address: string;
  starRating?: number;
  images?: string[];
  distanceFromCityCentre?: number;
  guestRatings?: GuestRating;
  cityName?: string;
  reviewCount?: number;
  vioUrl: string;
  facilities?: number[];
}

export interface Geolocation {
  lat: number;
  lon: number;
}

export interface GuestRating {
  cleanliness?: number;
  dining?: number;
  facilities?: number;
  location?: number;
  overall?: number;
  pricing?: number;
  rooms?: number;
  service?: number;
}

export interface Offer {
  rate: Rate;
  currency: string;
  package: Package;
  provider: Provider;
  cancellationPenalties: CancellationPenalties[];
  roomName: string;
  room?: Room;
  url: string;
}

export interface Rate {
  base: number;
  hotelFees: number;
  taxes: number;
}

export interface Package {
  amenities: string[];
  canPayLater: boolean;
}

export interface Provider {
  name: string;
  logoUrl: string;
}

export interface CancellationPenalties {
  start: string;
  end: string;
  amount: string;
  currency: string;
}

export interface Room {
  name: string;
  type?: string;
  layout?: Layout;
  amenities?: string[];
  images?: string[];
}

export interface Layout {
  area?: number;
  bedroomCount?: number;
  bathroomCount?: number;
  bedrooms?: Bedroom[];
}

export interface Bedroom {
  name?: string;
  description?: string;
  bedConfigurations?: BedConfiguration[];
}

export interface BedConfiguration {
  name?: string;
  description?: string;
  size: string;
  count: number;
  type?: string;
}

export interface Place {
  id: string;
  name: string;
  address: string;
  vioUrl: string;
}

export interface Stay {
  checkIn: string;
  checkOut: string;
}
