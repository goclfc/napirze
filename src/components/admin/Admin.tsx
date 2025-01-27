
import { getPost } from "../../payments/requests";
import BlogFooter from "../blog/BlogFooter";
import BlogHeader from "../blog/BlogHeader";
import BlogImg from "../blog/BlogImg";
import BlogName from "../blog/BlogName";
import BlogText from "../blog/BlogText";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
type component = {
  id: number;
  post_id: number;
  order: number;
  title: string;
  text: string;
  images: { name: string }[];
  //<p><span style=\"color: rgb(0, 0, 0);\">\"The great historic barrier of the Caucasus Mountains rises up across the wide isthmus separating the Black and Caspian seas in the region where Europe and Asia converge.\"[1] For centuries, the melting snow from these mountains has molded the cultural landscape of the region.<\/span><\/p>",
};
type post = {
  id: number;
  main_title: string;
  title: string;
  min_read: 8;
  image: {
    name: string;
  };
  components: component[];
};
const POST_MOCK: post = {
  id: 0,
  main_title: "",
  title: "",
  min_read: 8,
  image: {
    name: "",
  },
  components: [],
};

const Admin = () => {
  const [post, setPost] = useState<post>(POST_MOCK);
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scrolling
    });
    getPost(id!, setPost);
  }, [id]);
  return (
    <div>
      <Header transparent={false} activeItem="blog" />
      <div className="mt-16 w-full">
        <BlogHeader
          link={parseFloat(id! )-1}
          author={post.title}
          minRead={post.min_read}
        />
        <BlogName name={post?.main_title} />
        {post?.components.length > 0 ?
          post.components.map((component) => (
            <>
              <BlogText text={component.text} />

              {component.images.length > 0 &&
                component.images.map((image) => <BlogImg img={image.name} />)}
            </>
          )):<div className="w-full flex text-center text-3xl h-screen"></div>}
        <BlogFooter
          nextUrl={parseFloat(id!) + 1}
          prevUrl={parseFloat(id!) - 1}
        />
      </div>
      <Footer activeItem="blog" />
    </div>
  );
};
export default Admin;
