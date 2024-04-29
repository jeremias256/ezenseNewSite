import { createContext, useState } from "react";

const EzenseContext = createContext();
const EzenseProvider = ({ children }) => {
  const [classFixed, setClassFixed] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

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
