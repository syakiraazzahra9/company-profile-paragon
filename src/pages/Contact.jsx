import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi';
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-12">
        Hubungi Kami
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Informasi Kontak Kantor Pusat */}
        <div className="bg-slate-900 text-white p-8 rounded-xl flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="text-2xl font-bold text-teal-400 mb-6">Kantor Pusat Paragon</h2>
            <div className="space-y-4 text-gray-300">
              <p>📍 <strong>Alamat:</strong> Jl. Ciledug Raya No. 10, Ulujami, Pesanggrahan, Jakarta Selatan</p>
              <p>✉️ <strong>Email:</strong> corporate@paragon-innovation.com</p>
              <p>📞 <strong>Telepon:</strong> (021) 5840555</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-teal-400 mb-2">Media Sosial</h3>
            <div className="flex space-x-4 text-sm text-gray-300">
              <a href="#" className="hover:text-teal-400 transition">Instagram</a>
              <a href="#" className="hover:text-teal-400 transition">LinkedIn</a>
              <a href="#" className="hover:text-teal-400 transition">YouTube</a>
            </div>
          </div>
        </div>

        {/* Form Pesan */}
        <div className="bg-white p-8 rounded-xl shadow border border-slate-100">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-teal-50 text-teal-800 rounded-lg border border-teal-200">
              Terima kasih! Pesan Anda telah terkirim ke tim Paragon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Pesan</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-slate-950 font-bold py-2.5 rounded-lg hover:bg-teal-400 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}