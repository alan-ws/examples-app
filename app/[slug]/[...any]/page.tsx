import { notFound } from "next/navigation";

const fetchBlogs = async () => {
  return await fetch("https://639040c665ff4183110d7bdd.mockapi.io/blogs");
};

export default async function Page({ params }: { params: { slug: string } }) {
  const blogs = await fetchBlogs();

  if (blogs.ok) notFound();
  return <main>ANY SLUG</main>;
}
