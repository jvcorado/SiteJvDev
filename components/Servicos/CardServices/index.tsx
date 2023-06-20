import React from "react";

interface Services {
  title: string;
  text: string;
}

export const CardServices = ({ title, text }: Services) => {
  return (
    <div className="bg-card m-auto lg:w-9/12 rounded-xl flex flex-col items-start px-5 lg:px-10 py-5 text-white">
      <h1 className="text-2xl">{title}</h1>
      <p>{text}</p>
    </div>
  );
};
