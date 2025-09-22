"use server";
import { drizzleDb } from "@/DB/drizzle";
import { postsTable } from "@/DB/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { asyncDelay } from "@/utils/asyncDelay";
import { logColor } from "@/utils/logColor";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  await asyncDelay(2000);
  logColor("deleted post id: " + id);

  if (!id || typeof id !== "string") {
    return { error: "Invalid data!" };
  }

  logColor("Tentando apagar post " + id);

  const post = await postRepository.findById(id).catch((err) => {
    logColor("Erro ao buscar post: " + err.message);
    return undefined;
  });

  if (!post) {
    return { error: "Post not found!" };
  }

  logColor("Post encontrado: " + post.id);

  const result = await drizzleDb
    .delete(postsTable)
    .where(eq(postsTable.id, id));

  logColor("Resultado do delete: " + JSON.stringify(result));

  revalidateTag("posts");
  revalidateTag(`post-${post.slug}`);

  return { error: "" };
}
