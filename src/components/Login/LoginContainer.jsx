import { useEffect } from "react";
import Login from "./Login";

const LoginContainer = () => {
  useEffect(() => {
    document.title = "Log In | DevBoost";
  }, []);
  return <Login />;
};

export default LoginContainer;
