import { Link } from 'react-router-dom';
import imgNature from '../../assets/images/content/nature1.png'

const NapirzeFloodplain = () => {
  return (
        <div className="w-full bg-white p-2">
          <div className="images flex justify-center gap-4 pt-10">
            <div className="flex">
                <img src={imgNature} alt="" className='w-full h-auto max-w-[600px]'/>
            </div>
          </div>
          <div className="description">
            <h2 className=" font-smooch-bold font-bold text-3xl text-center">History of the Rustavi floodplain</h2>
            <p className="font-smooch-bold font-semibold text-xl text-center w-full lg:w-1/2 mx-auto">Beginning as a major Iberian political hub, Rustavi has long been a city strategically situated on the edge of the Mtkvari River. During the Soviet period, Rustavi grew into a booming city driven by Rustavi Metalurgical industry. </p>
          </div>
          <div className="flex w-full justify-center my-4">
            <Link to='blog/floodplain'>
              <button className="font-smooch-bold text-white bg-napirzeDark rounded-md drop-shadow-md px-3 py-1">Continue reading</button>
            </Link>
          </div>
        </div>
      );
}
export default NapirzeFloodplain