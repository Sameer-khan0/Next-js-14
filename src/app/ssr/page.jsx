async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  let data;
  try {
    data = await getData();
  } catch (error) {
    console.error("Error fetching data:", error);
    return <main>Error: Failed to fetch data</main>;
  }

  return (
    <main>
      {data.map((e) => (
        <div key={e.id}>
          <p>{e.title}</p>
        </div>
      ))}
    </main>
  );
}
