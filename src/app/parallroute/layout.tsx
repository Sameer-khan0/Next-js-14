"use client"
import React from "react";

const MyLayout = ({
  children,
  newRoute,
  Route2,
}: {
  children: React.ReactNode;
  newRoute: React.ReactNode;
  Route2: React.ReactNode;
}) => {
  return (
    <div>
      <header className="w-full bg-slate-300 p-4 text-center">
        dashboard nav
      </header>
      <main>{children}</main>
      <div>{newRoute}</div>
      {Route2}
      <footer className="w-full bg-slate-400 p-4 text-center">Footer</footer>
    </div>
  );
};

export default MyLayout;
