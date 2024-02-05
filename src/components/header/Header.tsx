import { Link } from "react-router-dom";
import logoVertical from "../../assets/images/logo/logo-vertical.png";
import DonateButton from "./DonateButton";
import NavItem from "./NavItem";
interface Props {
  transparent?: boolean;
  activeItem?: string;
}
const Header = (props: Props) => {
  return (
    <div
      className={
        props.transparent
          ? "fixed top-0 left-0 right-0 flex items-center justify-around z-10 h-16"
          : "fixed top-0 left-0 right-0 flex items-center justify-around z-10 h-16 bg-napirzeDark"
      }
    >
        <div className="logo w-1/5 h-auto max-w-[140px]">
      <Link to="../">
          <img src={logoVertical} alt="logo" className="w-full h-auto" />
      </Link>
        </div>
      <div className="flex gap-4">
        <NavItem
          name="About us"
          link="../about-us"
          active={props.activeItem === "aboutUs"}
        />
        <NavItem
          name="Blog"
          link="../blog"
          active={props.activeItem === "blog"}
        />
        <NavItem
          name="Contact"
          link="../contact"
          active={props.activeItem === "contact"}
        />
      </div>
      <DonateButton active />
    </div>
  );
};
export default Header;
