import { useMemo } from "react";
import HTMLFlipBook from "react-pageflip";

const pages = [
  {
    title: "El Cura: Cuentos & Poesías",
    content: "Bienvenido a la experiencia de lectura."
  },
  {
    title: "Capítulo 1",
    content:
      "Un poema breve para iniciar el viaje literario. Las palabras se deslizan como hojas al viento."
  },
  {
    title: "Capítulo 2",
    content:
      "Cada página es un paso más en el universo de El Cura, con ritmo y pausas como en un libro real."
  },
  {
    title: "Gracias",
    content: "Este es un demo del lector con efecto page flip usando react-pageflip."
  }
];

export default function App() {
  const bookPages = useMemo(
    () =>
      pages.map((page, index) => (
        <div key={page.title} className="page">
          <div className="page__content">
            <span className="page__number">{index + 1}</span>
            <h2>{page.title}</h2>
            <p>{page.content}</p>
          </div>
        </div>
      )),
    []
  );

  return (
    <main className="reader">
      <header className="reader__header">
        <h1>El Cura — Lector demo</h1>
        <p>Ejemplo funcional del efecto libro real para la Fase 1.</p>
      </header>
      <div className="reader__book">
        <HTMLFlipBook
          width={360}
          height={480}
          size="stretch"
          minWidth={280}
          maxWidth={520}
          minHeight={400}
          maxHeight={680}
          maxShadowOpacity={0.4}
          showCover
          mobileScrollSupport
        >
          {bookPages}
        </HTMLFlipBook>
      </div>
    </main>
  );
}
