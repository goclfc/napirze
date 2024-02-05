import Line from "../line/Line";
import activeCircle from "../../assets/images/icons/circleActive.png";
import paciveCircle from "../../assets/images/icons/circlePasive.png";
import paypal from "../../assets/images/icons/paypalSmall.png";
import card from "../../assets/images/icons/cardSmall.png";

type Props = {
    selectedCurrency:string,
    setSelectedCurrency:any
};

const PaymentMethod = (props: Props) => {
  return (
    <div className="p-4 border border-black rounded-md">
      <div className="name font-smooch-bold">Payment method</div>
      <div
        className="item flex gap-2 font-smooch-bold text-xl items-center cursor-pointer"
        onClick={() => props.setSelectedCurrency("Usd")}
      >
        <img
          src={props.selectedCurrency === "Usd" ? activeCircle : paciveCircle}
          alt=""
        />{" "}
        <img src={paypal} alt="" /> Paypal
      </div>
      <Line />
      <div
        className="item flex gap-2 font-smooch-bold text-xl items-center cursor-pointer"
        onClick={() => props.setSelectedCurrency("Gel")}
      >
        <img src={props.selectedCurrency === "Gel" ? activeCircle : paciveCircle} alt="" />{" "}
        <img src={card} alt="" />
        Pay with card
      </div>
    </div>
  );
};

export default PaymentMethod;
