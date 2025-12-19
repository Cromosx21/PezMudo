import React from "react";

export default function Button({ children, variant = "primary", className = "", ...rest }) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : variant === "accent"
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : "bg-slate-100 text-slate-900 hover:bg-slate-200";
  return (
    <button
      {...rest}
      className={`px-6 py-3 rounded-xl font-bold transition cursor-pointer ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

