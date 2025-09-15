import React from "react";
import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPostsCached } from "@/utils/queries/posts";
import ErrorMessage from "../ErrorMessage";

export default async function PostFeature() {
  const posts = await findAllPublicPostsCached()
  const post = posts[0]
  const postLink = `/post/${post.slug}`;

    if (posts.length <= 0)
    return (
      <ErrorMessage
        contentTitle='Ops 😅'
        content='We do not create any post'
      />
    );
  

  return (
    <section className="flex flex-col items-center-safe gap-4 mb-16 sm:flex-row">
      <PostCoverImage
        LinkProps={{ href: postLink }}
        ImageProps={{
          src: post.coverImageUrl,
          width: 1200,
          height: 720,
          alt: post.title,
          priority: true,
        }}
      />
      <div className={"max-w-[450px]"}>
        <PostSummary
          createdAt={post.createdAt}
          postTitle={post.title}
          postLink={postLink}
          excerpt={post.excerpt}
        />
      </div>
    </section>
  );
}
