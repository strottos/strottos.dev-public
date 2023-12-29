"use client";

import { Children, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const arrayChildren = Children.toArray(children);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === arrayChildren.length ? 0 : prevIndex + 1,
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? arrayChildren.length - 1 : prevIndex - 1,
    );
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  return (
    <div className="relative rounded-xl lg:w-112 l:w-full m-auto overflow-hidden">
      <div className="flex justify-center">
        {arrayChildren[currentIndex]}
        {isDesktopOrLaptop
          ? arrayChildren[(currentIndex + 1) % arrayChildren.length]
          : null}
        {isBigScreen
          ? arrayChildren[(currentIndex + 2) % arrayChildren.length]
          : null}
      </div>
      <div>
        <div
          className="absolute left-0 top-0 bottom-0 my-auto mx-1 h-4 w-4"
          data-testid="left"
          onClick={handlePrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div
          className="absolute right-0 top-0 bottom-0 my-auto mx-1 h-4 w-4"
          data-testid="right"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
