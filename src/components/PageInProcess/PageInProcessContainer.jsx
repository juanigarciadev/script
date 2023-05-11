import { useEffect } from "react";
import PageInProcess from "./PageInProcess";

const PageInProcessContainer = () => {
  useEffect(() => {
    document.title = "Working... | BEYOND IMAGINATION";
  }, []);
  return <PageInProcess />;
};

export default PageInProcessContainer;
