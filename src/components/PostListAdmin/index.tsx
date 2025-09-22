import { findAllPostsAdmin } from "@/utils/queries/admin";
import Link from "next/link";
import React from "react";
import DeletePostButton from "../admin/DeletePost";
import ErrorMessage from "../ErrorMessage";

export default async function PostListAdmin() {
  const posts = await findAllPostsAdmin();

  if (posts.length <= 0)
    return (
      <ErrorMessage contentTitle="Hey 😅" content="Let's create some post?" />
    );

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
            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
