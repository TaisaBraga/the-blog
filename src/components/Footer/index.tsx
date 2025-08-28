import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="pb-16 text-center text-xs">
      <p className="">
        Copyright &copy; · {new Date().getFullYear()} · 
        <Link href={"/"}> The Blog · Taisa Braga Bento</Link>
      </p>
    </footer>
  );
}
