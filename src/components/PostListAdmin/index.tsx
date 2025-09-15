import { findAllPostsAdmin } from "@/utils/queries/admin";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function PostListAdmin() {
  const posts = await findAllPostsAdmin();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className={`py-2 px-2 ${
              !post.published && "bg-slate-300"
            } flex gap-2 items-center justify-between`}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>
            {!post.published && (
              <span className="text-sm text-slate-600 italic">
                (Não publicado!)
              </span>
            )}
            <button
              className="transition text-red-500 cursor-pointer [&_svg]:w-4 [&_svg]:h-4 hover:scale-120 hover:text-red-600"
              aria-label={`Delete Post: ${post.title}`}
              title={`Delete Post: ${post.title}`}
            >
              <Trash2Icon />
            </button>
          </div>
        );
      })}
    </div>
  );
}
