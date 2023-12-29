import PostCard from "@/components/post-card";

export default async function Post() {
  const posts = [
    {
      'filename': 'git-merging-rebasing',
      'title': 'Test',
      'summary': 'This is a test post.',
      'image': 'git-merging-rebasing/main.png',
      'href': '/posts/test'
    },
  ];

  return (
    <section>
      <div className="flex flex-col justify-center bg-white p-4 lg:w-8/12 lg:mx-auto">
        <h1 className="text-3xl font-bold pb-2">Posts</h1>
        {posts.map((post) => {
          return (
            <PostCard key={post.filename} title={post.title} summary={post.summary} image={post.image} href={`/posts/${post.filename}`} />
          );
        })}
      </div>
    </section>
  );
}
