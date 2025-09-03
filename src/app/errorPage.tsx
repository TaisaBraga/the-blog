"use client";
import ErrorMessage from "@/components/ErrorMessage";
import React, { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
};
export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.log("error:", error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle="Error"
      contentTitle="500"
      content="500 - Error found. Please, try again!"
    />
  );
}
