import React from "react";

interface Service {
  title: string;
  text: string;
}

export const CardService = ({ title, text }: Service) => {
  return (
    <div className="card-service m-auto">
      <div className="align">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};
