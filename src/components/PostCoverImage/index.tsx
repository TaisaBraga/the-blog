import Image from "next/image";
import Link from "next/link";
import React from "react";

type PostCoverImageProps = {
  ImageProps: React.ComponentProps<typeof Image>;
  LinkProps: React.ComponentProps<typeof Link>;
}

export default function PostCoverImage({
  ImageProps,
  LinkProps,
}: PostCoverImageProps) {
  return (
    <Link
      className="group w-full h-full overflow-hidden rounded-xl"
      {...LinkProps}
    >
      <Image
        className="transition group-hover:scale-105 object-cover object-center"
        {...ImageProps}
        alt={ImageProps.alt}
      />
    </Link>
  );
}
