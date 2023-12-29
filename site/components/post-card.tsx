import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function PostCard(props: {
  title: string;
  summary: string;
  href: string;
  image?: string;
}) {
  return (
    <div className="bg-white p-4 my-2 border-2 border-gray rounded shadow-lg">
      <Link href={props.href}>
        <div className="md:flex md:flex-row md:justify-start">
          <Image
            src={`/images/posts/${props.image}`}
            width={768}
            height={768}
            alt={props.title}
            className="md:w-64 md:h-64 lg:w-48 lg:h-48"
          />
          <div className="p-4">
            <h1 className="font-bold text-2xl">{props.title}</h1>
            <p>{props.summary}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
