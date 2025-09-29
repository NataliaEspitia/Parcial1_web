"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthorForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newAuthor = { name, description, image, birthDate };
    await fetch("http://127.0.0.1:8080/api/authors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAuthor),
    });
    router.push("/authors");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium">
            Nombre:
            </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label>Descripción:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label>Imagen (URL):</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label>Fecha de Nacimiento:</label>
        <input
            type="date" 
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
        />
      </div>
      <button type="submit" className="bg-pink-700 text-black font-bold py-2 px-6 rounded hover:bg-pink-500 disabled:bg-gray-300">Crear Autor</button>
    </form>
  );
}
