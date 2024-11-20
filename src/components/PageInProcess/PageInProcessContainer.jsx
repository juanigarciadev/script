import { useEffect } from "react";
import PageInProcess from "./PageInProcess";

const PageInProcessContainer = () => {
  useEffect(() => {
    document.title = "Working... | DevBoost";
  }, []);
  return <PageInProcess />;
};

export default PageInProcessContainer;
