"use client";
import { useEffect, useState } from "react";
import { Author } from "../../.next/types/Author";

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
      <h1>Lista de Autores</h1>
      <ul>
        {authors.map((a) => (
          <li key={a.id}>
            <strong>{a.name}</strong> - {a.description}
            <button
              onClick={() => handleDelete(a.id)}
              style={{ marginLeft: "1rem", color: "red" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
