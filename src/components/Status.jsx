import { useGlobal } from "../Context/GlobalContext";
import StatusItem from "./StatusItem";
import { iconStar, iconFlag, iconTrophy } from "./Icons";

function Status() {
  const { points, count, countryDataLength, highscore } = useGlobal();
  const flagCount = count < countryDataLength ? count + 1 : count;
  return (
    <div className="status">
      <StatusItem icon={iconStar} description={"Score"} data={points} />
      <StatusItem
        icon={iconFlag}
        description={"Flags"}
        data={`${flagCount} / ${countryDataLength}`}
      />
      <StatusItem
        icon={iconTrophy}
        description={"Highscore"}
        data={highscore}
      />
    </div>
  );
}

export default Status;
