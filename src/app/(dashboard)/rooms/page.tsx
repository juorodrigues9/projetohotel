import { RoomCard } from "@/components/rooms/room-card";
import { getMockRooms } from "@/services/room-service";

export default function RoomsPage() {
  const rooms = getMockRooms();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Mapa de Quartos</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
