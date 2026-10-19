import { teamData } from '../data/companyData';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Sejarah Singkat */}
      <section className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">SEJARAH PERUSAHAAN</h1>
        <p className="text-slate-600 leading-relaxed text-lg">
          Didirikan pada tahun 1985 dengan nama PT Pusaka Tradisi Ibu, Paragon kemudian berganti nama menjadi PT Paragon Technology and Innovation pada tahun 2011. Berawal dari industri rumahan, Paragon terus berkembang hingga menjadi salah satu perusahaan kecantikan terkemuka di Indonesia, dengan berbagai merek unggulan serta ribuan karyawan yang berkontribusi dalam menghadirkan inovasi produk kecantikan dan perawatan diri.
        </p>
      </section>

      {/* Visi Misi */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"> 
        <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Visi Paragon</h2>
          <p className="text-slate-700 leading-relaxed">
            Sebuah perusahaan yang berkomitmen untuk memiliki tata kelola perusahaan terbaik dan perbaikan berkelanjutan, agar setiap hari lebih baik dari hari kemarin, melalui produk berkualitas tinggi yang bermanfaat bagi Paragonians, mitra, masyarakat, dan lingkungan.
          </p>
        </div>
        <div className="bg-slate-900 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-teal-400 mb-3">Misi Paragon</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Mengembangkan karyawan yang berkarakter dan berkompetensi tinggi.</li>
            <li>Terus melakukan inovasi produk untuk kepuasan pelanggan.</li>
            <li>Memberikan kontribusi positif bagi kemajuan masyarakat Indonesia.</li>
          </ul>
        </div>
      </section>

      {/* Profil Tokoh */}
      <section>
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">TOKOH & PIMPINAN PARAGON</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow p-6 text-center border border-slate-100">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-2 border-teal-500"
              />
              <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
              <p className="text-teal-600 text-sm font-semibold mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}