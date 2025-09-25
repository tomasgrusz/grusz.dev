export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/mdx/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: "hello-world" }];
}

export const dynamicParams = false;
