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
            <h2 className=" font-smooch-bold font-bold text-3xl text-center">NAPIRZE — meaning ‘on the riverbank’ in Georgian</h2>
            <p className="font-smooch-bold font-semibold text-xl text-center w-full lg:w-1/2 mx-auto"> is a landmark environmental and cultural regeneration project, centered on the banks of the Mtkvari river in Rustavi, Georgia. While our primary aim is to rewild an abandoned site in the heart of our industrial city, we also aim to create a cultural shift all along a river whose waters connect three countries and thousands of people in and around the Caucasus Mountains.</p>
          </div>
          <div className="flex w-full justify-center my-4">
          <button className="font-smooch-bold text-white bg-napirzeDark rounded-md drop-shadow-md px-3 py-1">Continue reading</button>
          </div>
        </div>
      );
}
export default NapirzeFloodplain