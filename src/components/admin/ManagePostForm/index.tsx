'use client'
import ButtonComponent from "@/components/Button";
import InputCheckbox from "@/components/InputCheckbox";
import InputText from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarckdownEditor";
import React, { useState } from "react";
import { ImageUploader } from "../ImageUploader";

export default function ManagePostForm() {
  const [content, setContentValue] = useState('')

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText labelText="Name" placeholder="Type your name" />
        <InputText
          labelText="Surname"
          disabled
          placeholder="Type your surname"
        />
        <InputCheckbox labelText="teste" />
        <ImageUploader disabled={false} />
        <MarkdownEditor
          labelText='Content'
          value={content}
          setValue={setContentValue}
          textAreaName='content'
          disabled={false}
        />

      </div>
      <div className="mt-4">
        <ButtonComponent type="submit">Send</ButtonComponent>
      </div>
    </form>
  );
}
