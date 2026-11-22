import Link from "next/link";
import Hero from "../components/Hero";
import ProyekCard from "../components/ProyekCard";
import SkillCard from "../components/SkillCard";
import { buttonVariants } from "../components/ui/button";
import { proyek } from "../data/proyek";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground transition-colors duration-300 md:px-8">
      <div className="mx-auto max-w-5xl space-y-14">

        {/* HERO */}
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
          <Hero 
            nama="Rosalia Dwi Rahmawanti"
            tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
          />
        </section>

        {/* KEAHLIAN */}
        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-aksen">
                Kemampuan Saya
              </p>
              <h2 className="mt-1 text-3xl font-bold">
                Keahlian
              </h2>
            </div>

            <Link
              href="/tentang#keahlian"
              className="font-semibold text-aksen hover:underline"
            >
              Lihat semua keahlian →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
              />
            ))}
          </div>
        </section>

        {/* PROYEK TERBARU */}
        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-aksen">
                Hasil Karya
              </p>
              <h2 className="mt-1 text-3xl font-bold">
                Proyek Terbaru
              </h2>
            </div>

            <Link
              href="/proyek"
              className={buttonVariants({
                size: "lg",
                className: "mt-6",
              })}
            >
              Lihat Semua Proyek →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {proyek.slice(0, 3).map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                )}

                <div className="p-5">
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-6 text-muted-foreground">
                    {item.description}
                  </p>

                  <Link
                    href={`/proyek/${item.slug}`}
                    className="mt-4 inline-block font-semibold text-aksen hover:underline"
                  >
                    Lihat detail →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}