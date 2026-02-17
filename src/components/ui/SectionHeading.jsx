const SectionHeading = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4 italic">{title}</h2>
    {subtitle && <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeading;
