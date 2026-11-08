export default function Tentang() {
  return (
    <main className="min-h-screen bg-[#f0fdf4] py-10 px-4">
      <div className="mx-auto max-w-5xl space-y-6">
        
        {/* JUDUL */}
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Tentang Saya
        </h1>

        {/* PERKENALAN */}
        <section className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900">
            Let Me Introduce Myself
          </h2>
          <p className="mt-4 leading-8 text-gray-700 dark:textgray-300">
            Saya adalah siswi kelas 10 jurusan Rekayasa Perangkat Lunak (RPL) di SMKN 1 Kepanjen. Saya memiliki ketertarikan pada dunia teknologi, khususnya dalam pembuatan website dan pengembangan aplikasi.
          </p>
          <p className="mt-4 leading-8 text-gray-700 dark:textgray-300">
            Saya senang mempelajari hal-hal baru, mencoba berbagai teknologi, dan mengembangkan kemampuan dalam bidang pemrograman. Bagi saya, setiap tugas dan proyek merupakan kesempatan untuk menambah pengalaman dan pengetahuan.
          </p>
        </section>

        {/* Hobi dan Minat */}
        <section className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hobi dan Minat
          </h2>
          <ul className="space-y-2 text-gray-700 dark:textgray-300">
            <li>💻 Belajar coding dan membuat website.</li>
            <li>🎨 Mencoba desain website yang menarik.</li>
            <li>📊 Mempelajari teknologi baru.</li>
            <li>🌐 Mengeksplorasi dunia digital.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}