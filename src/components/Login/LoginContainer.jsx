import { useEffect } from "react";
import Login from "./Login";

const LoginContainer = () => {
  useEffect(() => {
    document.title = "Log In | </script>";
  }, []);
  return <Login />;
};

export default LoginContainer;
