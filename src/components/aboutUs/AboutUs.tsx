import Header from "../header/Header";
import Footer from "../footer/Footer";
import cover from "../../assets/images/content/aboutUsCover.png";
import aboutUs1 from "../../assets/images/content/aboutUs1.png";
import aboutUs2 from "../../assets/images/content/aboutUs2.png";
import aboutUs3 from "../../assets/images/content/aboutUs3.png";

const AboutUs = () => {
  return (
    <div>
      <Header transparent={false} activeItem="aboutUs" />
      <div className="mt-16">
        <div className="w-full">
          <img src={cover} alt="" />
        </div>
        <div className="bg-white w-full">
          <div className="text p-8">
            <h2 className="font-smooch-bold font-extrabold text-[46px] text-center">
              Our Story
            </h2>
            <p className="font-smooch-bold w-full lg:w-1/2 mx-auto">
              Our reforestation work has diverse roots, with our team drawing on
              experience from a variety of backgrounds. We first started our
              environmental activism with an art project called ‘Disruption’,
              beginning in the spring of 2019. The project gave electronic
              musicians a platform in the city, with footage of Rustavi’s
              industrial zones raising awareness of the city’s debilitating
              pollution. A year later, we launched the #GROWYOUROWNFOREST
              campaign, with the aim of replacing an old garage with a nursery,
              where Himalayan cedar seeds from local parks would be nurtured for
              planting. In the first spring, we raised over 350 baby cedars in a
              private yard, and went on to build the nursery to expand our
              capacity to raise seedlings. This became the start of Rustavi’s
              first urban garden: Data’s Ezo. The garden is a space where
              Rustavi’s community and guests come together to share knowledge,
              raise environmental awareness, collect plastic waste for
              recycling, and, quite literally, planting the seeds of the
              floodplain’s reforestation. We are committed to fostering a new
              identity for Rustavi, bringing about local and larger-scale
              cultural change, and improving the environment for the community .
            </p>
          </div>
          <div className="images flex gap-4 flex-col p-2 lg:p-6">
            <div className="flex gap-4">
              <div className="w-[68.2%]">
                <img src={aboutUs1} alt="" className="w-full h-auto"/>
              </div>
              <div className="w-[31%]">
                <img src={aboutUs2} alt="" className="w-full h-auto"/>
              </div>
            </div>
            <div className="w-full">
              <img src={aboutUs3} alt="" className="w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
      <Footer activeItem="aboutUs" />
    </div>
  );
};

export default AboutUs;
