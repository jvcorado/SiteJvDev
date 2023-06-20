import React from "react";
import { CardServices } from "./CardServices";

export const Servicos = () => {
  return (
    <section className="px-10 pb-20 lg:px-40 flex flex-col gap-14">
      <h1 className="text-4xl pb-5 lg:text-6xl gradient-text text-center">
        Nossos <strong>Serviços</strong>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <CardServices
          title="Title"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, error."
        ></CardServices>
        <CardServices
          title="Title"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, error."
        ></CardServices>
        <CardServices
          title="Title"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, error."
        ></CardServices>
        <CardServices
          title="Title"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, error."
        ></CardServices>
        <CardServices
          title="Title"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, error."
        ></CardServices>
        <CardServices
          title="Title"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, error."
        ></CardServices>
      </div>
    </section>
  );
};
