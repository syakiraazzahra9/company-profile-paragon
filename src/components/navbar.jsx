import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-[#fdfbf6] border-b border-[#e5e0d8] shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
        {/* LOGO PARAGON HIJAU WARDAH PEKAT (#005E54) */}
        <Link to="/" className="font-extrabold text-2xl tracking-wide flex items-center gap-2">
          <span style={{ color: '#005E54' }} className="font-black">
            PARAGON
          </span>
          <span 
            style={{ color: '#006A60', borderColor: '#005E54' }} 
            className="text-xs font-bold hidden sm:inline border-l-2 pl-2"
          >
            Technology & Innovation
          </span>
        </Link>

        {/* MENU NAVIGASI HIJAU WARDAH */}
        <nav className="flex items-center gap-6 text-sm font-bold">
          <Link to="/" style={{ color: '#005E54' }} className="hover:opacity-80 transition">
            Beranda
          </Link>
          <Link to="/about" style={{ color: '#005E54' }} className="hover:opacity-80 transition">
            Tentang Kami
          </Link>
          <Link to="/services" style={{ color: '#005E54' }} className="hover:opacity-80 transition">
            Layanan
          </Link>
          <Link to="/portfolio" style={{ color: '#005E54' }} className="hover:opacity-80 transition">
            Galeri
          </Link>
          <Link to="/contact" style={{ color: '#005E54' }} className="hover:opacity-80 transition">
            Kontak
          </Link>
        </nav>

      </div>
    </header>
  );
}