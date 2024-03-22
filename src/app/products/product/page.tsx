import React from 'react'; 
import Link from 'next/link';

interface data{
    title:string,
    id:string,
    image:string
}
const Page = ({ data }:{data:data}) => {
   const { title,id,image } = data;


  return (
    <div>
      {data && (
        <>
        <ul className=' flex gap-3 p-1'>
          <div className=' w-8 h-8 rounded-3xl'>
          <img src={image} className=' object-contain rounded-full' alt="image" />
          </div>
          <li className=' cursor-pointer font-bold'><Link href={`products/${id}`}>{title}</Link></li>
        </ul>
         </>
      )}
    </div>
  );
};

export default Page;
