"use server";

import { mkdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";

type uploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData
): Promise<uploadImageActionResult> {
  const imageMaxSize = 921600;
  const IMAGE_UPLOAD_DIRECTORY = "uploads";
  const IMAGE_SERVER_URL = "http://localhost:3000/uploads";

  const makeResult = ({ url = "", error = "" }) => {
    return { url, error };
  };

  if (!(formData instanceof FormData)) {
    return makeResult({ error: "Invalid data!" });
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    return makeResult({ error: "Invalid File!" });
  }

  if (file.size > imageMaxSize) {
    return makeResult({ error: "The file is too big!" });
  }

  if (!file.type.startsWith("image/")) {
    return makeResult({ error: "Invalid image!" });
  }

  const fileExtension = extname(file.name);
  const uniqueFileName = `${Date.now()}${fileExtension}`;

  //create the upload file, only once
  const uploadFullPath = resolve(
    process.cwd(),
    "public",
    IMAGE_UPLOAD_DIRECTORY
  );
  await mkdir(uploadFullPath, {recursive: true});

  //JS <- bytes -> Node -> salvar
  const fileArrayBuffer = await file.arrayBuffer()
  const buffer= Buffer.from(fileArrayBuffer)

  const fileFullPath = resolve(uploadFullPath, uniqueFileName)
  await writeFile(fileFullPath, buffer)
  const url = `${IMAGE_SERVER_URL}/${uniqueFileName}`

  return makeResult({ url });
}
