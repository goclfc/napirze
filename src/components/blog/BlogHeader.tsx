import person from "../../assets/images/icons/profile.png";
import time from "../../assets/images/icons/clock.png";
import arrowLeft from "../../assets/images/icons/Line arrow-left.png";
import { Link } from "react-router-dom";

type Props = {
  link: string;
  author: string;
  minRead: number;
};

const BlogHeader = (props: Props) => {
  return (
    <div className="flex justify-center relative w-full py-4">
      <div className="flex gap-1 lg:gap-4 font-smooch-bold text-sm lg:text-md items-center">
        <img src={person} alt="" /> <p>BY {props.author}</p>{" "}
        <img src={time} alt="" />
        <p>{props.minRead} Min read</p>
      </div>
      <Link to={props.link}>
        <div className="absolute top-4 left-0 lg:left-20 font-smooch-bold flex gap-0 lg:gap-2 text-xs items-center"><img src={arrowLeft} alt="" />Previous blog</div>
      </Link>
    </div>
  );
};
export default BlogHeader;
