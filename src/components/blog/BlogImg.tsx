
type Props = {
    img:any
}

const BlogImg = (props: Props) => {
  return (
    <div className='w-full py-6'><img src={props.img} alt="" className='w-full h-auto'/></div>
  )
}
export default BlogImg