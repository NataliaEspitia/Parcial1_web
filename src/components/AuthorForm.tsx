"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthorForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newAuthor = { name, description };
    await fetch("http://127.0.0.1:8080/api/authors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAuthor),
    });
    router.push("/authors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Crear Autor</button>
    </form>
  );
}
