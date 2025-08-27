import React from "react";
import PostHeading from "../PostHeading";
import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";

type PostSummaryProps = {
  createdAt: string | "";
  postTitle: string;
  postLink: string;
  excerpt: string;
};

export default function PostSummary({
  createdAt,
  postTitle,
  postLink,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-600 block text-sm/tight"
        dateTime={createdAt}
        title={formatDateTime(createdAt)}
      >
        {formatRelativeDate(createdAt || "")}
      </time>
      <PostHeading
        text={postTitle}
        className="text-xl/tight font-bold hover:text-slate-600 transition"
        link={postLink}
      />
      <p>{excerpt}</p>
    </div>
  );
}
