"use client";
import { useEffect, useState } from "react";
import { Author } from "../../.next/types/Author";
import Image from 'next/image'; 


export default function AuthorList() {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/authors")
      .then((res) => res.json())
      .then((data) => setAuthors(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`http://127.0.0.1:8080/api/authors/${id}`, {
      method: "DELETE",
    });
    setAuthors(authors.filter((a) => a.id !== id));
  };

  return (
    <div>
      <h1></h1>
      <ul>
        {authors.map((a) => (
          <li key={a.id}>
            <div>
              <strong>{a.name}</strong> - {a.description} - {a.birthDate}
              <img src={a.image} alt={a.name} style={{ width: "100px", height: "auto" }} />
            </div>
            
            
            <button
              onClick={() => handleDelete(a.id)}
              style={{ marginLeft: "2rem", color: "red" }}
            >
              Eliminar de la lista
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
