
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero({
  nama = "Rosalia Dwi Rahmawanti",
  tagline = "Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG.",
}) {
  return (
    <section className="flex flex-col items-center gap-4 py-8 md:flex-row md:gap-6">
      <Image
        src="/images rosa.png"
        alt="Foto Rosalia"
        width={120}
        height={120}
        className="h-24 w-24 rounded-full border-2 border-red-500 object-cover md:h-28 md:w-28"
      />

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl font-bold text-primary md:text-3xl">
          Halo, saya {nama}!
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          {tagline}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
          <Link
            href="/proyek"
            className={buttonVariants({ size: "sm" })}
          >
            Lihat Proyek
          </Link>

          <Link
            href="/kontak"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
            })}
          >
            Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  );
}
