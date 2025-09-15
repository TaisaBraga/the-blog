"use client";
import { deletePostAction } from "@/actions/post/delete-post-actions";
import { Trash2Icon } from "lucide-react";
import React, { useTransition } from "react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};
export default function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  const handleDeletePost = async () => {
    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(result);

    });
  };
  return (
    <button
      className="transition text-red-500 cursor-pointer [&_svg]:w-4 [&_svg]:h-4 hover:scale-120 hover:text-red-600 disabled:text-slate-600 disabled:cursor-not-allowed"
      aria-label={`Delete Post: ${title}`}
      title={`Delete Post: ${title}`}
      onClick={handleDeletePost}
      disabled={isPending}

    >
      <Trash2Icon />
    </button>
  );
}
