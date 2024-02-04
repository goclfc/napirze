type Props = {
  setAmount: any;
  setSelectedCurrency: any;
  selectedCurrency: string;
  amount:number
};

const DonationAmount = (props: Props) => {
  const currencies: CurrencyType = {
    Gel: "₾",
    Usd: "$",
  };
  const toggleCurrency = () => {
    if (props.selectedCurrency === "Gel") {
      props.setSelectedCurrency("Usd");
    } else if (props.selectedCurrency === "Usd") {
      props.setSelectedCurrency("Gel");
    }
  };
  return (
    <div className="donation w-full max-w-[440px] mx-auto">
      <div className="header flex justify-between w-full mt-10">
        <p className="font-smooch-bold text-xl my-2">Enter your donation</p>
        <p className="font-smooch-bold text-2xl my-2">₾10,000 ($3,700)</p>
      </div>
      <div className="relative my-2">
        <input
          type="text"
          className="w-full text-center py-3 rounded-lg border border-napirzeDark text-2xl font-smooch-bold"
          onChange={(e) => props.setAmount(+e.target.value)}
          value={props.amount}
        />
        <div className="absolute left-2 top-1 text-center font-smooch-bold">
          <div
            className="text-lg font-smooch-bold cursor-pointer"
            onClick={toggleCurrency}
          >
            {currencies[props.selectedCurrency]}
          </div>
          <div className="text-sm">{props.selectedCurrency}</div>
        </div>
        <div className="absolute right-2 top-3 text-2xl font-smooch-bold">
          .00
        </div>
      </div>
    </div>
  );
};

export default DonationAmount;
