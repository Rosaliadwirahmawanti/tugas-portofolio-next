import ProyekCard from "@/components/ProyekCard";
import { proyek } from "../../data/proyek";

export default function DaftarProyek() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Daftar Proyek Saya</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proyek.map((item) => (
          <ProyekCard 
            key={item.id} 
            judul={item.judul} 
            deskripsi={item.deskripsi} 
          />
        ))}
      </div>
    </main>
  );
}