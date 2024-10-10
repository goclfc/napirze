import { useEffect } from "react"

type Props = {
    text:string
}

const BlogText = (props: Props) => {
useEffect(()=>{
const item = document.getElementById("thismf")
item!.innerHTML += props.text
},[props.text])
  return (
    <div className='font-smooch-bold w-full md:w-1/2 mx-auto py-2 px-1 text-2xl text-bold text-justify' id='thismf'></div>
  )
}
export default BlogText