import ErrorMessage from "@/components/ErrorMessage";
import React from "react";

export default function NotFoundPage() {
  return (
    <ErrorMessage
      pageTitle="Page not found"
      contentTitle="404"
      content="404 error - The page you are trying to access does not exist."
    />
  );
}
