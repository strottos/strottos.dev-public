export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-8 w-9/12 mx-auto">{children}</div>
}
