"use client";
import { CircleXIcon, FileTextIcon, HouseIcon, MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MenuAdmin() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  },[pathname])

  return (
    <nav
      className={`bg-slate-900 text-slate-100 rounded-lg flex flex-col mb-8 sm:flex-row sm:flex-wrap ${
        !isOpen && "h-10"
      } ${!isOpen && "overflow-hidden"} sm:overflow-visible sm:h-auto`}
    >
      <button onClick={() => setIsOpen(prev => !prev)} className="[&>svg]:w-[16px] [&>svg]:h-[16px] px-4 rounded-lg flex items-center justify-start gap-3 h-10 shrink-0 transition hover:bg-slate-800 text-blue-200 italic cursor-pointer sm:hidden">
        {isOpen ? (
          <>
            <CircleXIcon />
            Fechar
          </>
        ) : (
          <>
            <MenuIcon />
            Menu
          </>
        )}
      </button>
      <a
        href="/"
        target="_blank"
        className="[&>svg]:w-[16px] [&>svg]:h-[16px] cursor-pointer px-4 rounded-lg flex items-center justify-start gap-3 h-10 shrink-0 transition hover:bg-slate-800"
      >
        <HouseIcon /> Home
      </a>
      <Link
        href="/admin/post"
        className="[&>svg]:w-[16px] [&>svg]:h-[16px] px-4 flex rounded-lg items-center justify-start gap-3 h-10 shrink-0 transition hover:bg-slate-800"
      >
        <FileTextIcon /> Posts
      </Link>
      <Link
        href="/admin/post/new"
        className="[&>svg]:w-[16px] [&>svg]:h-[16px] px-4 flex rounded-lg items-center justify-start gap-3 h-10 shrink-0 transition hover:bg-slate-800"
      >
        <PlusIcon /> Create Post
      </Link>
    </nav>
  );
}
