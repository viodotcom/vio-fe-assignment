"use client";

import React, { useState, useEffect, useCallback } from "react";
import { HotelCardWidgetProps } from "./types";
import DatePicker from "../ui/DatePicker";
import Input from "../ui/Input";
import VioApiClient from "../../lib/api/vio-api";
import { SearchRequest, Hotel, ApiError } from "../../lib/types/api";
import { formatDate, addDays } from "../../lib/utils/date";

const HotelCardWidget: React.FC<HotelCardWidgetProps> = ({
  hotelId,
  initialCheckIn,
  initialCheckOut,
  initialGuestCount = 2,
  className = "",
}) => {
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [guestCount, setGuestCount] = useState(initialGuestCount);
  const [error, setError] = useState<string | null>(null);
  const [hotel, setHotel] = useState<Hotel | null>(null);
  
  const getCheckOutDate = (checkInDate: Date) => {
    return addDays(checkInDate, 1);
  };

  const fetchHotelData = useCallback(async (checkInDate: string, checkOutDate: string, guestCount: number) => {
    try {
      setError(null);

      const apiClient = new VioApiClient({
        apiKey: process.env.NEXT_PUBLIC_VIO_API_KEY || "demo-key",
      });

      const searchRequest: SearchRequest = {
        query: {
          hotelIds: [hotelId],
        },
        checkIn: checkInDate,
        checkOut: checkOutDate,
        rooms: guestCount.toString(),
        language: "en",
        currency: "USD",
        userDevice: "desktop",
        userCountry: "US",
        pageSize: 1,
        hotelAttributes: ["details"]
      };

      const response = await apiClient.search(searchRequest);
      
      if (response.hotels && response.hotels.length > 0) {
        setHotel(response.hotels[0]);
      } else {
        setError("No hotel data found for the selected dates");
      }
    } catch (err) {
      if (err instanceof ApiError) {
        setError(`API Error: ${err.message}`);
      } else {
        setError("Failed to fetch hotel data");
      }
    }
  }, [hotelId]);

  useEffect(() => {
    fetchHotelData(checkIn, checkOut, guestCount);
  }, [checkIn, checkOut, guestCount, fetchHotelData]);

  const handleCheckInPrevious = () => {
    const newDate = addDays(new Date(checkIn), -1);
    const newCheckIn = formatDate(newDate);
    setCheckIn(newCheckIn);
    fetchHotelData(newCheckIn, checkOut, guestCount);
  };

  const handleCheckInNext = () => {
    const newDate = addDays(new Date(checkIn), 1);
    const newCheckIn = formatDate(newDate);
    setCheckIn(newCheckIn);
    fetchHotelData(newCheckIn, checkOut, guestCount);
  };

  const handleCheckOutPrevious = () => {
    const newDate = addDays(new Date(checkOut), -1);
    const newCheckOut = formatDate(newDate);
    setCheckOut(newCheckOut);
    fetchHotelData(checkIn, newCheckOut, guestCount);
  };

  const handleCheckOutNext = () => {
    const newDate = addDays(new Date(checkOut), 1);
    const newCheckOut = formatDate(newDate);
    setCheckOut(newCheckOut);
    fetchHotelData(checkIn, newCheckOut, guestCount);
  };

  const handleCheckInChange = (date: string) => {
    const checkInDate = new Date(date);    
    setCheckIn(date);
    const newCheckOut = formatDate(getCheckOutDate(checkInDate));
    setCheckOut(newCheckOut);
    fetchHotelData(date, newCheckOut, guestCount);
  };

  const handleCheckOutChange = (date: string) => {
    setCheckOut(date);
    fetchHotelData(checkIn, date, guestCount);
  };

  const handleGuestCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGuestCount = parseInt(e.target.value) || 1;
    setGuestCount(newGuestCount);
    fetchHotelData(checkIn, checkOut, newGuestCount);
  };
  return (
    <div className={`hotel-card-widget bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Hotel Details</h2>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {hotel?.details?.name || hotel?.requestedName || "Loading hotel data..."}
            </h3>
            {hotel?.details?.address && (
              <p className="text-sm text-gray-600">{hotel.details.address}</p>
            )}
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in Date
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCheckInPrevious}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium"
                    title="Previous day"
                  >
                    ←
                  </button>
                  <DatePicker
                    value={checkIn}
                    onChange={handleCheckInChange}
                    minDate={formatDate(new Date())}
                    className="flex-1"
                  />
                  <button
                    onClick={handleCheckInNext}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium"
                    title="Next day"
                  >
                    →
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-out Date
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCheckOutPrevious}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium"
                    title="Previous day"
                  >
                    ←
                  </button>
                  <DatePicker
                    value={checkOut}
                    onChange={handleCheckOutChange}
                    minDate={checkIn}
                    className="flex-1"
                  />
                  <button
                    onClick={handleCheckOutNext}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium"
                    title="Next day"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <Input
                  type="number"
                  value={guestCount.toString()}
                  onChange={handleGuestCountChange}
                  min="1"
                  max="10"
                  className="w-full"
                  placeholder="Enter number of guests"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Price:</span>
                  <p className="text-gray-600">
                    {hotel?.offers?.[0]?.currency} {hotel?.offers?.[0]?.rate?.base || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {hotel?.offers && hotel.offers.length > 0 && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-green-800">
                Best offer: {hotel.offers[0].currency} {hotel.offers[0].rate.base}
                {hotel.offers[0].rate.taxes > 0 && ` + ${hotel.offers[0].rate.taxes} taxes`}
              </p>
            </div>
          )}
        </div>
    </div>
  );
};

export default HotelCardWidget;
