import { Link } from "react-router-dom";
import diagram1 from "../../assets/images/content/diagram1.png";
import diagram2 from "../../assets/images/content/diagram2.png";
import diagram3 from "../../assets/images/content/diagram3.png";

const NapirzeRiverbank = () => {
  return (
    <div className="w-full bg-napirzeGreen p-2">
      <div className="images flex justify-center gap-4 pt-10">
        <div className="flex w-1/3 max-w-[200px]">
          <img src={diagram1} alt="" className="w-full h-auto" />
        </div>
        <div className="flex w-1/3 max-w-[200px]">
          <img src={diagram2} alt="" className="w-full h-auto" />
        </div>
        <div className="flex w-1/3 max-w-[200px]">
          <img src={diagram3} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="description">
        <h2 className=" font-smooch-bold font-bold text-3xl text-center">
          NAPIRZE — meaning ‘on the riverbank’ in Georgian
        </h2>
        <p className="font-smooch-bold font-semibold text-xl text-center w-full lg:w-1/2 mx-auto">
          {" "}
          is a landmark environmental and cultural regeneration project,
          centered on the banks of the Mtkvari river in Rustavi, Georgia. While
          our primary aim is to rewild an abandoned site in the heart of our
          industrial city, we also aim to create a cultural shift all along a
          river whose waters connect five countries and thousands of people in
          and around the Caucasus Mountains.
        </p>
      </div>
      <div className="flex w-full justify-center my-4">
        <Link to="blog/napirze">
          <button className="font-smooch-bold text-white bg-napirzeDark rounded-md drop-shadow-md px-3 py-1">
            Continue reading
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NapirzeRiverbank;
