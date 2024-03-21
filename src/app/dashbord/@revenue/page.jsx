import React from "react";
import Link from "next/link";
import Card from "../../../components/card";
import Botton from "@/components/botton";

const page = () => {
  return (
    <Card>
      <h1>revenue page</h1>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam enim vel
      incidunt. Aperiam dolorem, nesciunt laboriosam nemo exercitationem
      inventore! Eligendi recusandae sunt eveniet eos possimus labore quis alias
      incidunt vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      rem, voluptate voluptatem debitis exercitationem obcaecati pariatur cum
      dicta nam ullam officiis, doloremque iste eius. Est totam ut, rem porro
      tempora quae maxime voluptatibus saepe odit asperiores, labore fugiat
      sint. Inventore corrupti quidem voluptatem rerum, quam illum ipsum tempore
      vel consequatur, ratione numquam repudiandae aspernatur consectetur, odit
      reprehenderit perferendis saepe temporibus ducimus quis suscipit magnam.
      <div>
      <Botton><Link href="/dashbord/archive">Archive</Link></Botton>
      </div>
    </Card>
  );
};

export default page;
