import { Link } from "react-router-dom";

type Props = {
  name: string;
  link: string;
  active: boolean;
};

const NavItem = (props: Props) => {
  return (
    <Link to={props.link}>
      <div
        className={
          props.active
            ? "font-smooch-bold text-lg lg:text-2xl text-napirzeGreen"
            : "font-smooch-bold text-lg lg:text-2xl text-white"
        }
      >
        {props.name}
      </div>
    </Link>
  );
};
export default NavItem;
