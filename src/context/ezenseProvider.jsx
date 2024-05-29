import { createContext, useState } from "react";

const EzenseContext = createContext();
const EzenseProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0); //eje y
  const [screenHeight, setScreenHeight] = useState(window.innerHeight); //height pantalla
  const [contentHeight, setContentHeight] = useState(0); //medidas del contenedor del banner

  return (
    <EzenseContext.Provider
      value={{
        scrollY,
        setScrollY,
        screenHeight,
        setScreenHeight,
        contentHeight,
        setContentHeight,
      }}
    >
      {children}
    </EzenseContext.Provider>
  );
};
export { EzenseProvider };
export default EzenseContext;
