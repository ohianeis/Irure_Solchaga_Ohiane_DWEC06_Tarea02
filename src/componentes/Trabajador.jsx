import React from "react";
import { useState } from "react";
import trash from "../trash.png";
import { useEffect } from "react";
const Trabajador = ({ trabajador, index, handleBorrar }) => {
  //estado para tener la url de la imagen del trabajador y modificar siempre que se monte componente con index y asi conseguir distintas fotos
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(`https://randomuser.me/api/portraits/men/${index}.jpg`);
  });

  //en el componenete se pasa evento onClick con handleBorrar obtenido de su componente padre Plantilla.jsx paso parámetro index (indice array)
  return (
    <article className="person">
      <img src={url} alt="icon" />
      <div>
        <h4>{trabajador.name} </h4>
        <p>{trabajador.email} </p>
        <p>{trabajador.phone} </p>
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={() => {
          handleBorrar(index);
        }}
      >
        <img src={trash} alt="icon" />
      </button>
    </article>
  );
};

export default Trabajador;
