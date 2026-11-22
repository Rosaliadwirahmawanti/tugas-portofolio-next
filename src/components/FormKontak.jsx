
"use client";

import { useState } from "react";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const kelasInput =
    "w-full px-3.5 py-2 text-sm border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white";

  function handleSubmit(e) {
    e.preventDefault();

    const errorBaru = {};

    if (!nama.trim()) {
      errorBaru.nama = "Nama wajib diisi.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailRegex.test(email)) {
      errorBaru.email = "Email harus valid, contoh nama@email.com.";
    }

    const phoneDigits = noHp.replace(/\D/g, "");

    if (phoneDigits.length < 10) {
      errorBaru.noHp = "Nomor HP minimal 10 angka.";
    }

    if (!keperluan) {
      errorBaru.keperluan = "Pilih salah satu keperluan.";
    }

    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    if (Object.keys(errorBaru).length > 0) {
      setError(errorBaru);
      setSuccess(false);
    } else {
      setError({});
      setSuccess(true);

      setNama("");
      setEmail("");
      setNoHp("");
      setKeperluan("");
      setPesan("");

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">

      {success && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg">
          Terima kasih! Pesan Anda telah berhasil dikirim.
        </div>
      )}

      {/* Nama */}
      <div>
        <label htmlFor="nama" className="block text-sm font-semibold mb-1">
          Nama lengkap
        </label>

        <input
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Andi Wijaya"
          className={`${kelasInput} ${error.nama ? "border-red-500" : ""}`}
        />

        {error.nama && (
          <p className="text-xs text-red-600 mt-1">{error.nama}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          Email
        </label>

        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Contoh: andi@gmail.com"
          className={`${kelasInput} ${error.email ? "border-red-500" : ""}`}
        />

        {error.email && (
          <p className="text-xs text-red-600 mt-1">{error.email}</p>
        )}
      </div>

      {/* Nomor HP */}
      <div>
        <label htmlFor="noHp" className="block text-sm font-semibold mb-1">
          Nomor HP
        </label>

        <input
          type="tel"
          id="noHp"
          value={noHp}
          onChange={(e) => setNoHp(e.target.value)}
          placeholder="08xxxxxxxxxx"
          className={`${kelasInput} ${error.noHp ? "border-red-500" : ""}`}
        />

        {error.noHp && (
          <p className="text-xs text-red-600 mt-1">{error.noHp}</p>
        )}
      </div>

      {/* Keperluan */}
      <div>
        <label htmlFor="keperluan" className="block text-sm font-semibold mb-1">
          Keperluan
        </label>

        <select
          id="keperluan"
          value={keperluan}
          onChange={(e) => setKeperluan(e.target.value)}
          className={`${kelasInput} ${error.keperluan ? "border-red-500" : ""}`}
        >
          <option value="">-- Pilih keperluan --</option>
          <option value="kerjasama">Kerjasama Proyek</option>
          <option value="penawaran">Penawaran Kerja</option>
          <option value="pertanyaan">Pertanyaan Umum</option>
          <option value="lainnya">Lainnya</option>
        </select>

        {error.keperluan && (
          <p className="text-xs text-red-600 mt-1">{error.keperluan}</p>
        )}
      </div>

      {/* Pesan */}
      <div>
        <label htmlFor="pesan" className="block text-sm font-semibold mb-1">
          Pesan
        </label>

        <textarea
          id="pesan"
          rows={4}
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pesanmu di sini"
          className={`${kelasInput} resize-y ${error.pesan ? "border-red-500" : ""}`}
        />

        {error.pesan && (
          <p className="text-xs text-red-600 mt-1">{error.pesan}</p>
        )}
      </div>

      {/* Tombol */}
      <div className="pt-2">
        <button
          type="submit"
          className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm"
        >
          Kirim Pesan
        </button>
      </div>

    </form>
  );
}
