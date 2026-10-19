import personal from '../assets/personal.jpg';
import career from '../assets/career.jpg';
import beasiswa from '../assets/beasiswa.jpg';


const servicesList = [
  {
    id: 1,
    title: 'Personal Analysis',
    category: 'Beauty & Skin Consultation',
    image: personal,
    description: 'Layanan analisis personal seperti shade matching, personal color analysis, dan konsultasi kondisi kulit',
  },
  {
    id: 2,
    title: 'Career Opportunities',
    category: 'Paragonian Development',
    image: career,
    description: 'Program pengembangan karir dan rekrutmen bagi talenta terbaik bangsa untuk berkembang bersama keluarga besar Paragonian.',
  },
  {
    id: 3,
    title: 'Scholarship Program',
    category: 'Education & Community',
    image: beasiswa,
    description: 'Dukungan beasiswa pendidikan penuh dan program kepemimpinan bagi mahasiswa berprestasi di seluruh Indonesia.',
  },
];

// Data Produk & Testimoni Pelanggan (Desain sesuai contoh foto)
const productReviews = [
  {
    id: 1,
    rating: 5,
    quote: '"Informasi produk dan shade matching-nya lengkap banget! Membantu banget buat memilih cushion Wardah yang pas sama tone kulit aku."',
    author: 'Irene',
    role: 'Pengguna Wardah Beauty',
  },
  {
    id: 2,
    rating: 5,
    quote: '"Baru pertama kali ikut program konsultasi kulit, sangat seru dan kakak nya sangat ramah!"',
    author: 'Jisoo',
    role: 'Pengguna Emina Skincare',
  },
  {
    id: 3,
    rating: 5,
    quote: '"Program beasiswa ini sangat membantu saya, karena adanya beasiswa ini saya dapat berkuliah. Pada setiap bulan juga mengadakan evaluasi agar terus meningkat"',
    author: 'Stella',
    role: 'Penerima Beasiswa Paragon 2026',
  },
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-700 font-semibold tracking-wider uppercase text-xs sm:text-sm bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
            Layanan & Program
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            LAYAN UTAMA
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Menciptakan kebaikan dan inovasi berkelanjutan melalui analisis personal kecantikan, pengembangan karir, hingga dukungan pendidikan.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 border-l-4 border-teal-600 pl-4">
            Layanan Unggulan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
              >
                {/* Tempat Foto / Gambar */}
                <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-teal-800/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {service.category}
                  </span>
                </div>

                {/* Deskripsi & Keterangan */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button className="text-teal-700 hover:text-teal-800 font-semibold text-sm inline-flex items-center gap-1 transition">
                      <span>Pelajari Selengkapnya</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#f2f9f4] rounded-3xl p-8 sm:p-12 border border-ember-300">
          
          {/* Header Section Ulasan */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-800 font-extrabold tracking-widest uppercase text-xs sm:text-sm">
              PENGALAMAN PELANGGAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#03361e] mt-2 tracking-tight">
              Cerita Seru dari Klien Kami
            </h2>
            <p className="text-emerald-900/80 mt-3 text-sm sm:text-base">
              Simak pengalaman mereka dalam menemukan produk dan layanan terbaik bersama Paragon!
            </p>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productReviews.map((item) => (
              <div 
                key={item.id}
                className="bg-[#fdfbf6] rounded-2xl p-7 border border-[#e8ebd9] shadow-sm flex flex-col justify-between"
              >
                <div>
                  {}
                  <div className="flex gap-1 text-amber-400 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>

                  {}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal mb-8">
                    {item.quote}
                  </p>
                </div>

                {}
                <div className="pt-4 border-t border-slate-200/60">
                  <h4 className="font-bold text-slate-900 text-base">
                    {item.author}
                  </h4>
                  <p className="text-emerald-700 text-xs sm:text-sm font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}