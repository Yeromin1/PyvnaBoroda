import { createContext, useState } from "react";

export const authContext = createContext();

const Authorization = ({ children }) => {
  const [user, setUser] = useState("Petro");
  const logins = (newUser) => setUser(newUser);
  const logout = () => setUser("");

  const contextValue = {
    user,
    logins,
    logout,
  };
  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default Authorization;
