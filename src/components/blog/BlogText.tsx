import { useEffect, useRef } from "react";

type Props = {
  text: string;
};

const BlogText = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    ref.current!.innerHTML = props.text;
  }, [props.text]);
  return (
    <div
      className="font-smooch-bold w-full md:w-1/2 mx-auto py-2 px-1 text-2xl text-bold text-justify"
      ref={ref}
    ></div>
  );
};
export default BlogText;
