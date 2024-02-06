import Header from "../header/Header";
import Footer from "../footer/Footer";
import BlogItem from "./BlogItem";
import floodplain from "../../assets/images/content/floodplain-1943.jpg";
import napirze from '../../assets/images/content/napirze_2-cf22cbf2.jpeg'
import commoning from '../../assets/images/content/garage_1-6b43ea43.jpeg'

const Blog = () => {
  return (
    <div>
      <Header transparent={false} activeItem="blog" />
      <div className="mt-16 w-full flex p-0 lg:p-2 flex-wrap">
        <div className="w-full md:w-1/2 p-0 lg:p-2">
          <BlogItem
            img={napirze}
            description="NAPIRZE"
            link="napirze"
          />
        </div>
        <div className="w-full md:w-1/2 p-0 lg:p-2">
          <BlogItem
            img={floodplain}
            description="HISTORY OF RUSTAVI FLOODPLAIN"
            link="floodplain"
          />
        </div>
        <div className="w-full md:w-1/2  p-0 lg:p-2">
          <BlogItem
            img={commoning}
            description="COMMONING"
            link="../blog"
          />
        </div>
      </div>
      <Footer activeItem="blog" />
    </div>
  );
};
export default Blog;
