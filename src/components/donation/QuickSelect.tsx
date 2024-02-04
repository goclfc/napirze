type Props = {
  currency: string;
  setAmount: any;
};
type ItemProps = {
  amount: number;
  currency: string;
  setAmount:any
};
const Item = (props: ItemProps) => {
  const currencies: CurrencyType = {
    Gel: "₾",
    Usd: "$",
  };
  return (
    <div className="bg-napirzeGreen text-white rounded-xl flex justify-center items-center px-4" onClick={()=>props.setAmount(props.amount)}>
      {props.amount} {currencies[props.currency]}
    </div>
  );
};
const QuickSelect = (props: Props) => {
  const availableAmounts = [10, 50, 100, 300, 500];
  return (
    <div className="flex gap-2 justify-around">
      {availableAmounts.map((amount) => (
        <Item currency={props.currency} amount={amount} setAmount={props.setAmount}/>
      ))}
    </div>
  );
};

export default QuickSelect;
