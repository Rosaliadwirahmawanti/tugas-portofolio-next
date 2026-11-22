
"use client";

import { useState } from "react";
import ProyekCard from "@/components/ProyekCard";
import { Button } from "@/components/ui/button";

const daftarKategori = [
  "Semua",
  "HTML",
  "CSS",
  "JavaScript",
];

export default function FilterProyek({ proyek }) {
  const [kategori, setKategori] = useState("Semua");

  const proyekTerfilter =
    kategori === "Semua"
      ? proyek
      : proyek.filter((item) =>
          item.kategori
            .split(",")
            .map((k) => k.trim())
            .includes(kategori)
        );

  return (
    <div className="mt-6 space-y-6">
      {/* Tombol Kategori */}
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((k) => (
          <Button
            key={k}
            variant={kategori === k ? "default" : "outline"}
            onClick={() => setKategori(k)}
          >
            {k}
          </Button>
        ))}
      </div>

      {/* Daftar Kartu Proyek */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {proyekTerfilter.map((item) => (
          <ProyekCard key={item.slug} proyek={item} />
        ))}
      </div>

      {proyekTerfilter.length === 0 && (
        <p className="py-8 text-center text-muted-foreground">
          Belum ada proyek dalam kategori ini.
        </p>
      )}
    </div>
  );
}
