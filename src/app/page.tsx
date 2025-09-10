import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import { Suspense } from "react";
import PostFeature from "@/components/PostFeature";

export const dynamic = 'force-static';

export default async function HomePage() {

  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16"/>}>
        <PostFeature />
        <PostsList />
      </Suspense>
    </>
  );
}
