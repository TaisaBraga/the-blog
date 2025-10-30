import ButtonComponent from "@/components/Button";
import InputCheckbox from "@/components/InputCheckbox";
import InputText from "@/components/InputText";
import { BanIcon, BugIcon, CheckIcon } from "lucide-react";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "New Post",
};

export default async function AdminNewPostPage() {
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
      </div>
      <div className="mt-4">
        <ButtonComponent type="submit">Send</ButtonComponent>
      </div>
    </form>
  );
}
