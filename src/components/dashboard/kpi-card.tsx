import { Card } from "@/components/ui/card";

export function KpiCard({ title, value }: { title: string; value: string | number }) {
  return (
    <Card>
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </Card>
  );
}
