
type Props = {
    img:any
}

const BlogImg = (props: Props) => {
  return (
    <div className='w-full'><img src={props.img} alt="" className='w-full h-auto'/></div>
  )
}
export default BlogImg