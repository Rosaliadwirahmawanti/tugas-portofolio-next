"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  function gantiTema() {
    document.documentElement.classList.toggle("dark");
    setGelap((sebelumnya) => !sebelumnya);
  }

  return (
    <button
  type="button"
  onClick={gantiTema}
  className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:..."
>
  {gelap ? "🌞 Mode Terang" : "🌙 Mode Gelap"}
</button>
  );
}