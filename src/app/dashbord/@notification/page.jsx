import React from "react";
import Card from "../../../components/card";
import Botton from "@/components/botton";
import Link from "next/link";

const notificatonPage = () => {
  return (
    <Card>
      <h1>Notification</h1>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione
      illum quia exercitationem repudiandae ipsa velit qui cupiditate, a est
      doloribus, amet nemo minus odio consectetur quo voluptates magnam impedit?
      </p>
      <div>
      <Botton><Link href="/dashbord/archiveNotification">Archive</Link></Botton>
      </div>
    </Card>
  );
};

export default notificatonPage;
