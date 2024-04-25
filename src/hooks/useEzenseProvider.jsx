import { useContext } from "react";
import EzenseContext from "../context/ezenseProvider";

const useEzense = () => {
  return useContext(EzenseContext);
};
export default useEzense;
