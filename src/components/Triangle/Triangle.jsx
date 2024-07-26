import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import triangleImage from '../../assets/triangle_bg_light.png'
import "./triangle2.css";

const Triangle = () => {
  return (
    <Link to={'/home'}>
      <div className="triangle--container">
      <p className="enter--text">ENTER</p>
      <div className="triangle_1"></div>
      <div className="triangle_2"></div>
      <Image src={triangleImage} />
    </div>
    </Link>
  );
};

export default Triangle;
