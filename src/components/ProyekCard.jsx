export default function ProyekCard({ proyek }) {
  return (
    <div className="overflow-hidden rounded-xl border shadow-md">

      <img
        src={proyek.gambar}
        alt={proyek.judul}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <p className="text-sm text-blue-600">
          {proyek.kategori}
        </p>

        <h2 className="mt-2 text-xl font-bold">
          {proyek.judul}
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-400 dark:textgray-400  dark:textgray-400 ">
          {proyek.deskripsi}
        </p>

        <p className="mt-3 text-sm text-gray-500">
          {proyek.minggu}
        </p>

      </div>
    </div>
  );
}

