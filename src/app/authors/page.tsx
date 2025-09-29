import AuthorList from "@/components/AuthorList";

export default function AuthorsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8" justify-center p-24>Lista de Autores</h1> 
      <AuthorList />{""}
    </div>
  );
}
