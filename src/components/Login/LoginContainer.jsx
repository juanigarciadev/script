import { useEffect } from "react";
import Login from "./Login";

const LoginContainer = () => {
  useEffect(() => {
    document.title = "Log In | BEYOND IMAGINATION";
  }, []);
  return <Login />;
};

export default LoginContainer;
