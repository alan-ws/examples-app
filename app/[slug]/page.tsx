import { notFound } from "next/navigation";

export const revalidate = 0;

const fetchBlogs = async () => {
  return await fetch("https://639040c665ff4183110d7bdd.mockapi.io/blogs", {
    headers: {
      Authorization: "Bearer savcwv234v2342qvq3245q32456b3q46n3q4b6qb",
    },
  });
};

const fetchBlog = async (id: string) => {
  return await fetch(`https://639040c665ff4183110d7bdd.mockapi.io/blogs/${id}`);
};

export async function generateStaticParams() {
  const blogs = await (await fetchBlogs()).json();
  return blogs.map((blog: { title: string }, ind: number) => ({
    slug: blog.title,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blogData = await fetchBlog("5");
  if (blogData.status === 500) notFound();
  return <main>SLUG: {params.slug}</main>;
}
