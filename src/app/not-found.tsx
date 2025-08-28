import React from "react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center">
      <div>
        <h1 className="text-7xl/tight font-extrabold mb-8">404</h1>
        <p>404 error - The page you are trying to access does not exist.</p>
      </div>
    </div>
  );
}
