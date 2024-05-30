import { createContext, useState } from "react";

const EzenseContext = createContext();
const EzenseProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(window.scrollY); //eje y
  const [screenHeight, setScreenHeight] = useState(window.innerHeight); //height pantalla
  const [acumuladorFrame, setAcumuladorFrame] = useState(0);

  return (
    <EzenseContext.Provider
      value={{
        scrollY,
        setScrollY,
        screenHeight,
        setScreenHeight,
        acumuladorFrame,
        setAcumuladorFrame,
      }}
    >
      {children}
    </EzenseContext.Provider>
  );
};
export { EzenseProvider };
export default EzenseContext;
