"use client";

import NextImage from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Figure(
  props: React.ComponentProps<typeof NextImage> & {
    render?: string,
    classes?: string,
    caption?: string,
  }
) {
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  if ((props.render === "large" && !isLargeScreen) || (props.render === "small" && isLargeScreen)) {
    return () => {};
  }

  return (
    <div className={`mb-2 ${props.classes}`}>
      <NextImage {...props} />
      {props.caption ? ( <p className="text-center mb-2">{props.caption}</p> ) : null}
    </div>
  )
}
