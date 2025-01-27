import Header from "../header/Header";
import Footer from "../footer/Footer";
import covernew from "../../assets/images/content/aboutusnew.png";
import aboutUs1 from "../../assets/images/content/left.jpg";
import aboutUs2 from "../../assets/images/content/right.jpg";
import aboutUs3 from "../../assets/images/content/aboutUs3.png";
import { redirectToPaymantPage } from "../../payments/requests";

const AboutUs = () => {
  return (
    <div>
      <Header transparent={false} activeItem="aboutUs" />
      <div className="mt-16">
        <div className="w-full">
          <img src={covernew} alt="" />
        </div>
        <div className="bg-white w-full">
          <div className="text p-8">
            <h2 className="font-smooch-bold font-extrabold text-[46px] text-center">
              Our Story
            </h2>
            <p className="font-smooch-bold w-full lg:w-1/2 mx-auto pb-6 text-justify">
              Napirze is an environmental and social organisation based in the
              industrial city of Rustavi, Georgia. We aim to improve local
              environmental conditions and reshape people's relationship to
              their environment through two main projects: rewilding an
              abandoned floodplain in the city centre, and establishing a
              successful model for textile waste management.
            </p>
            <p className="font-smooch-bold w-full lg:w-1/2 mx-auto text-justify">
              Napirze was established in 2022 with the mission of reforesting
              and rewilding an abandoned floodplain in the city centre; a vital
              mission in a city suffering from some of the worst air pollution
              in the country. That work is well underway: since launching our
              project, we’ve studied and planned the site, cleared trails,
              planted over 2,000 trees, and welcomed local and international
              visitors and volunteers. We’re now continuing to work on reviving
              the ecosystem, with more reforestation as well as the
              establishment of a waste barrier on the river. Our vision also
              extends beyond the floodplain, as our work has always been aimed
              at bringing about wider changes in both Rustavi and the region.
              From our early days of collecting recycling at our plant nursery
              and working with schools on environmental education, we’ve sought
              to make our city more sustainable and environmentally conscious,
              and set a precedent for others in the region who want to do the
              same. In 2025, we’ll be launching a larger project aimed at
              pioneering methods for reducing and reusing textile waste and
              promoting a more circular economy. In everything we do, we’re
              committed to fostering a new identity for Rustavi, bringing about
              local and larger-scale cultural change, and improving the
              environment for all.
            </p>
            <h2 className="font-smooch-bold font-extrabold text-[46px] text-center">
              Media
            </h2>
            <p className="font-smooch-bold w-full lg:w-1/2 mx-auto pb-6 text-justify">
              <span onClick={()=>redirectToPaymantPage("https://oc-media.org/a-forest-in-the-city-centre-rewilding-rustavi/")} className="text-blue-500 cursor-pointer hover:text-blue-700">A forest in the city centre: rewilding Rustavi</span>
            </p>
            <p className="font-smooch-bold w-full lg:w-1/2 mx-auto pb-6 text-justify">
              <span onClick={()=>redirectToPaymantPage("https://www.youtube.com/watch?si=UBtEOHx90CKQYg_c&v=oaEIxw2xQ7Y&feature=youtu.be")} className="text-blue-500 cursor-pointer hover:text-blue-700" >Floodplain in the middle of Rustavi</span>
            </p>
            <p className="font-smooch-bold w-full lg:w-1/2 mx-auto pb-6 text-justify">
              <span onClick={()=>redirectToPaymantPage("https://ruderal.substack.com/p/from-garage-to-greenhouse-a-garden")} className="text-blue-500 cursor-pointer hover:text-blue-700" >From Garage to Greenhouse</span>
            </p>
            <p className="font-smooch-bold w-full lg:w-1/2 mx-auto pb-6 text-justify">
              <span onClick={()=>redirectToPaymantPage("https://ruderal.com/news/napirze-drawing-a-floodplain")} className="text-blue-500 cursor-pointer hover:text-blue-700" >Napirze: Drawing a Floodplain</span>
            </p>
          </div>
          <div className="images flex gap-4 flex-col p-2 lg:p-6">
            <div className="flex gap-4">
              <div className="w-[68.2%]">
                <img src={aboutUs1} alt="" className="w-full h-auto" />
              </div>
              <div className="w-[31%]">
                <img src={aboutUs2} alt="" className="w-full h-auto" />
              </div>
            </div>
            <div className="w-full">
              <img src={aboutUs3} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <Footer activeItem="aboutUs" />
    </div>
  );
};

export default AboutUs;
