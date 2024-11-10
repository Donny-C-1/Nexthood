import { FocusArea } from "../../data"

const FocusCards = ({icon, name}: FocusArea) => {
  return (
    <div className="flex gap-2 items-center p-3 rounded-lg border border-black border-opacity-10 hover:border-primary">
        <img src={icon} alt="focus icon" />
        <p>{name}</p>
    </div>
  )
}

export default FocusCards