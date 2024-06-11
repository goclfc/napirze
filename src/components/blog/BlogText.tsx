
type Props = {
    text:string
}

const BlogText = (props: Props) => {
  return (
    <div className='font-smooch-bold w-full md:w-1/2 mx-auto py-2 px-1 text-2xl text-bold text-justify'>{props.text}</div>
  )
}
export default BlogText