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
    <Button
      variant="outline"
      onClick={gantiTema}
      className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}