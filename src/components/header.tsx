import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image'; 

const Header = () => {
  return (
    <header className="bg-pink-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {}
        <Link href="/" className="flex items-center space-x-2">
          {}
          <Image
            src="/logo.png"
            alt="App's logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">Bookstore Preparcial</span>
        </Link>
        <nav>
          {}
          <Link href="/" className="px-3 hover:text-gray-300">Inicio</Link>
          <Link href="/authors" className="px-3 hover:text-gray-300">Lista de Autores</Link>
          <Link href="/authors/create" className="px-3 hover:text-gray-300">Crear Autor</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;