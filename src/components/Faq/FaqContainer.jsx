import React, { useEffect } from "react";
import Faq from "./Faq";

const FaqContainer = () => {
  useEffect(() => {
    document.title = "FAQS | DevBoost";
  }, []);
  return <Faq />;
};

export default FaqContainer;
