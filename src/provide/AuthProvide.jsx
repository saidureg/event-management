import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvide = ({ children }) => {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, createUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvide.propTypes = {
  children: PropTypes.node,
};

export default AuthProvide;
