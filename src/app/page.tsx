import Container from "@/components/Container";
import Header from "@/components/Header";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import { Suspense } from "react";
import PostFeature from "@/components/PostFeature";

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinLoader />}>
        <PostFeature />
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">FOOTER</h1>
      </footer>
    </Container>
  );
}
