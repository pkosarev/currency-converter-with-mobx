import { createContext, useContext } from "react";
import converterStore from "./converterStore.js";

const store = {
  converterStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};