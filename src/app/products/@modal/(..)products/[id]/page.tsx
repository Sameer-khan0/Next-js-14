import { Metadata } from "next";
import Modal from "@/components/Modal";

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
    <Modal>
    <div className=" ">
    <h1>Intercepting component</h1>
    <div>
      <img src={res.image} alt="image" />
    </div>
    </div>
    </Modal>
  );
};

export default UserPage;
