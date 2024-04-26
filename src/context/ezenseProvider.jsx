import { createContext, useState } from "react";

const EzenseContext = createContext();
const EzenseProvider = ({ children }) => {
  const [classFixed, setClassFixed] = useState(true); //mostrar o no el banner
  const [scrollY, setScrollY] = useState(0); //eje y
  const [screenHeight, setScreenHeight] = useState(window.innerHeight); //px h pantalla
  const [heightX5, setHeightX5] = useState(window.innerHeight / 5); //px h pantalla

  return (
    <EzenseContext.Provider
      value={{
        classFixed,
        setClassFixed,
        scrollY,
        setScrollY,
        screenHeight,
        setScreenHeight,
        heightX5,
        setHeightX5,
      }}
    >
      {children}
    </EzenseContext.Provider>
  );
};
export { EzenseProvider };
export default EzenseContext;
