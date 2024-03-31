import "reactjs-vimeo-player/dist/style.css";
import Loading from "../loading/Loading";
import Header from "../header/Header";
import Video from "../video/Video";
import { useEffect, useState } from "react";
import NapirzeRiverbank from "../sections/NapirzeRiverbank";
import floodplain from "../../assets/images/content/floodplain1.png";
import logopart from "../../assets/images/logo/logopart.png";
import NapirzeFloodplain from "../sections/NapirzeFloodplain";
import LandingDonate from "../donation/LandingDonate";
import Footer from "../footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import logoText from '../../assets/images/logo/logoText.png'
const Landing = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    if(location.search==="?success=fail"){
      navigate('fail')
    }else if(location.search === "?success=true" || location.search === "?success=1"){
      navigate("success")
    }
  },[location])
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[]);
  return (
    <div className="w-full h-full">
      <Loading isLoading={loading} />
      <Header />
      <Video id={897609006} />
      <NapirzeRiverbank />
      <div className="flex w-full h-auto">
        <img src={floodplain} alt="" className="w-full h-auto" />
      </div>
      <div className="flex w-full bg-napirzeDark justify-center items-center gap-4 p-6 sm:hidden ">
        <div className="w-40">
          <img src={logopart} alt="" className="w-full h-auto" />
        </div>
        <p className="text-white font-smooch-bold w-60 text-xl">
          One of our most cherished aspirations is to bring otters (Lutra lutra
          meridionalis) back to Rustavi. They are native to this region, but
          have disappeared due to widespread habitat destruction. Their presence
          will serve as an indicator of our success and demonstrate a huge
          ecological achievement.
        </p>
      </div>
      <div className="hidden sm:block">
        <img src={logoText} />
      </div>
      <NapirzeFloodplain />
      <LandingDonate setLoading={setLoading}/>
      <Footer />
    </div>
  );
};
export default Landing;
