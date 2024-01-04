"use client";

import React, { useEffect, useRef, useState } from 'react';
import 'asciinema-player/dist/bundle/asciinema-player.css';
import { useMediaQuery } from 'react-responsive';

type AsciinemaOptions = {
    cols?: string;
    rows?: string;
    autoPlay?: boolean
    preload?: boolean;
    loop?: boolean | number;
    startAt?: number | string;
    speed?: number;
    idleTimeLimit?: number;
    theme?: string;
    poster?: string;
    fit?: string;
    fontSize?: string;
};

export default function AsciinemaPlayer(props: {
  cast: string,
  render?: string,
  classes?: string,
  caption?: string,
  asciinemaOptions?: AsciinemaOptions,
}) {
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const ref = useRef<HTMLDivElement>(null);
  const src = `/asciinema/${props.cast}`;

  const [player, setPlayer] = useState<typeof import("asciinema-player")>()

  useEffect(() => {
    import("asciinema-player").then(p => {setPlayer(p)})
  }, [])
  useEffect(() => {
    if (props.render) {
      if ((props.render === "large" && !isLargeScreen) || (props.render === "small" && isLargeScreen)) {
        return () => {};
      }
    }

    const currentRef = ref.current
    const instance = player?.create(src, currentRef, props.asciinemaOptions);
    return () => {instance?.dispose()}
  }, [src, player, props.asciinemaOptions]);

  return (
    <div className={`mb-2 ${props.classes}`}>
      <div ref={ref} />
      {props.caption ? ( <p className="text-center">{props.caption}</p> ) : null}
    </div>
  );
}
