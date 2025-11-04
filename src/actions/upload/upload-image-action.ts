"use server";

type uploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData
): Promise<uploadImageActionResult> {
  const imageMaxSize = 921600;
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

  if(!file.type.startsWith('image/')){
    return makeResult({ error: "Invalid image!" });

  }
  return makeResult({ url: "URL" });
}
