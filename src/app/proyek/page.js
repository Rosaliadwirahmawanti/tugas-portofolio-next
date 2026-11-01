import { proyek } from "@/data/proyek";

export default function ProyekPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">

      <h1 className="text-4xl font-bold text-utama">
        Proyek Saya
      </h1>

      <p className="mt-3 text-gray-600">
        Berikut adalah beberapa proyek yang telah saya
        kerjakan selama belajar Rekayasa Perangkat Lunak.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        {proyek.map((item) => (
          <div
            key={item.slug}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
          >

            <img
              src={item.gambar}
              alt={item.judul}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">

              <p className="text-sm font-semibold text-blue-600">
                {item.minggu} | {item.kategori}
              </p>

              <h2 className="mt-2 text-xl font-bold text-utama">
                {item.judul}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.deskripsi}
              </p>

              <h3 className="mt-4 font-bold">
                Fitur Proyek:
              </h3>

              <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
                {item.fitur.map((fitur, index) => (
                  <li key={index}>{fitur}</li>
                ))}
              </ul>

            </div>
          </div>
        ))}

      </div>
    </main>
  );
}
