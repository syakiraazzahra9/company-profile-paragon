import Card from '../components/card';
import { portfolioData } from '../data/companyData';

import azmi from '../assets/azmi.jpg';
import kira from '../assets/kira.jpg';
import salma from '../assets/salma.jpg';
import wya from '../assets/wya.jpg';
import beasiswa from '../assets/beasiswa.jpg';
import summit from '../assets/summit.jpg';

const eventDocumentation = [
  {
    id: 1,
    title: 'Paragon Innovation Summit',
    category: 'Event Nasional',
    image: summit,
    description: 'Ajang pertemuan tahunan terbesar yang mempertemukan para inovator, pegiat kecantikan, dan talenta muda inspiratif.',
  },
  {
    id: 2,
    title: 'Beasiswa Paragon Leadership Training',
    category: 'Corporate Social Responsibility',
    image: beasiswa,
    description: 'Program pelatihan kepemimpinan intensif bagi para penerima beasiswa terpilih dari berbagai universitas di Indonesia.',
  },
  {
    id: 3,
    title: 'Wardah Youth Ambasador',
    category: 'Pameran Produk',
    image: wya,
    description: 'Eksplorasi teknologi sains modern di balik layar pembuatan produk-produk berkualitas tinggi dari Paragon.',
  },
];

const clientList = [
  {
    id: 1,
    name: 'Azmi Triani Putri', 
    role: 'Distributor Utama', 
    comment: 'Produknya berkualitas, pelayanannya baik, dan kerja samanya sangat memuaskan!',
    avatar: azmi,
  },
  {
    id: 2,
    name: 'Syakira Azzahra Syihabudin', 
    role: 'Partner Kolaborasi Brand', 
    comment: 'Kegiatan di paragon sangat seru dan bermanfaat',
    avatar: kira,
  },
  {
    id: 3,
    name: 'Salma Nabila', 
    role: 'Mitra Institusi Pendidikan', 
    comment: 'Paragon selalu jaya, agar anak-anak dapat mengejar mimpi mereka menggunakan program beasiswa ini...',
    avatar: salma,
  },
];

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-teal-700 font-semibold tracking-wider uppercase text-xs sm:text-sm bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
          Proyek & Dokukementasi
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
          Galeri
        </h1>
        <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
          Menampilkan rekam jejak kesuksesan pengembangan brand unggulan seperti Wardah, Emina, dan Make Over, daftar mitra klien, serta dokumentasi kegiatan kami.
        </p>
      </div>

      <div className="mb-20">
        <div className="mb-8 border-l-4 border-teal-600 pl-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Proyek Unggulan</h2>
          <p className="text-slate-600 text-sm mt-1">Pengembangan brand kosmetik dan perawatan diri nasional.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              badge={item.category}
            />
          ))}
        </div>
      </div>

      <div className="mb-20 bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/70">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Daftar Klien</h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">Beberapa mitra terkemuka yang telah bekerja sama dengan kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientList.map((client) => (
            <div 
              key={client.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col items-center text-center"
            >
              {}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-teal-600 shadow">
                <img src={client.avatar} alt={client.name} className="w-full h-full object-cover" />
              </div>

              {}
              <h3 className="text-lg font-bold text-slate-900">{client.name}</h3>
              <p className="text-teal-700 text-xs font-semibold mb-3">{client.role}</p>
              <p className="text-slate-600 text-sm italic">{client.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <div className="mb-8 border-l-4 border-teal-600 pl-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Dokumentasi Kegiatan</h2>
          <p className="text-slate-600 text-sm mt-1">Momen penting dari berbagai event, pelatihan, dan pameran perusahaan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventDocumentation.map((doc) => (
            <div 
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
            >
              {}
              <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                <img 
                  src={doc.image} 
                  alt={doc.title} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-teal-800/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {doc.category}
                </span>
              </div>

              {}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}