import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <header>
        <h1 className="text-6xl font-bold text-center">HEADER</h1>
      </header>

      <Suspense fallback={<SpinLoader className='min-h-20'/>}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center">FOOTER</h1>
      </footer>
    </div>
  );
}
