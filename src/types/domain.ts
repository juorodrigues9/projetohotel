export type UserRole = "admin" | "reception" | "housekeeping" | "finance" | "management";

export type RoomStatus =
  | "available"
  | "reserved"
  | "occupied"
  | "awaiting_cleaning"
  | "cleaning"
  | "clean"
  | "blocked"
  | "maintenance";

export interface Room {
  id: string;
  number: string;
  category: string;
  capacity: number;
  dailyRate: number;
  status: RoomStatus;
  notes?: string;
}

export interface Reservation {
  id: string;
  guestName: string;
  checkInAt: string;
  checkOutAt: string;
  roomId: string;
  status: "pending" | "confirmed" | "cancelled" | "converted" | "no_show";
}
