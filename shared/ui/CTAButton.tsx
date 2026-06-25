import React from 'react';

export interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const styles = {
    primary: "bg-amber-800 text-white hover:bg-amber-900 shadow-lg disabled:bg-stone-300 disabled:cursor-not-allowed",
    secondary: "bg-white text-amber-900 border-2 border-amber-800 hover:bg-amber-50 disabled:border-stone-300 disabled:text-stone-400 disabled:cursor-not-allowed",
    ghost: "bg-transparent text-amber-800 hover:underline underline-offset-4 disabled:text-stone-400 disabled:cursor-not-allowed",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;
