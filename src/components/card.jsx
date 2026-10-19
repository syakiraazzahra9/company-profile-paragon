export default function Card({ title, description, image, badge, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-amber-100 flex flex-col">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {badge && (
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
              {badge}
            </span>
          )}
          {icon && <div className="text-4xl mb-3">{icon}</div>}
          <h3 className="text-xl font-bold text-slate-900 mt-2">{title}</h3>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}