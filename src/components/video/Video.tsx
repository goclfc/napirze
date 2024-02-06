import { VimeoPlayer } from 'reactjs-vimeo-player'

type Props = {
    id:number
}

const Video = (props: Props) => {
  return (
    <div className="w-full h-full relative">
    <VimeoPlayer id={props.id} autoplay background fullWidth loop />
    <div className="absolute  text-white font-smooch-bold w-full text-center font-bold text-lg sm:text-3xl lg:text-[40px] xl:[50px] 2xl:text-[76px] bottom-20 sm:bottom-32 lg:bottom-44 xl:bottom-64 2xl:bottom-80"> Reconceptualising a human-river relationship and culture</div>
    <div className="absolute  text-white font-smooch-bold w-full text-center font-semibold text-md sm:text-2xl lg:text-3xl xl:text-[32px] 2xl:text-[40px] bottom-10 sm:bottom-24 lg:bottom-32 xl:bottom-44 2xl:bottom-60">starting from the Mtkvari river floodplain in Rustavi, Georgia</div>
  </div>
  )
}
export default Video