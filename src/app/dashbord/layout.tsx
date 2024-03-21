import React from "react";

const MyLayout = ({
  children,
  users,
  notification,
  revenue,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
}) => {
  return (
    <>
      <header className="bg-gray-800 text-white text-center py-4 shadow-md">
        Dashboard Navigation
      </header>
      <div className="container mx-auto mt-8 mb-8 px-4">
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">{revenue}</div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>{users}</div>
              <div>{notification}</div>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-gray-800 text-white text-center py-4 shadow-md">
        Footer
      </footer>
    </>
  );
};

export default MyLayout;
