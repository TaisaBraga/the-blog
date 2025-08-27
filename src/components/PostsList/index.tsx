import { postRepository } from "@/repositories/post";
import React from "react";
import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";
import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";
import PostSummary from "../PostSummary";

export default async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
      {posts.map((post) => {
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
