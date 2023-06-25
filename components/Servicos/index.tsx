import React from "react";
import { CardServices } from "./CardServices";

export const Servicos = () => {
  return (
    <section className="px-10 pb-20 lg:px-40 flex flex-col gap-10 lg:gap-14">
      <h1 className="text-4xl  lg:pb-5 lg:text-6xl gradient-text text-center">
        Nossos <strong>Serviços</strong>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <CardServices
          title="Desenvolvimento de Websites Responsivos"
          text="Criação de sites modernos e visualmente atraentes, adaptados para diferentes dispositivos."
        ></CardServices>
        <CardServices
          title="Otimização de Desempenho"
          text="Aprimoramento do desempenho de sites existentes para carregamento rápido e experiência do usuário aprimorada."
        ></CardServices>
        <CardServices
          title="Integração de Interfaces de Usuário: "
          text=" Criação de interfaces interativas e intuitivas para uma experiência agradável ao navegar nos sites."
        ></CardServices>
        <CardServices
          title="Manutenção e Suporte"
          text="Suporte técnico contínuo, atualizações de segurança e manutenção para manter os sites em pleno funcionamento."
        ></CardServices>
      </div>
    </section>
  );
};
