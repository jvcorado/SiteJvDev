import React from "react";

interface Services {
  title: string;
  text: string;
}

export const CardServices = ({ title, text }: Services) => {
  return (
    <div className="bg-card m-auto lg:w-10/12 rounded-xl flex flex-col items-start px-5 lg:px-10 py-5 text-slate-50">
      <h1 className="text-lg lg:text-xl font-semibold">{title}</h1>
      <p className="text-sm lg:text-base">{text}</p>
    </div>
  );
};
