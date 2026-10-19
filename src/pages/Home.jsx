import { Link } from 'react-router-dom';
import paragon from '../assets/paragon.png'; 
import cushionWardah from '../assets/cushion-wardah.jpg';
import kahf from '../assets/kahf.jpg';
import eminaMois from '../assets/eminaMois.jpg';

const featuredProducts = [
  {
    id: 1,
    name: 'Wardah', 
    category: 'Cosmetics & Skincare', 
    image: cushionWardah, 
    description: 'Wardah Colorfit Cushion — Cushion andalan untuk tampilan wajah flawless, natural, dan fresh setiap hari.💚', // Ganti penjelasan
  },
  {
    id: 2,
    name: 'Kahf', 
    category: 'Male Grooming', 
    image: kahf, 
    description: 'Kahf Face Wash Acne and Pore Cleanse Scrub — Sabun wajah pria yang membantu membersihkan kulit dari kotoran dan minyak berlebih, sehingga wajah terasa lebih bersih, segar, dan terawat setiap hari.', // Ganti penjelasan
  },
  {
    id: 3,
    name: 'Emina', 
    category: 'Teen Beauty', 
    image: eminaMois, 
    description: 'Emina Water Bright Glow Moisturizer — Pelembap wajah dengan niacinamide yang membantu mencerahkan kulit dan menyamarkan tampilan pori-pori, sehingga wajah tampak lebih cerah, lembap, dan glowing. 💗', // Ganti penjelasan
  },
];

export default function Home() {
  return (
    <div>
      {}
      <section className="relative w-full py-32 px-4 sm:px-8 text-center sm:py-44 overflow-hidden">
        <img 
          src={paragon} 
          alt="Paragon Background" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-slate-950/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-teal-200 font-semibold tracking-widest uppercase text-xs sm:text-sm bg-teal-900/80 px-4 py-1.5 rounded-full border border-teal-500/40">
            Technology & Innovation
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mt-6 drop-shadow-lg">
            PT Paragon Technology and Innovation
          </h1>
          
          <p className="mt-4 text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
            Paragon is an Indonesian beauty company with the purpose of creating a greater good for society through innovation.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/services"
              className="bg-teal-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-teal-500 transition shadow-lg"
            >
              Lihat Layanan
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition shadow-lg"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">About Paragon</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Paragon Technology and Innovation is the largest national cosmetics company in Indonesia, housing well-known brands such as Wardah, Make Over, Emina, Kahf, and LABORE. We focus on high-quality product innovations that are safe, halal, and create a positive impact on society.
          </p>
        </div>
      </section>

      {}
      <section className="bg-slate-50 py-16 px-4 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Featured Products & Brands</h2>
            <p className="text-slate-600 mt-2">Discover the Best of Beauty and Self-Care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                <div className="h-52 w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-teal-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {product.category}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                    <Link 
                      to="/portfolio"
                      className="text-teal-600 hover:text-teal-700 font-semibold text-sm inline-flex items-center gap-1"
                    >
                      <span>Lihat Detail</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-block bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-800 transition shadow-md"
            >
              Lihat Seluruh Portofolio Brand
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}