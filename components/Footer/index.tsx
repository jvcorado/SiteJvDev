import React from "react";
import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
  return (
    <footer className="px-10 lg:px-40">
      <div className="py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <p className="text-3xl mb-10  gradient-text font-bold lg:mb-0 text-left">
          Construindo o futuro digital <br /> que você merece, hoje!
        </p>
        <div className="text-white flex flex-col gap-5">
          <p className="text-3xl gradient-text font-bold ">Fale Conosco</p>
          <a href="#" className="lg:text-right gradient-text">
            (11) 9 5447-7659
          </a>
          <a href="#" className="gradient-text">
            jhonisilva545@gmail.com
          </a>
        </div>
      </div>
      <hr className="text-gray-950" />
      <div className="py-5 flex flex-col lg:flex-row items-center lg:justify-between gradient-text">
        <p className="text-lg gradient-text">Copyright Ⓒ 2023 JotaTech.</p>
        <ul className="flex items-center gap-10">
          <SocialMedia></SocialMedia>
        </ul>
      </div>
    </footer>
  );
};
