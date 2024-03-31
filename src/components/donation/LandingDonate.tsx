import { useState } from "react";
import DonationAmount from "./DonationAmount";
import payWithPaypal from "../../assets/images/icons/paywithpaypal.png";
import payWithCard from "../../assets/images/icons/paywithcard.png";
import {
  initBogPayment,
  initPaypalPayment,
  redirectToPaymantPage,
} from "../../payments/requests";
import DonationHeader from "./DonationHeader";
interface Props {
  setLoading: any;
}
const LandingDonate = (props: Props) => {
  const [amount, setAmount] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("Gel");
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
      <DonationHeader />
      <DonationAmount
        setAmount={setAmount}
        setSelectedCurrency={setSelectedCurrency}
        selectedCurrency={selectedCurrency}
        amount={amount}
      />
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
