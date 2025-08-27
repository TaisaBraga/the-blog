import Link from "next/link";
import React from "react";

type PostHeadingProps = {
  className: string;
  text: string;
  link: string;
};

export default function PostHeading({
  className,
  text,
  link,
}: PostHeadingProps) {
  return (
    <>
      <Link href={link} className={className}>
        {text}
      </Link>
    </>
  );
}
