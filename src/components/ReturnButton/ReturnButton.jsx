import { BsChevronLeft } from "react-icons/bs";

const ReturnButton = ({ navigate }) => {
  return (
    <button onClick={() => navigate(-1)} className="returnButton btn">
      <BsChevronLeft />
      Return to previous page
    </button>
  );
};

export default ReturnButton;
