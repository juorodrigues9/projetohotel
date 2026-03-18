import Link from "next/link";
import { Building2, CalendarDays, ChartNoAxesCombined, CircleDollarSign, House, LogOut, Sparkles, Users } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: House },
  { href: "/rooms", label: "Quartos", icon: Building2 },
  { href: "/reservations", label: "Reservas", icon: CalendarDays },
  { href: "/stays", label: "Hospedagens", icon: Users },
  { href: "/checkout", label: "Checkout", icon: LogOut },
  { href: "/housekeeping", label: "Governança", icon: Sparkles },
  { href: "/finance", label: "Financeiro", icon: CircleDollarSign },
  { href: "/reports", label: "Relatórios", icon: ChartNoAxesCombined }
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-slate-200 bg-white p-4 md:block">
      <h1 className="mb-6 text-lg font-bold">Pousada SaaS</h1>
      <nav className="space-y-1">
        {items.map((item) => (
          <Link key={item.href} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-slate-100" href={item.href}>
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
