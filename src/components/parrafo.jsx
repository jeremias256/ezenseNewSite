import React from "react";
import { parrafos } from "../constants";
const Parrafo = (title = "titulo") => {
  return (
    <>
      <h2 className="titulo grey-black">{title}</h2>
      <h3 className="text-md-lato grey-black">{parrafos[0].title}</h3>
      <p>{parrafos[0].text}</p>
    </>
  );
};

export default Parrafo;
