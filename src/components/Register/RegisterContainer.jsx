import { useEffect } from "react";
import Register from "./Register";

const RegisterContainer = () => {
  useEffect(() => {
    document.title = "Sign Up | </script>";
  }, []);
  return <Register />;
};

export default RegisterContainer;
