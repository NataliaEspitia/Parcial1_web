import AuthorForm from "@/components/AuthorForm";

export default function CreateAuthorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Crear Autor</h1>

      <AuthorForm />
    </div>
  );
}
