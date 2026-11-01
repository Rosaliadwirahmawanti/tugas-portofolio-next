export default function ProyekCard({ judul, deskripsi }) {
  return (
    <div className="rounded-xl border p-5 shadow">
      <h2 className="text-xl font-bold">{judul}</h2>
      <p>{deskripsi}</p>
    </div>
  );
}
