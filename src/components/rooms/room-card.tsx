import { Room } from "@/types/domain";
import { Card } from "@/components/ui/card";

const statusLabel: Record<Room["status"], string> = {
  available: "Disponível",
  reserved: "Reservado",
  occupied: "Ocupado",
  awaiting_cleaning: "Aguardando limpeza",
  cleaning: "Em limpeza",
  clean: "Limpo",
  blocked: "Bloqueado",
  maintenance: "Manutenção"
};

const statusColor: Record<Room["status"], string> = {
  available: "bg-green-100 text-green-700",
  reserved: "bg-yellow-100 text-yellow-700",
  occupied: "bg-red-100 text-red-700",
  awaiting_cleaning: "bg-blue-100 text-blue-700",
  cleaning: "bg-cyan-100 text-cyan-700",
  clean: "bg-emerald-100 text-emerald-700",
  blocked: "bg-gray-100 text-gray-700",
  maintenance: "bg-orange-100 text-orange-700"
};

export function RoomCard({ room }: { room: Room }) {
  return (
    <Card>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Quarto {room.number}</h3>
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColor[room.status]}`}>{statusLabel[room.status]}</span>
      </div>
      <p className="text-sm text-slate-600">Categoria: {room.category}</p>
      <p className="text-sm text-slate-600">Capacidade: {room.capacity} hóspedes</p>
      <p className="text-sm text-slate-600">Diária: R$ {room.dailyRate.toFixed(2)}</p>
    </Card>
  );
}
