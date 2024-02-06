import Header from "../header/Header";
import Footer from "../footer/Footer";
import contactImg from "../../assets/images/content/donatePic.jpg";
import Line from "../line/Line";
import smsIcon from "../../assets/images/icons/sms.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { redirectToPaymantPage } from "../../payments/requests";
const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={false} activeItem="contact" />
      <div className="mt-16 w-full flex p-0 lg:p-2 flex-wrap">
        <div className="img w-full lg:max-w-[50%]">
          <img src={contactImg} alt="" />
        </div>
        <div className="bg-white rounded-md drop-shadow-2xl mt-4 max-w-[659px] p-1 ml-0 lg:ml-6 lg:p-4">
          <h2 className="text-2xl font-smooch-bold font-extrabold">
            Contact Us
          </h2>
          <p className="font-smooch-bold">Don’t hesitate to write us</p>
          <Line />
          <div className="flex justify-between font-smooch-bold">
            <div className="flex gap-2 items-center">
              <img src={smsIcon} alt="" /> DATA@NAPIRZE.COM
            </div>
            <div className="flex gap-2 items-center">
              <img src={smsIcon} alt="" /> DEME@NAPIRZE.COM
            </div>
          </div>
          <Line />
          <div className="font-smooch-bold">
            <p>Find us on socials:</p>
            <div className="flex gap-4 items-center">
              <div className="text-md">Folow us:</div>
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
                <FaFacebookF/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer activeItem="contact" />
    </div>
  );
};
export default Contact;
