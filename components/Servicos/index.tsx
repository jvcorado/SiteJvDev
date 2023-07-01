import React from "react";
import { CardService } from "./CardService";

const services = [
  {
    title: "Desenvolvimento de Websites Responsivos",
    text: "Criação de sites modernos e visualmente atraentes, adaptados para diferentes dispositivos.",
  },
  {
    title: "Otimização de Desempenho",
    text: "Aprimoramento do desempenho de sites existentes para carregamento rápido e experiência do usuário aprimorada.",
  },
  {
    title: "Integração de Interfaces de Usuário",
    text: "Criação de interfaces interativas e intuitivas para uma experiência agradável ao navegar nos sites.",
  },
  {
    title: "Manutenção e Suporte",
    text: "Suporte técnico contínuo, atualizações de segurança e manutenção para manter os sites em pleno funcionamento.",
  },
];

export const Servicos = () => {
  return (
    <section className="px-10 pb-20 lg:px-40 flex flex-col gap-10 lg:gap-14">
      <h1 className="text-4xl  lg:pb-5 lg:text-6xl gradient-text text-center">
        Nossos <strong>Serviços</strong>
      </h1>
      <div className="flex flex-col lg:flex-row gap-3">
        {services.map((item, index) => (
          <CardService key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
};
