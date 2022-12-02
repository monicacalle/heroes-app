import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return;
  !logged ? children : <Navigate to="/marvel" />;
};
