import { useEffect } from "react";
import PageInProcess from "./PageInProcess";

const PageInProcessContainer = () => {
  useEffect(() => {
    document.title = "Working... | </script>";
  }, []);
  return <PageInProcess />;
};

export default PageInProcessContainer;
