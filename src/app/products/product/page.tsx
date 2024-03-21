"use client";
import React from 'react'; 
import { useRouter } from 'next/navigation'

interface data{
    title:string,
    id:string
}
const Page = ({ data }:{data:data}) => {
    const router = useRouter();
    const { title,id } = data;

    const handleProductClick = (productId:{id:Number}) => {
        // console.log(productId)
        router.push(`products/${productId}`);
      };

  return (
    <div>
      {data && (
        <>
        <ul>
          <li className=' cursor-pointer font-bold' onClick={()=>handleProductClick(id)}>{title}</li>
        </ul>
         </>
      )}
    </div>
  );
};

export default Page;
