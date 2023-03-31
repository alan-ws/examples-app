import { notFound } from "next/navigation";

export const revalidate = 0;

const fetchBlogs = async () => {
  return await fetch("https://639040c665ff4183110d7bdd.mockapi.io/blogs");
};

export async function generateStaticParams() {
  const posts = await fetchBlogs();

  if (posts.ok) notFound();

  return [{ slug: "post-1" }];
}

export default async function Page({ params }: { params: { slug: string } }) {
  return <main>SLUG: {params.slug}</main>;
}
