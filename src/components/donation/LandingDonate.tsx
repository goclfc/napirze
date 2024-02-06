import { useState } from "react";
import DonationAmount from "./DonationAmount";
import payWithPaypal from "../../assets/images/icons/paywithpaypal.png";
import payWithCard from "../../assets/images/icons/paywithcard.png";
import { initBogPayment, initPaypalPayment, redirectToPaymantPage } from "../../payments/requests";
interface Props {
  setLoading:any
}
const LandingDonate = (props:Props) => {
  const [amount, setAmount] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("Gel")
  const handleClick = () => {
    props.setLoading(true);
    initBogPayment(amount, "GEL").then((response) => {
      redirectToPaymantPage(response.payment._links.redirect.href);
      props.setLoading(false);
    });
  };
  const handlePaypalClick = () => {
    props.setLoading(true);
    initPaypalPayment(amount).then((response) => {
      redirectToPaymantPage(response.links[1].href);
      props.setLoading(false);
    });
  };
  return (
    <div className=" bg-napirzeGreen px-2 py-20">
      <h2 className="font-smooch-bold font-extrabold w-full lg:w-1/2 mx-auto text-xl sm:text-3xl lg:text-[40px] xl:[50px] text-center">
        To achieve our goal and revitalise the floodplain we need your help
      </h2>
      <p className="font-smooch-bold w-full lg:w-1/2 mx-auto text-md lg:text-xl text-center">
        Our goal is to raise ₾10,000 ($3,700), which will cover the costs of: -
        Buying and transporting secondhand wood - Working with biologists to
        identify the key species living on the floodplain - Illustration,
        design, and printing of the boards - Installing the information boards
        on the floodplain Your support makes a big difference.
      </p>
      <DonationAmount setAmount={setAmount} setSelectedCurrency={setSelectedCurrency} selectedCurrency={selectedCurrency} amount={amount}/>
      <div className="my-6 flex gap-2 justify-center">
        <div className="payButton cursor-pointer" onClick={handlePaypalClick}>
          <img src={payWithPaypal} alt="" />
        </div>
        <div className="payButton cursor-pointer" onClick={handleClick}>
          <img src={payWithCard} alt="" />
        </div>
      </div>
    </div>
  );
};
export default LandingDonate;
