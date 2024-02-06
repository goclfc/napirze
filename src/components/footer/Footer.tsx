import vericalLogo from "../../assets/images/logo/logo-vertical.png";
import NavItem from "../header/NavItem";
import { redirectToPaymantPage } from "../../payments/requests";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
type Props = {
  activeItem?: string;
};
const Footer = (props: Props) => {
  return (
    <div className="bg-napirzeDark flex justify-around items-center text-white py-8 mt-auto">
      <div className="flex items-center">
        <div className="logo mr-4 w-full h-auto max-w-[100px]">
          <img src={vericalLogo} alt="" className="w-full h-auto" />
        </div>
        <div className="flex gap-2">
          <div className="text-xs">Folow us:</div>
          <div
            className="cursor-pointer"
            onClick={() =>
              redirectToPaymantPage(
                "https://www.instagram.com/napirze?igsh=MWZiczJ0cWd2b2U0MA=="
              )
            }
          >
            <FaInstagram />
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              redirectToPaymantPage(
                "https://www.facebook.com/napirze?mibextid=2JQ9oc"
              )
            }
          >
            <FaFacebookF />
          </div>
        </div>
      </div>
      <div className="flex gap-2 sm:gap-6 ">
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
    </div>
  );
};
export default Footer;
