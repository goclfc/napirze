import { Link } from "react-router-dom";

type Props = {
  active: boolean;
};

const DonateButton = (props: Props) => {
  return (
    <Link to="../donation">
      <button
        className={`${
          props.active ? "bg-napirzeGreen" : "bg-white"
        } font-smooch-bold text-md lg:text-2xl px-8  py-1 lg:py-2 rounded-md drop-shadow-md text-napirzeDark`}
      >
        Donate
      </button>
    </Link>
  );
};
export default DonateButton;
