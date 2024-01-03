import PostList from '@/components/post-list';
import posts from "@/content/posts.json";

export const dynamicParams = false;

export async function generateStaticParams() {
  let tags: string[] = [];
  for (let post of posts) {
    tags = tags.concat(...post.tags);
  }
  return tags.map((x) => {
    return {
      slug: x.toLowerCase(),
      title: x.replace(/-/g, " "),
    }
  });
}

export default function Posts({ params }: { params: { slug: string, title: string } }) {
  const displayedPosts = posts.filter((post) => {
    return post.tags.some((x) => params.slug.toLowerCase() == x.toLowerCase());
  });

  return (
    <PostList posts={displayedPosts} title={params.title} />
  );
};
