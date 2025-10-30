import ButtonComponent from "@/components/Button";
import { BanIcon, BugIcon, CheckIcon } from "lucide-react";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "New Post",
};

export default async function AdminNewPostPage() {
  return (
    <div>
      <div >
        <ButtonComponent variant="danger" size="sm">
          <BugIcon />
          Confirma
        </ButtonComponent>
        <ButtonComponent variant="ghost" size="md">
          <BanIcon />
          Cancel
        </ButtonComponent>
        <ButtonComponent variant="default" size="lg">
          <CheckIcon />
          Ok
        </ButtonComponent>
      </div>
    </div>
  );
}
