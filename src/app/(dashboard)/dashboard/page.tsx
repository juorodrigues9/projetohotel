import { KpiCard } from "@/components/dashboard/kpi-card";

const kpis = [
  ["Quartos disponíveis", 9],
  ["Quartos ocupados", 14],
  ["Quartos reservados", 5],
  ["Em limpeza", 2],
  ["Check-ins hoje", 7],
  ["Check-outs hoje", 6],
  ["Faturamento do dia", "R$ 8.240,00"],
  ["Despesas do dia", "R$ 1.140,00"]
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard Operacional</h1>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map(([title, value]) => (
          <KpiCard key={String(title)} title={String(title)} value={value} />
        ))}
      </div>
      <div className="card">
        <h2 className="text-lg font-semibold">Alertas operacionais</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
          <li>3 checkouts pendentes de pagamento.</li>
          <li>4 quartos aguardando limpeza.</li>
        </ul>
      </div>
    </div>
  );
}
