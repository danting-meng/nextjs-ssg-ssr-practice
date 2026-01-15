// SSG
/*
export const dynamic = 'force-static'; 

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/data/cars.json', { cache: 'force-cache' });
  const data = await res.json();

  return data.map((car: { id: string }) => ({id: car.id,}));
}

export default async function CarPage({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;
  const url = `http://localhost:3000/data/${id}.json`;
  const res = await fetch(url, { cache: "force-cache" });
  const car = await res.json();

  return (
    <div>
      <h1>{car.brand ?? car.id}</h1>
      <img src={car.image} width="300" />
    </div>
  );
}
*/

// SSR
export const dynamic = 'force-dynamic'; 

export default async function CarPage({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;
  const url = `http://localhost:3000/data/${id}.json`;
  const res = await fetch(url, { cache: "no-store" });
  const car = await res.json();

  return (
    <div>
      <h1>{car.brand ?? car.id}</h1>
      <img src={car.image} width="300" /> 
    </div>
  );
}


  