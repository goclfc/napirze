import logoGif from '../../assets/images/logo/V2.gif'
type Props = {
    isLoading:boolean
}

const Loading = (props: Props) => {
    if(props.isLoading){
        return (
          <div className="bg-napirzeDark flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 z-20">
            <img src={logoGif} alt='logo' className='w-[350px] h-auto'/>
          </div>
        )
    }return null
}
export default Loading