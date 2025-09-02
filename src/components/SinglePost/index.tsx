import { formatDateTime } from "@/utils/format-datetime";
import { findPostsBySlugCached } from "@/utils/queries/posts";
import Image from "next/image";
import React from "react";
import PostHeading from "../PostHeading";
import SafeMarkdown from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};
export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostsBySlugCached(slug);

  return (
    <article className="mb-16">
      <header className="group flex flex-col gap-4 mb-4">
        <Image
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.excerpt}
          className="rounded-xl mb-6"
        />
        <PostHeading
          link={`/post/${post.slug}`}
          text={post.title}
          className="text-xl/tight font-bold hover:text-slate-600 transition"
        />
        <h3 className="font-bold"></h3>
        <p>
          {post.author} |{" "}
          <span className="text-slate-600 text-xs">
            {formatDateTime(post.createdAt)}
          </span>
        </p>
      </header>
      <p className="text-slate-600 text-xs mb-4">{post.excerpt}</p>
      <SafeMarkdown markdown={post.content}/>
    </article>
  );
}
