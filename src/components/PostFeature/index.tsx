import React from "react";
import PostCoverImage from "../PostCoverImage";
import cookingImage from "../../../public/images/HomeImage.svg";
import PostSummary from "../PostSummary";
import { postRepository } from "@/repositories/post";

export default async function PostFeature() {
  const postLink = `/post/${""}`;
    const posts = await postRepository.findAll();
  

  return (
    <section className="flex flex-col items-center-safe gap-4 mb-16 sm:flex-row">
      <PostCoverImage
        LinkProps={{ href: postLink }}
        ImageProps={{
          src: cookingImage,
          width: 1200,
          height: 720,
          alt: "Culinary home image",
          priority: true,
        }}
      />
      <div className={"max-w-[450px]"}>
        <PostSummary
          createdAt={posts[0].createdAt}
          postTitle={posts[0].title}
          postLink={posts[0].slug}
          excerpt={posts[0].excerpt}
        />
      </div>
    </section>
  );
}
