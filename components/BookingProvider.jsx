"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import BookingModal from "./BookingModal";

const BookingContext = createContext(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return ctx;
}

/**
 * Holds the demo booking dialog state in memory only. Nothing is persisted or
 * transmitted. Any component inside this provider can call openBooking(roomName)
 * to open the form with a room preselected.
 */
export default function BookingProvider({ children, rooms }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");

  const openBooking = useCallback((room) => {
    setSelectedRoom(room || "");
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ openBooking, closeBooking, selectedRoom }),
    [openBooking, closeBooking, selectedRoom]
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBooking}
        selectedRoom={selectedRoom}
        rooms={rooms}
      />
    </BookingContext.Provider>
  );
}
