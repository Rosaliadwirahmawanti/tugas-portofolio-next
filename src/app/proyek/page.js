import FilterProyek from "@/components/FilterProyek";
import { proyek } from "@/data/proyek"; // Menggunakan 'proyek' sesuai saran error

export default function ProyekPage() {
  return (
    <main className="min-h-screen bg-[#f0fdf4] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Proyek Saya</h1>
          <p className="text-gray-600 dark:text-gray-400 dark:textgray-400  dark:textgray-400 ">
            Kumpulan hasil belajar saya di kelas industri UBIG. Klik kartu untuk melihat detailnya.
          </p>
        </div>
        
        {/* Kirim data ke komponen FilterProyek */}
        <FilterProyek proyek={proyek} />
      </div>
    </main>
  );
}