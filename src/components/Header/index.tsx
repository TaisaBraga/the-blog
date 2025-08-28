import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <h1 className="font-extrabold text-3xl py-5 sm:text-4xl lg:text-5xl lg:py-8">
        <Link href="/">The Blog</Link>
      </h1>
    </div>
  );
}
