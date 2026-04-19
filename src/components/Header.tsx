import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, description }) => {
  return (
    <header className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold tracking-[0.12em] text-slate-500">{subtitle}</p>
      <h1 className="mt-2 text-2xl font-bold text-slate-800 sm:text-3xl">{title}</h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
    </header>
  );
};
