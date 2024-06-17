import { createContext, useState } from "react";

const EzenseContext = createContext();
const EzenseProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [screenHeight, setScreenHeight] = useState(0);
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
