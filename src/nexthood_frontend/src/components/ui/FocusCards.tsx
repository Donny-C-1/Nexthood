import { FocusArea } from "../../data";

type FocusCardsProps = {
  display: FocusArea;
  select: {
    focus: string;
    setFocus: (name: string) => void
  };
};

const FocusCards = ({ display, select }: FocusCardsProps) => {
  return (
    <button
      onClick={() => {
        select.setFocus(display.name);
        console.log("clicked");
      }}
      type="button"
      className={`flex gap-2 items-center p-3 rounded-lg border border-black border-opacity-10 hover:border-primary ${
        display.name == select.focus ? "border-primary" : ""
      }`}
    >
      <img src={display.icon} alt="focus icon" />
      <p>{display.name}</p>
    </button>
  );
};

export default FocusCards;
