import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";

// const initialState = {
//   logged: false,
// };

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = { id: "ABC", name };

    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name: name,
      },
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = { types: types.logout };
    dispatch();
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
