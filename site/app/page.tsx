import Carousel from "@/components/carousel";
import CarouselItem from "@/components/carousel-item";

import Image from "next/image";

export default function Home() {
  const highlightedTags: Array<{
    name: string;
    image: string;
    text: string;
  }> = require("@/content/highlightedTags.json");

  return [
    <section key="top-logo">
      <Image
        width={1024}
        height={1024}
        src="/images/large-logo.png"
        alt="logo"
        className="w-full"
      />
    </section>,
    <section key="about-me">
      <div className="p-16">
        <Image
          width={1024}
          height={1024}
          src="/images/me.jpg"
          alt="me"
          className="w-48 h-48 mx-auto mb-6 lg:float-right lg:relative lg:right-8 lg:z-10 rounded-full"
        />
        <h1 className="font-bold text-2xl pb-3">
          Coding, Cloud &amp; Calculations
        </h1>
        <p className="lg:w-9/12 pb-2">
          I am a software engineer, platform engineer and tech lead. I am
          passionate about using technology to solve problems and make the
          world a better place.
        </p>
        <p className="lg:w-9/12 pb-2">
          In this blog you&apos;ll find posts about my experiences with
          software and my general interests in technology. I blog about all
          things Coding, Cloud and Calculations, expect to see posts about:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Software Engineering - Rust/Python/JavaScript/general scripting
          </li>
          <li>Platform Engineering - Cloud/Infrastructure as Code</li>
          <li>Being Productive - Terminal/Vim/etc</li>
          <li>Being Successful in Tech</li>
        </ul>
      </div>
    </section>,
    <section key="tags-carousel">
      <h1 className="font-bold text-2xl pb-3 px-16">Articles by Tag</h1>
      <Carousel>
        {highlightedTags.map((tag) => {
          return (
            <CarouselItem key={tag.name} image={`tags/${tag.image}`}>
              {tag.text}
            </CarouselItem>
          );
        })}
      </Carousel>
    </section>,
  ];
}