import napirze from "../../assets/images/content/napirze_2-cf22cbf2.jpg";
import img1 from "../../assets/images/content/napirze_story_1.jpeg";
import img2 from "../../assets/images/content/napirze_story_2.jpeg";
import img3 from "../../assets/images/content/napirze_story_3.jpeg";
import img4 from "../../assets/images/content/napirze_2-cf22cbf2.jpg";
import img5 from "../../assets/images/content/napirze_story_5.jpeg";
import img6 from "../../assets/images/content/napirze_story_6.jpeg";
import img7 from "../../assets/images/content/napirze_story_8.jpeg";
import img8 from "../../assets/images/content/napirze_story_7.jpeg";
import { getPost, redirectToPaymantPage } from "../../payments/requests";
import BlogFooter from "../blog/BlogFooter";
import BlogHeader from "../blog/BlogHeader";
import BlogImg from "../blog/BlogImg";
import BlogName from "../blog/BlogName";
import BlogText from "../blog/BlogText";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const text1 = `NAPIRZE in Georgian means "on the bank of the river"`;
const text2 = `"The great historic barrier of the Caucasus Mountains rises up across the wide isthmus separating the Black and Caspian seas in the region where Europe and Asia converge."[1] For centuries, the melting snow from these mountains has molded the cultural landscape of the region.`;
const text3 = `While every city and settlement in Georgia has historically thrived on the resources provided by its rivers, the modern era has seen a significant shift in the role of waters for contemporary society.`;
const text4 = `Presently, the majority of Georgia's population resides in proximity to rivers, with up to two million people inhabiting the Mtkvari River basin. Originating in Turkey, the Mtkvari River spans a total length of 1515 km, with ~331 km passing through Georgia draining up to twelve thousand major and minor tributaries before flowing into Azerbaijan and ultimately reaching the Caspian Sea.`;
const text5 = `Despite the vital role Mtkvari played in establishment of these cities and settlements, the advent of the industrial age resulted in a decline in mankind's ability to analyze the functional benefits of the water that led to the disappearance of the river culture.`;
const text6 = `In an effort to address this circumstance, we initiated a project with the objective of rejuvenating the connection between humanity and the river. Community-led restoration project began in the Rustavi's floodplain, situated at the city's core, easily accessible from any point in Rustavi within a brief timeframe. Regrettably, during the 1990s, social and economic challenges led to the deforestation of the floodplain, resulting in the destruction of local biodiversity. Despite the present abandonment of the area and considerable disruption to the ecosystem, distinctive landscape and urban planning in this location uniquely enable us to execute the project.`;
const text7 = `One of our most cherished aspirations is to re-attract otters(Lutra lutra meridionalis). They were native to this region but have disappeared due to habitat destruction. Their presence will serve as a remarkable indicator of our success and demonstrate a huge ecological achievement.`;
const text8 = `As of now, 133 bird species have been documented in the floodplain, suggesting that, despite the damage, the area possesses potential for regeneration and transformation into a natural area within the urban landscape. Our objective is to attain and subsequently sustain this transformation. In the initial phase of restoring biodiversity, our plan involves reforesting the area and assist natural regeneration.`;
const text9 = `Addressing water and soil pollution poses a significant challenge for the project due to its resource-intensive nature. Given that the area is abandoned, with only a small portion enclosed by fencing, residents frequently dispose of construction waste, a primary contributor to soil pollution. Moreover, the lack of a fence has led to seasonal grazing, hindering the regeneration process. The river faces contamination from illicitly connected sewage systems and household waste. It must be noted that water extracted from the pump in the floodplain irrigates up to 15,000 hectares of agricultural land in Georgia, and Mtkvari river is staying main source of drinking water for 70% of population of Azerbaijan, including the main cities - Baku, Ganja and Sumgait`;
const text10 = `At first glance, the floodplain's both banks seem easily reachable to the public because of its location. However, the absence of a trail system across the 300-hectare area complicates movement within the floodplain. Furthermore, the lack of protection in the area poses challenges in monitoring and controlling issues such as poaching and pollution.`;
const text11 = `To address the mentioned challenges, we have dedicated several years to research the Rustavi floodplain. This comprehensive investigation includes an exploration of its landscape history, the application of the Miyawaki method for afforestation, studies on restoration examples, the analysis of native vegetation, insights into the river cycle, planning trail network and more. Simultaneously, our efforts are focused on securing the essential resources for project implementation. To enhance awareness about the floodplain, we utilize the urban garden(NAPIRZE HQ), which, for the second consecutive year, has welcomed pupils, students, and like-minded individuals from various corners of the world, who share an interest in exploring the cultural landscape of Rustavi.`;
const text12 = `We are currently gearing up for spring 2024, during which we will start the initial afforestation process. Additionally, we will continue developing the trail network and kick off a crowdfunding campaign to support the installation of information boards and signs in the floodplain.`;
const text13 = `See you on the field!`;
type component = {
  id: number;
  post_id: number;
  order: number;
  title: string;
  text: string;
  image: { name: string };
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
const POST_MOCK:post ={
  id: 0,
  main_title: "",
  title: "",
  min_read: 8,
  image: {
    name: ""
  },
  components: []
}

const Admin = () => {
  const [post, setPost] = useState<post>(POST_MOCK);
  const currentBlogs = [
    {
      blogName: "NAPIRZE",
      blogMainImgUrl: napirze,
      link: "napirze",
      author: "Deme Gorgadze",
      minRead: 6,
      name: "NAPIRZE • ნაპირზე",
      article: [
        {
          text: [text1, text2],
          img: img1,
        },
        {
          text: [text3],
          img: img2,
        },
        {
          text: [text4, text5],
          img: img3,
        },
        {
          text: [text6],
          img: img4,
        },
        {
          text: [text7, text8],
          img: img5,
        },
        {
          text: [text9],
          img: img6,
        },
        {
          text: [text10],
          img: img7,
        },
        {
          text: [text11],
          img: img8,
        },
        {
          text: [text12, text13],
        },
      ],
      links: {
        nexturl: "../blog/floodplain",
        prevUrl: "../blog/commoning",
        externals: [
          {
            name: "Britanica",
            redirectTo: "https://www.britannica.com/place/Caucasus",
            urlToDisplay: "https://www.britannica.com/place/Caucasus",
          },
        ],
      },
    },
  ];
  useEffect(() => {
    getPost(id!, setPost);
  }, []);
  console.log(post, "posts");
  const { id } = useParams();
  console.log(id, "id");
  return (
    <div>
      <Header transparent={false} activeItem="blog" />
      <div className="mt-16 w-full">
        <BlogHeader
          link={currentBlogs[0].link}
          author={currentBlogs[0].author}
          minRead={currentBlogs[0].minRead}
        />
        <BlogName name={post?.main_title} />
        {post?.components.length > 0 &&
          post.components.map((component) => (
            <>
              <BlogText text={component.text} />

              {component.image?.name && <BlogImg img={component.image.name} />}
            </>
          ))}
        {currentBlogs[0].links.externals?.map((ext) => (
          <p className="text-blue-500 font-smooch-bold w-full md:w-1/2 mx-auto py-2 px-1 cursor-pointer">
            {ext.name}
            <span onClick={() => redirectToPaymantPage(ext.redirectTo)}>
              {ext.urlToDisplay}
            </span>
          </p>
        ))}

        <BlogFooter
          nextUrl={currentBlogs[0].links.nexturl}
          prevUrl={currentBlogs[0].links.prevUrl}
        />
      </div>
      <Footer activeItem="blog" />
    </div>
  );
};
export default Admin;
