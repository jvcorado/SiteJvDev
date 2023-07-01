import React from "react";
import Teclado from "../../public/teclado.png";
import Image from "next/image";
import { Animacao } from "../Animacao";

export const Sobre = () => {
  return (
    <section className="px-10 pb-32 lg:px-40 lg:pt-20 lg:pb-60 flex flex-col lg:flex-row-reverse items-center justify-between gap-16">
      <div className="gradient-text lg:text-right lg:flex-1">
        <h1 className="text-3xl lg:text-6xl ">
          Como <strong>Web Developer</strong>
        </h1>
        <p className="mt-4 text-2xl">
          Tenho o poder de criar sites incríveis que vão além das expectativas.
          Com domínio em React.js, Next.js, Node.js e TypeScript, transformo
          conceitos em realidade visualmente deslumbrante. Sua marca merece um
          site envolvente e cativante, capaz de conquistar clientes e
          impulsionar resultados.
        </p>
      </div>
      <div className="">
        <Animacao></Animacao>
      </div>
    </section>
  );
};
