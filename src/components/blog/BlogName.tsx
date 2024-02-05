
type Props = {
    name:string
}

const BlogName = (props: Props) => {
  return (
    <div className='font-smooch-bold font-extrabold text-[40px] w-full text-center'>{props.name}</div>
  )
}
export default BlogName