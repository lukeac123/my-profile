export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`../../../posts/${slug}.mdx`);

  return <Post />;
}

// generateStaticParams can be used to prerender the provided routes.
// By marking dynamicParams as false, accessing a route not defined in generateStaticParams will 404.

// export function generateStaticParams() {
//   return [{ slug: "welcome" }, { slug: "about" }];
// }

// export const dynamicParams = false;
