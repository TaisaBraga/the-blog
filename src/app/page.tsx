import Container from "@/components/Container";
import Header from "@/components/Header";
import PostCoverImage from "@/components/PostCoverImage";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import Link from "next/link";
import { Suspense } from "react";
import cookingImage from "../../public/images/HomeImage.svg";
import PostHeading from "@/components/PostHeading";

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className="flex flex-col items-center-safe gap-8 mb-16 sm:flex-row">
        <PostCoverImage
          LinkProps={{ href: "#" }}
          ImageProps={{
            src: cookingImage,
            width: 1200,
            height: 720,
            alt: "Culinary home image",
            priority: true,
          }}
        />
        <div>
          <PostHeading text="Confira várias receitas!" className="text-xl font-bold" link="#"/>
          <p className="text-justify mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            voluptas eaque sapiente? Error amet, dolorem unde excepturi in nulla
            animi libero fugiat impedit minus nihil blanditiis doloremque harum,
            perferendis officia?
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">FOOTER</h1>
      </footer>
    </Container>
  );
}
