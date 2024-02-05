import { Link } from 'react-router-dom'

type Props = {
    img:any,
    description:string,
    link:string
}

const BlogItem = (props: Props) => {
  return (
    <Link to={props.link}>
    <div style={{ background: `url(${props.img})`, backgroundPosition:"center" ,backgroundSize:"cover"}} className='w-full h-[500px] flex items-end text-white font-smooch-bold text-3xl justify-center pb-6'>{props.description}</div>
    </Link>
  )
}

export default BlogItem