import React from "react";

type SpinLoaderProps = {
  className?: string;
};

export default function SpinLoader({ className = '' }: SpinLoaderProps) {

  return (
    <div  className={`flex items-center justify-center ${className}`}>
      <div className="flex items-center justify-center w-15 h-15 bg-none rounded-full border-slate-900 border-[15px] border-dotted animate-[spin_2s_linear_infinite,pulseScale_7s_ease-in-out_infinite]">
      </div>
    </div>
  );
}
