import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            Veterinaria Cuidado Animal
          </h1>
        </Link>
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
