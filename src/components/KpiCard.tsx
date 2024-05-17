import React from "react";

interface KpiCardProps {
  label: string;
  value: string;
}

export default function KpiCard({ label, value }: KpiCardProps) {
  return (
    <div className="col-span-1 rounded-lg bg-white flex flex-col items-center justify-center gap-2 p-5">
      <p className="text-secondary text-xs font-medium">{label}</p>
      <p className="font-semibold text-2xl">{value}</p>
    </div>
  );
}
