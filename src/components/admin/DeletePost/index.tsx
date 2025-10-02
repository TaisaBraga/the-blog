"use client";
import { deletePostAction } from "@/actions/post/delete-post-actions";
import Dialog from "@/components/Dialog";
import { Trash2Icon } from "lucide-react";
import React, { useState, useTransition } from "react";
import { toast } from "react-toastify";


type DeletePostButtonProps = {
  id: string;
  title: string;
};
export default function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleDeletePost = async () => {
    setShowDialog(true);
  };
  const handleConfirm = async () => {
    toast.dismiss()
    startTransition(async () => {
      const result = await deletePostAction(id);
      setShowDialog(false);

      if (result.error) {
        toast.error(result.error)
        return;
      }

      toast.success('Post deleted successfully!')

    });
  };
  return (
    <>
      <button
        className="transition text-red-500 cursor-pointer [&_svg]:w-4 [&_svg]:h-4 hover:scale-120 hover:text-red-600 disabled:text-slate-600 disabled:cursor-not-allowed"
        aria-label={`Delete Post: ${title}`}
        title={`Delete Post: ${title}`}
        onClick={handleDeletePost}
        disabled={isPending}
      >
        <Trash2Icon />
      </button>
      {showDialog && (
        <Dialog
          onCancel={() => setShowDialog(false)}
          onConfirm={() => handleConfirm()}
          isVisible={showDialog}
          title="Delete Post?"
          content={`Are you sure you want to delete the post "${title}"?`}
          disabled={isPending}
        />
      )}
    </>
  );
}
