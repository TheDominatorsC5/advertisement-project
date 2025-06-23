import React from "react";

const images = [
    // art and paintings
  "https://i.pinimg.com/736x/bd/b2/43/bdb2430fe928d96d98c5d352efe59545.jpg",
//   accessories
  "https://i.pinimg.com/736x/dc/c9/d6/dcc9d653b3e0002221f9a66efe06c150.jpg",
//   home decor
  "https://i.pinimg.com/736x/0b/2d/3a/0b2d3aa1225a211cbe88e6fbf15f720c.jpg",
//   pottery
  "https://i.pinimg.com/736x/55/0e/a1/550ea17d3effebd48abb6667989418f0.jpg",
//   textiles
  "https://i.pinimg.com/736x/2b/6c/83/2b6c834cb67cbc76cca3532fd26bebf0.jpg",
//   wooden pieces
  "https://i.pinimg.com/736x/3d/24/12/3d2412356a95917d43c6af04c2dde03f.jpg"

];

export default function Carousel3D() {
  return (
    <div className="perspective-[1000px] w-[200px] h-[200px] mx-auto mt-10 relative">
      <div className="w-[70%] h-[50%] absolute animate-rotate-slow [transform-style:preserve-3d] ">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`art-${index}`}
            className={`absolute w-[240px] h-[160px] left-[30px] top-[70px] object-center rounded-xl shadow-lg
              carousel-img-${index + 1}
            `}
          />
        ))}
      </div>
    </div>
  );
}
   