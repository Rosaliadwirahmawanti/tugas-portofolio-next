import FormKontak from "@/components/FormKontak";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-[#f0fdf4] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Langsung panggil FormKontak karena judulnya sudah ada di dalam form */}
        <FormKontak />
      </div>
    </main>
  );
}