import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllData } from "../data/pedirDatos";
import Trabajador from "./Trabajador";
import Titulo from "./Titulo";

/*estado con objeto trabajadores obtenido dentro del useEffect llamando a la función obtenerDatos que maneja la respuesta de getAllData obtenido de pedirDatos.js 
en el map se pasa el trabajador como prop a Trabajador.jsx y también el index del map*/
const Plantilla = () => {
  const [trabajadores, setTrabajadores] = useState([]);
  const [cargado, setCargado] = useState(false);
  const [error, setError] = useState("");

  const obtenerDatos = async () => {
    try {
      const data = await getAllData();
      setTrabajadores(data);
      setCargado(true);
    } catch (error) {
      setError("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  //evento que maneja el borrado del personal de plantilla, se le pasa como prop a Trabajador.jsx
  const handleBorrar = (index) => {
    console.log(index);
    //uso de propagacion para desestructurar objeto, obtener así array antes del index indicado mas array despues index indicado
    const nuevoArray = [
      ...trabajadores.slice(0, index),
      ...trabajadores.slice(index + 1),
    ];
    setTrabajadores(nuevoArray);
  };

  return (
    <section className="container">
      {error && <p>{error}</p>}
      {cargado && trabajadores && trabajadores.length > 0 && (
        <>
          <Titulo cantidad={trabajadores.length} />
          {trabajadores.map((trabajador, index) => (
            <Trabajador
              key={trabajador.id}
              trabajador={trabajador}
              index={index}
              handleBorrar={handleBorrar}
            />
          ))}
        </>
      )}
      {cargado && trabajadores.length == 0 && (
        <Titulo cantidad={trabajadores.length} />
      )}
    </section>
  );
};

export default Plantilla;
