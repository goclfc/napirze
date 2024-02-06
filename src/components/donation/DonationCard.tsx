import { useState } from "react";
import DonationAmount from "./DonationAmount";
import QuickSelect from "./QuickSelect";
import Line from "../line/Line";
import PaymentMethod from "./PaymentMethod";
import paypalIcon from "../../assets/images/icons/paypalFull.png";
import {
  initBogPayment,
  initPaypalPayment,
  redirectToPaymantPage,
} from "../../payments/requests";

const DonationCard = ({setLoading}:any) => {
  const [amount, setAmount] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("Gel");
  const handleClick = () => {
    setLoading(true);
    initBogPayment(amount, "GEL").then((response) => {
      redirectToPaymantPage(response.payment._links.redirect.href);
      setLoading(false);
    });
  };
  const handlePaypalClick = () => {
    setLoading(true);
    initPaypalPayment(amount).then((response) => {
      redirectToPaymantPage(response.links[1].href);
      setLoading(false);
    });
  };
  return (
    <div className="bg-white rounded-md drop-shadow-2xl mt-4 max-w-[659px] p-4 ml-0 lg:ml-6 ">
      <div className="header">
        <h2 className=" font-smooch-bold font-semibold text-2xl text-napirzeDark text-center">
        Your support makes huge difference.Our goal is to raise ₾10,000 ($3,700), which will cover the costs of: - Buying and transporting secondhand timber - Working with biologists to identify the key species living on the floodplain - Illustration, design, and printing of the boards - Installing the information boards on the floodplain
        </h2>
      </div>
      <div className="actions max-w-[440px] mx-auto">
        <DonationAmount
          setAmount={setAmount}
          setSelectedCurrency={setSelectedCurrency}
          selectedCurrency={selectedCurrency}
          amount={amount}
        />
        <QuickSelect currency={selectedCurrency} setAmount={setAmount} />
        <Line />
        <PaymentMethod
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
        <div className="flex justify-between my-2">
          <p className="font-smooch-bold text-2xl">Your donation</p>
          <p className="font-smooch-bold text-2xl">
            {amount} {selectedCurrency}
          </p>
        </div>
        <div className="flex justify-between my-2">
          <p className="font-smooch-bold text-2xl">Total amount</p>
          <p className="font-smooch-bold text-2xl">
            {amount} {selectedCurrency}
          </p>
        </div>
        {selectedCurrency === "Usd" ? (
          <div
            id="paypal-button-container"
            className="w-full cursor-pointer"
            onClick={handlePaypalClick}
          >
            <img src={paypalIcon} className="w-full h-auto" />
          </div>
        ) : (
          <button
            className="bg-napirzeDark rounded-md w-full py-2 text-white"
            onClick={handleClick}
          >
            Pay With card
          </button>
        )}
      </div>
    </div>
  );
};

export default DonationCard;
