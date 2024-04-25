import { createContext, useState } from "react";

const EzenseContext = createContext();
const EzenseProvider = ({ children }) => {
  const [auxState, setauxState] = useState(322);

  return (
    <EzenseContext.Provider
      value={{
        setauxState,
        auxState
      }}
    >
      {children}
    </EzenseContext.Provider>
  );
};
export { EzenseProvider };
export default EzenseContext;
