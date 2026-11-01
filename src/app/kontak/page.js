
"use client";

import { useState } from "react";

export default function Kontak() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    hp: "",
    keperluan: "",
    pesan: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const tujuan = "rrosarplkanesa.com";

    const isiPesan = `
Nama: ${form.nama}
Email: ${form.email}
Nomor HP: ${form.hp}
Keperluan: ${form.keperluan}

Pesan:
${form.pesan}
    `;

    window.location.href =
      `mailto:${tujuan}?subject=${encodeURIComponent("Pesan dari Website Portofolio")}&body=${encodeURIComponent(isiPesan)}`;
  }

  return (
    <main className="min-h-screen bg-[#f2f8ed] px-4 py-10">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-3xl font-bold text-[#203858]">
          Hubungi Saya
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* FORM KONTAK */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-2">

            <form onSubmit={handleSubmit}>

              {/* NAMA */}
              <div className="mb-5">
                <label className="mb-2 block font-semibold text-gray-700">
                  Nama lengkap
                </label>

                <input
                  type="text"
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap Anda"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* EMAIL */}
              <div className="mb-5">
                <label className="mb-2 block font-semibold text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Masukkan email Anda"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* NOMOR HP */}
              <div className="mb-5">
                <label className="mb-2 block font-semibold text-gray-700">
                  Nomor HP
                </label>

                <input
                  type="tel"
                  name="hp"
                  value={form.hp}
                  onChange={handleChange}
                  placeholder="Masukkan nomor HP Anda"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* KEPERLUAN */}
              <div className="mb-5">
                <label className="mb-2 block font-semibold text-gray-700">
                  Keperluan
                </label>

                <select
                  name="keperluan"
                  value={form.keperluan}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="">Pilih keperluan</option>
                  <option value="Kerja Sama">Kerja Sama</option>
                  <option value="Pertanyaan">Pertanyaan</option>
                  <option value="Penawaran Proyek">Penawaran Proyek</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              {/* PESAN */}
              <div className="mb-6">
                <label className="mb-2 block font-semibold text-gray-700">
                  Pesan
                </label>

                <textarea
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..."
                  rows="5"
                  required
                  className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* TOMBOL */}
              <button
                type="submit"
                className="rounded-lg bg-[#203858] px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Kirim Pesan
              </button>

            </form>
          </section>

          {/* INFORMASI KONTAK */}
          <aside className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-bold text-[#203858]">
              Temukan Saya di
            </h2>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800">
                GitHub
              </h3>

              <a
                href="https://github.com/Rosaliadwirahmawanti"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-red-400 hover:underline"
              >
                @Rosaliadwirahmawanti
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Email
              </h3>

              <a
                href="mailto:rrosarplkanesa@gmail.com"
                className="mt-2 inline-block break-all text-sm text-red-400 hover:underline"
              >
                rrosarplkanesa@gmail.com
              </a>
            </div>

            <div className="mt-auto border-t border-gray-300 pt-4">
              <p className="text-xs text-gray-400">
                Terima kasih telah mengunjungi portofolio saya.
              </p>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
