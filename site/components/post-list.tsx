"use client";

import { Post } from "@/types/post";
import PostCard from "./post-card";

export default function PostList(props: { posts: Post[], title?: string }) {
  let displayedTitle = props.title || "Posts";

  if (props.posts.length === 0) {
    return (
      <section>
        <div className="flex flex-col justify-center bg-white p-4 lg:w-8/12 lg:mx-auto">
          <h1 className="text-3xl font-bold pb-2">{displayedTitle}</h1>
          <p className="text-xl">No posts found.</p>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div className="flex flex-col justify-center bg-white p-4 lg:w-8/12 lg:mx-auto">
          <h1 className="text-3xl font-bold pb-2">{displayedTitle}</h1>
          {props.posts.map((post) => {
            return (
              <PostCard key={post.href} title={post.title} summary={post.summary} image={post.image} href={`/posts/${post.href}`} />
            );
          })}
        </div>
      </section>
    );
  }
}
