"use client"
import React, { useState } from "react";
import Link from "next/link";

const MyLayout = ({ children }) => {
  const [value,setvalue]=useState(".")
  return (
    <div>
      <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} />
      <header className=" w-full bg-slate-300 p-4 text-center">
        <ul className=" flex flex-row justify-evenly">
          <Link href="/login">Login</Link>
          <Link href="/registration">Registration</Link>
          <Link href="/forgetpassword">Forget Password</Link>
        </ul>
      </header>
      <main>{children}</main>
      <footer className=" w-full bg-slate-400 p-4 text-center">Footer</footer>
    </div>
  );
};

export default MyLayout;
