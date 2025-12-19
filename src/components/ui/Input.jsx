import React from "react";

export default function Input(props) {
  const { className = "", ...rest } = props;
  return (
    <input
      {...rest}
      className={`p-4 rounded-xl outline-none bg-white/95 text-slate-900 placeholder:text-slate-500 border border-white/40 focus:border-blue-400 ${className}`}
    />
  );
}

