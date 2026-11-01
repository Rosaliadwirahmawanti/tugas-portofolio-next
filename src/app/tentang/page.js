export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">

      {/* JUDUL */}
      <h1 className="text-3xl font-bold text-utama md:text-4xl">
        Tentang Saya
      </h1>

      {/* PERKENALAN */}
      <section className="mt-8 rounded-2xl bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold text-utama">
            Let Me Introduce Myself
        </h2>

        <p className="mt-4 leading-8 text-gray-700">
          Saya adalah siswi kelas 10 jurusan Rekayasa Perangkat
          Lunak (RPL) di SMKN 1 Kepanjen. Saya memiliki ketertarikan
          pada dunia teknologi, khususnya dalam pembuatan website
          dan pengembangan aplikasi.
        </p>

        <p className="mt-3 leading-8 text-gray-700">
          Saya senang mempelajari hal-hal baru, mencoba berbagai
          teknologi, dan mengembangkan kemampuan dalam bidang
          pemrograman. Bagi saya, setiap tugas dan proyek merupakan
          kesempatan untuk menambah pengalaman dan pengetahuan.
        </p>
      </section>

      {/* HOBI */}
      <section className="mt-6 rounded-2xl bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold text-utama">
          Hobi dan Minat
        </h2>

        <ul className="mt-4 space-y-3 text-gray-700">
          <li>💻 Belajar coding dan membuat website.</li>
          <li>🎨 Mencoba desain website yang menarik.</li>
          <li>📚 Mempelajari teknologi baru.</li>
          <li>🌐 Mengeksplorasi dunia digital.</li>
        </ul>
      </section>

      {/* KEMAMPUAN */}
      <section className="mt-6 rounded-2xl bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold text-utama">
          Kemampuan yang Sedang Saya Pelajari
        </h2>

        <div className="mt-4 flex flex-wrap gap-3">
          {["HTML", "CSS", "JavaScript", "Python", "Next.js", "React"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-100 px-5 py-2 font-medium text-blue-700"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* CITA-CITA */}
      <section className="mt-6 rounded-2xl bg-blue-50 p-6 shadow-md">
        <h2 className="text-2xl font-bold text-utama">
          Cita-Cita dan Harapan
        </h2>

        <p className="mt-4 leading-8 text-gray-700">
          Saya bercita-cita menjadi seorang Junior Web Developer
          yang memiliki kemampuan dalam membuat website yang
          menarik, responsif, dan bermanfaat. Saya akan terus
          belajar dan berusaha untuk mencapai tujuan tersebut.
        </p>
      </section>

      {/* MOTIVASI */}
      <section className="mt-6 rounded-2xl bg-utama p-7 text-center text-white shadow-md">
        <h2 className="text-2xl font-bold">
          Motivasi Saya
        </h2>

        <p className="mt-4 text-lg italic leading-8">
          "Jangan takut mencoba hal baru, karena setiap proses
          belajar adalah langkah menuju kesuksesan."
        </p>
      </section>

    </main>
  );
}

