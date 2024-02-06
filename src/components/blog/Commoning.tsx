import Footer from "../footer/Footer";
import Header from "../header/Header";
import img from "../../assets/images/content/commoning.jpeg";
import BlogImg from "./BlogImg";
import arrowLeft from "../../assets/images/icons/Line arrow-left.png";

import { Link } from "react-router-dom";
import BlogFooter from "./BlogFooter";
const Commoning = () => {
  return (
    <div>
      <Header transparent={false} activeItem="blog" />
      <div className="mt-16 w-full">
        <div className="flex justify-center relative w-full py-4">
          <div className="flex gap-4 font-smooch-bold">
            <p>Coming soon</p>
          </div>
          <Link to="../blog/floodplain">
            <div className="absolute top-4 left-0 lg:left-20 font-smooch-bold flex gap-2 text-xs items-center">
              <img src={arrowLeft} alt="" />
              Previous blog
            </div>
          </Link>
        </div>
        <BlogImg img={img} />
        <BlogFooter nextUrl="../blog/napirze" prevUrl="../blog/floodplain" />
      </div>
      <Footer activeItem="blog" />
    </div>
  );
};
export default Commoning;
