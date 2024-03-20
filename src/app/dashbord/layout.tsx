"use client"
import React from "react";

const MyLayout = ({ children, users, notification, revenue }: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
}) => {
  return (
    <>
      <header className="w-full bg-slate-300 p-4 text-center">
        dashboard nav
      </header>
      {children}
      {users}
      {/* {notification} */}
      {/* {revenue} */}
      <footer className="w-full bg-slate-400 p-4 text-center">Footer</footer>
    </>
  );
};

export default MyLayout;
