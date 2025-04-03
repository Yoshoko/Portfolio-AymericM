import ProjetCard from "./ProjetCard";
import { devProjets, ProjetProps } from "./projetDetails";
import { useState } from "react";

const ProjetGrid = () => {

  return (
    <>
  

        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {devProjets.map((projet: ProjetProps) => (
            <ProjetCard
              id={projet.id}
              key={projet.id}
              name={projet.name}
              description={projet.description}
              technologies={projet.technologies}
              github={projet.github}
              image={projet.image}
              available={projet.available}
            />
          ))}
        </div>
      
    </>
  );
};

export default ProjetGrid;
