import { Metadata } from "next";

export const metadata:Metadata = {
  title: `Product`,
};

interface Param {
  id: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const UserPage = async ({ params }: { params: Param }) => {
  const { id } = params;
  const req = await fetch(`https://fakestoreapi.com/products/${id}`);
  const res: Product = await req.json();
  return (
    <div>
      <h1>{res.title}</h1>
      <h2>{res.price}</h2>
      <img src={res.image} alt="image" />
    </div>
  );
};

export default UserPage;
