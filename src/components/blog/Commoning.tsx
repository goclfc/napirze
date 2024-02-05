import Footer from "../footer/Footer"
import Header from "../header/Header"
import img from '../../assets/images/content/commoning.jpeg'
import BlogImg from "./BlogImg"
import BlogHeader from "./BlogHeader"
const Commoning = () => {
  return (
    <div>
        <Header transparent={false} activeItem="blog" />
        <div className="mt-16 w-full">
            <BlogHeader link="../blog/floodplain" author={"Comming Soon"} minRead={0}  />
            <BlogImg img={img} />
          </div>
          <Footer activeItem="blog"/>
    </div>
  )
}
export default Commoning