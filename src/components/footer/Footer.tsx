import vericalLogo from '../../assets/images/logo/logo-vertical.png'
import youtube from '../../assets/images/icons/youtube.png'
import instagram from '../../assets/images/icons/instagram.png'

const Footer = () => {
  return (
    <div className="bg-napirzeDark flex justify-around items-center text-white py-8">
        <div className="flex items-center">
            <div className="logo mr-4 w-full h-auto max-w-[100px]">
                <img src={vericalLogo} alt=""  className='w-full h-auto'/>
            </div>
            <div className="flex gap-2 items-center">
                <div className='text-xs'>Folow us:</div>
                <div className='w-8'><img src={youtube} alt="" className='w-full h-auto'/></div>
                <div className='w-7' ><img src={instagram} alt="" className='w-full h-auto'/></div>
            </div>
        </div>
        <div className="flex gap-2 sm:gap-6 ">
            <div className='text-xs sm:text-md'>About us</div>
            <div className='text-xs'>Blog</div>
            <div className='text-xs'>Contact</div>
        </div>
    </div>
  )
}
export default Footer