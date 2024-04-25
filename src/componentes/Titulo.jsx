import React from "react";
//componente para título, recibe prop con la cantidad de Plantilla.jsx
const Titulo = ({ cantidad }) => {
  return (
    <>
      <h3>Tenemos una plantilla de {cantidad} trabajadores</h3>
    </>
  );
};

export default Titulo;
