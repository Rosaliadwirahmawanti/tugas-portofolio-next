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

  const kelasInput = "w-full px-3.5 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-black";

  function handleSubmit(e) {
    e.preventDefault();
    const errorBaru = {};

    if (!nama.trim()) {
      errorBaru.nama = "Nama wajib diisi.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@email.com.";
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      
      {/* Form Section (Kiri - 2 Kolom) */}
      <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          
          {success && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg font-medium">
              Terima kasih! Pesan Anda telah berhasil dikirim.
            </div>
          )}

          {/* Nama */}
          <div>
            <label htmlFor="nama" className="block text-sm font-semibold text-gray-700 dark:textgray-300 mb-1">Nama lengkap</label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Contoh: Andi Wijaya"
              className={`${kelasInput} ${error.nama ? "border-red-500" : ""}`}
            />
            {error.nama && <p className="text-xs text-red-600 font-medium mt-1">{error.nama}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:textgray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email harus memuat tanda @, contoh andi@gmail.com"
              className={`${kelasInput} ${error.email ? "border-red-500" : ""}`}
            />
            {error.email && <p className="text-xs text-red-600 font-medium mt-1">{error.email}</p>}
          </div>

          {/* Nomor HP */}
          <div>
            <label htmlFor="noHp" className="block text-sm font-semibold text-gray-700 dark:textgray-300 mb-1">Nomor HP</label>
            <input
              type="tel"
              id="noHp"
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
              placeholder="08xxxxxxxxxx"
              className={`${kelasInput} ${error.noHp ? "border-red-500" : ""}`}
            />
            {error.noHp && <p className="text-xs text-red-600 font-medium mt-1">{error.noHp}</p>}
          </div>

          {/* Keperluan */}
          <div>
            <label htmlFor="keperluan" className="block text-sm font-semibold text-gray-700 dark:textgray-300 mb-1">Keperluan</label>
            <select
              id="keperluan"
              value={keperluan}
              onChange={(e) => setKeperluan(e.target.value)}
              className={`${kelasInput} text-gray-600 dark:textgray-400  ${error.keperluan ? "border-red-500" : ""}`}
            >
              <option value="">-- Pilih keperluan --</option>
              <option value="kerjasama">Kerjasama Proyek</option>
              <option value="penawaran">Penawaran Kerja</option>
              <option value="pertanyaan">Pertanyaan Umum</option>
              <option value="lainnya">Lainnya</option>
            </select>
            {error.keperluan && <p className="text-xs text-red-600 font-medium mt-1">{error.keperluan}</p>}
          </div>

          {/* Pesan */}
          <div>
            <label htmlFor="pesan" className="block text-sm font-semibold text-gray-700 dark:textgray-300 mb-1">Pesan</label>
            <textarea
              id="pesan"
              rows="4"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Tulis pesanmu di sini"
              className={`${kelasInput} resize-y ${error.pesan ? "border-red-500" : ""}`}
            ></textarea>
            {error.pesan && <p className="text-xs text-red-600 font-medium mt-1">{error.pesan}</p>}
          </div>

          {/* Tombol Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info Section (Kanan - 1 Kolom) */}
      <div className="md:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm h-fit">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Temukan Saya di</h3>
        
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-500 font-medium mb-0.5">GitHub</p>
            <a href="https://github.com/Rosaliadwirahmawanti" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-red-600 hover:underline">
                github.com/Rosaliadwirahmawanti
            </a>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium mb-0.5">Email</p>
            <a href="mailto:rrosarplkanesa@gmail.com" className="text-sm font-medium text-red-600 hover:underline break-all">
              rrosarplkanesa@gmail.com
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}