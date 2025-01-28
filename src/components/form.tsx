'use client';

import { useState } from 'react';
import TeXToSVG from 'tex-to-svg';

export default function Form() {
  const [equation, setEquation] = useState("E=mc^2");

  const downloadSvgFile = () => {
    const svgString = TeXToSVG(equation);
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "equation.svg";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full grid gap-8 justify-items-center">
        <textarea
          className="border border-gray-300 p-2 w-full h-80 resize-none"
          id="equation"
          name="equation"
          placeholder="E=mc^2"
          value={equation}
          onChange={(e) => {
            setEquation(e.target.value);
          }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: TeXToSVG(equation) }}
        style={{ display: "inline-block" }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={downloadSvgFile}
      >
        Download SVG
      </button>
    </div>
  );
}
