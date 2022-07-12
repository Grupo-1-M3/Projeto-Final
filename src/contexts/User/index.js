import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@TrashNoFood:user"))
  );
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem("@TrashNoFood:token"))
  );

  const signIn = (data, history, toast) => {
    api
      .post("/login", data)
      .then((response) => {
        setUser(response.data);
        setAccessToken(response.data.accessToken);

        localStorage.setItem(
          "@TrashNoFood:user",
          JSON.stringify(response.data.user)
        );
        localStorage.setItem(
          "@TrashNoFood:token",
          JSON.stringify(response.data.accessToken)
        );
        toast.success("Login feito");

        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Ops! algo não está certo");
      });
  };
  return (
    <UserContext.Provider value={{ user, accessToken, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
