import { React, useState } from "react";

import { AuthentificationContext } from "./authentification";
import App from "../App";

const AppProvider = () => {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <AuthentificationContext.Provider
      value={{ authenticated, setAuthenticated }}
    >
      <App />
    </AuthentificationContext.Provider>
  );
};

export default AppProvider;
