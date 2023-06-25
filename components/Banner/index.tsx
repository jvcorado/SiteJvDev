import React from "react";
import ImgBanner from "../../public/img-banner.png";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className=" min-h-screen px-10 py-10 lg:px-40 lg:py-20 flex items-center justify-between">
      {/*   <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg> */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="text-white flex flex-col flex-1 gap-6">
          <h1 className="text-6xl lg:text-7xl gradient-text tracking-in-expand-fwd-top pb-5">
            Inovação e <strong className="">criatividade</strong> em cada pixel,
            seu site do amanhã,<strong> hoje!</strong>
          </h1>
          <p className="text-2xl gradient-text">
            Comprometidos com soluções inovadoras, criamos sites impactantes,
            gerando resultados extraordinários, destacando negócios com
            tecnologia e design atualizados.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-end movendo">
          <Image src={ImgBanner} alt="" className="movendo"></Image>
        </div>
      </div>
    </section>
  );
};
