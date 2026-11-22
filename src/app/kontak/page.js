
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormKontak from "@/components/FormKontak";

export const metadata = {
  title: "Kontak",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Kontak
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        {/* Formulir Kontak */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Hubungi Saya</CardTitle>
          </CardHeader>

          <CardContent>
            <FormKontak />
          </CardContent>
        </Card>

        {/* Informasi Kontak */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary">
              Temukan Saya di
            </CardTitle>
          </CardHeader>

          <CardContent>
            <ul className="space-y-4">
              <li>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <a
                  href="https://github.com/Rosaliadwirahmawanti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aksen hover:underline break-all"
                >
                  github.com/Rosaliadwirahmawanti
                </a>
              </li>

              <li>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:rrosarplkanesa@gmail.com"
                  className="text-aksen hover:underline break-all"
                >
                  rrosarplkanesa@gmail.com
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </main>
  );
}
