import { Link } from "react-router-dom";

const SelectType = () => {
  return (
    <div className="custom-container1">
      <Link to="/tech" className="custom-button1">
        Technical Interview
      </Link>
      <Link to="/behavior" className="custom-button1">
        Behavior Interview
      </Link>
    </div>
  );
};

export default SelectType;
