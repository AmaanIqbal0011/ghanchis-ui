"use client";

export default function ScrollReveal({ children, className = "" }) {
  return (
    <section
      className={`h-screen snap-start flex items-center justify-center p-8 ${className}`}
    >
      {children}
    </section>
  );
}
