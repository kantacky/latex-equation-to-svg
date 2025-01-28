import Form from "@/components/form";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-2xl font-bold text-center p-4">
          LaTeX Equation to SVG
        </h1>
      </header>
      <main className="container mx-auto p-4">
        <Form />
      </main>
      <footer>
        <div className="text-center p-4">
          &copy; { new Date().getFullYear() } <a href="https://kantacky.com/">Kanta Oikawa</a>
        </div>
      </footer>
    </>
  );
}
