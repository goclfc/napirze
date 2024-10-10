import Header from "../header/Header";
import Footer from "../footer/Footer";
import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";
import { getPosts } from "../../payments/requests";

export type blogs_type = {
  id: number;
  main_title: string;
  title: string;
  min_read: number;
  image: {
    id: number;
    name: string;
  };
};
const Blog = () => {
  const [blogs, setBlogs] = useState<blogs_type[]>([]);
  useEffect(()=>{
    getPosts(setBlogs)
  },[]) 
  console.log(blogs,'blogs')
  return (
    <div>
      <Header transparent={false} activeItem="blog" />
      <div className="mt-16 w-full flex p-0 lg:p-2 flex-wrap">
        {blogs?.length > 0 && blogs?.map(blog => (

        <div className="w-full md:w-1/2 p-0 lg:p-2">
          <BlogItem img={blog.image.name} description={blog.main_title} link={blog.id.toString()} />
        </div>
        ))}
      </div>
      <Footer activeItem="blog" />
    </div>
  );
};
export default Blog;
