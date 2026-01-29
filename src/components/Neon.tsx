"use client";

import React, { PropsWithChildren } from "react";
import { useCountUp } from "@/components/Hooks";

export function NeonCard({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={
        "relative rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm shadow-[0_0_0_1px_rgba(0,255,255,0.05)] " +
        "before:absolute before:inset-0 before:rounded-2xl before:bg-[radial-gradient(120px_80px_at_20%_20%,rgba(0,255,255,0.12),transparent),radial-gradient(120px_80px_at_80%_80%,rgba(168,85,247,0.12),transparent)] before:pointer-events-none " +
        className
      }
    >
      {children}
    </div>
  );
}

export function Chip({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-300 border border-cyan-500/20">
      {label}
    </span>
  );
}

export function TimelineCard({
  company,
  role,
  time,
  bullets,
}: {
  company: string;
  role: string;
  time: string;
  bullets: string[];
}) {
  return (
    <NeonCard className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-semibold">{company}</div>
          <div className="text-sm text-slate-300">{role}</div>
        </div>
        <div className="text-xs text-slate-400">{time}</div>
      </div>
      <ul className="mt-3 grid gap-2 list-disc pl-5 text-sm text-slate-300">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </NeonCard>
  );
}

export function StatCard({ label, to }: { label: string; to: number }) {
  const n = useCountUp(to);
  return (
    <NeonCard className="p-5 text-center">
      <div className="text-3xl font-bold text-cyan-300">
        {n}
        <span className="align-top text-base">
          {label === "Projects" ? "+" : ""}
        </span>
      </div>
      <div className="mt-1 text-sm tracking-wide text-slate-300">{label}</div>
    </NeonCard>
  );
}
