import Image from "next/image";

export default function CarouselItem(props: {
  image: string;
  children: string;
}) {
  return (
    <div className="p-1">
      <Image
        src={`/images/${props.image}`}
        width={1024}
        height={1024}
        alt={`${props.image}`}
        className="rounded-md w-11/12 lg:w-96 lg:w-96 m-4 border-gray border-2"
      />
      <p className="font-3xl text-center h-12 lg:w-96">{props.children}</p>
    </div>
  );
}
