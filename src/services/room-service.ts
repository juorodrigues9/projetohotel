import { Room } from "@/types/domain";

const statuses: Room["status"][] = ["available", "reserved", "occupied", "awaiting_cleaning", "cleaning", "clean", "blocked", "maintenance"];

export function getMockRooms(): Room[] {
  return Array.from({ length: 31 }).map((_, index) => ({
    id: `room-${index + 1}`,
    number: `${index + 1}`.padStart(2, "0"),
    category: index < 10 ? "Standard" : index < 20 ? "Luxo" : "Família",
    capacity: index < 20 ? 2 : 4,
    dailyRate: index < 20 ? 290 : 420,
    status: statuses[index % statuses.length],
    notes: "Quarto com configuração inicial"
  }));
}
