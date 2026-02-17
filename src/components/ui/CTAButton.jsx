// --- SHARED: UI COMPONENTS ---
const CTAButton = ({ variant = 'primary', children, onClick, className = '', type = "button" }) => {
  const styles = {
    primary: "bg-amber-800 text-white hover:bg-amber-900 shadow-lg",
    secondary: "bg-white text-amber-900 border-2 border-amber-800 hover:bg-amber-50",
    ghost: "bg-transparent text-amber-800 hover:underline underline-offset-4",
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;
