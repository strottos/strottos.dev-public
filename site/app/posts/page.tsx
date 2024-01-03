import posts from "@/content/posts.json";
import PostList from "@/components/post-list";

export default function Post() {
  return <PostList posts={posts} />;
}
