import React from "react";
import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPostsCached } from "@/utils/queries/posts";

export default async function PostsList() {
  const posts = await findAllPublicPostsCached()
  
  if(posts.length < 1) return null

  return (
    <div className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 md:grid-cols-3 ">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div key={post.id} className="flex flex-col gap-4">
            <PostCoverImage
              LinkProps={{ href: postLink }}
              ImageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
                priority: false,
              }}
            />
            <PostSummary
              createdAt={post.createdAt}
              postTitle={post.title}
              postLink={postLink}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
