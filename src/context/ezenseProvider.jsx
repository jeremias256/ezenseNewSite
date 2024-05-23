import { createContext, useState } from "react";

const EzenseContext = createContext();
const EzenseProvider = ({ children }) => {
  const [classFixed, setClassFixed] = useState(true); //navbar fixed
  const [scrollY, setScrollY] = useState(0); //eje y
  const [screenHeight, setScreenHeight] = useState(window.innerHeight); //height pantalla

  return (
    <EzenseContext.Provider
      value={{
        classFixed,
        setClassFixed,
        scrollY,
        setScrollY,
        screenHeight,
        setScreenHeight,
      }}
    >
      {children}
    </EzenseContext.Provider>
  );
};
export { EzenseProvider };
export default EzenseContext;
