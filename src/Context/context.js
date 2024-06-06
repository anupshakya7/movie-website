//context <API> (warehouse)
// Provider (delivery)
// Consumer / useContext hooks (you)
import React, { useContext } from "react";

const AppContext = React.createContext();

//We need to create a provider
const AppProvider = ({ children }) => {
  return <AppContext.Provider value={"thapa"}>{children}</AppContext.Provider>;
};

//global custom hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
