import { useRouter } from "next/router";
import Product from "./product/page";

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
}

async function page() {
  const url="https://fakestoreapi.com/products";
  // const url="https://ecommerce-app-ashen-eight.vercel.app/api/product/products"
  const req = await fetch(url);
  const res: Product[] = await req.json();

  return (
    <div>
      {res.map((product) => (
        <div key={product.id}>
          <Product data={product} />
        </div>
      ))}
    </div>
  );
}

export default page;
