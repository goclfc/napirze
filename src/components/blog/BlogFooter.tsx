import { Link } from "react-router-dom";
import leftArrow from "../../assets/images/icons/Line arrow-left.png";
import rightArrow from "../../assets/images/icons/arrowRight.png";
type Props = {
  nextUrl: number;
  prevUrl: number;
};

const BlogFooter = (props: Props) => {
  return (
    <div className="flex w-full lg:w-2/3 justify-between mx-auto py-4">
      <Link to={`/blog/${props.prevUrl}`}>
        <div className="flex gap-4">
          <img src={leftArrow} alt="" /> Previous blog
        </div>
      </Link>
      <Link to={`/blog/${props.nextUrl}`}>
        <div className="flex gap-4">
          Next blog <img src={rightArrow} alt="" />{" "}
        </div>
      </Link>
    </div>
  );
};
export default BlogFooter;
