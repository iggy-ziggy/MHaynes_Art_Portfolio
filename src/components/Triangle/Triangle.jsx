import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import triangleImage from '../../assets/triangle_bg.png'
import "./triangle.css";

const Triangle = () => {
  return (
    <Link to={'/home'}>
      <div className="cont">
        <div className="img_container">
            <img src={triangleImage} alt="" className="bg_image" />
            <div className="triangle_wrapper">
                <div className="triangle"></div>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default Triangle;
