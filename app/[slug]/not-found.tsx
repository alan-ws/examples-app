import Image from "next/image";

const fetchBrandedStuff = async () => {
  return await (
    await fetch("https://639040c665ff4183110d7bdd.mockapi.io/brand/1")
  ).json();
};

export default async function NotFound() {
  const res = await fetchBrandedStuff();
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Image src={res.img} height={480} width={640} alt="animal" />
    </>
  );
}
