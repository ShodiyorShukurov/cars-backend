import React from "react";
import PropTypes from "prop-types";
import { Provider as CarsProvider } from "./cars";

const Context = React.createContext();

const Provider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <CarsProvider>{children}</CarsProvider>
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
