export default async function NotFound() {
  const res = await fetch("https://notarealdomainandthereforefail.com/", {
    next: { revalidate: 0 },
  });
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <h1>{(await res.json()).badData}</h1>
    </>
  );
}
