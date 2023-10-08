import { Link } from "react-router-dom";
import "./inType.scss";

const InType = () => {
  return (
    <div className="custom-container">
      <div className="custom-button">General</div>
      <div className="custom-button">Product Management</div>
      <div className="custom-button">Marketing</div>
      <div className="custom-button">Finance</div>
      <div className="custom-button">Consulting</div>
      <Link to="/type" className="custom-button">
        Software Engineering
      </Link>
    </div>
  );
};

export default InType;
