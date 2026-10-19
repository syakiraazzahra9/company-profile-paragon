export default function Footer() {
  return (
    <footer className="bg-[#fdfbf6] border-t border-[#e5e0d8] py-12 px-4 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 style={{ color: '#005E54' }} className="text-xl font-black mb-3">
            PT Paragon Technology and Innovation
          </h3>
          <p style={{ color: '#005E54' }} className="text-sm leading-relaxed opacity-90">
            Menciptakan kebaikan dan inovasi berkelanjutan melalui produk-produk kecantikan dan perawatan diri berkualitas tinggi.
          </p>
        </div>
        <div>
          <h4 style={{ color: '#005E54' }} className="text-base font-bold mb-3">
            Brand Unggulan
          </h4>
          <ul style={{ color: '#005E54' }} className="text-sm space-y-2 font-medium opacity-90">
            <li>Wardah Beauty</li>
            <li>Make Over Cosmetics</li>
            <li>Emina Skincare</li>
            <li>Kahf Male Grooming</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#005E54' }} className="text-base font-bold mb-3">
            Kontak & Alamat
          </h4>
          <p style={{ color: '#005E54' }} className="text-sm opacity-90">
            Jakarta, Indonesia
          </p>
          <p style={{ color: '#005E54' }} className="text-sm mt-1 opacity-90">
            Email: contact@paragon-innovation.com
          </p>
        </div>
      </div>

      <div 
        style={{ color: '#005E54', borderColor: '#e5e0d8' }} 
        className="max-w-7xl mx-auto border-t pt-6 text-center text-xs font-semibold opacity-80"
      >
        © {new Date().getFullYear()} PT Paragon Technology and Innovation. All rights reserved.
      </div>
    </footer>
  );
}