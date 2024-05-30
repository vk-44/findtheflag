import { useGlobal } from "../Context/GlobalContext";
import { iconStar, iconTrophy, iconRotate } from "./Icons";
import StatusItem from "./StatusItem";
import SettingsItem from "./SettingsItem";

function End() {
  const { dispatch, points, highscore } = useGlobal();
  return (
    <div className="end">
      <div className="endStatusContainer">
        <StatusItem icon={iconStar} description={"Score"} data={points} />
        <StatusItem
          icon={iconTrophy}
          description={"Highscore"}
          data={highscore}
        />
        <SettingsItem
          icon={iconRotate}
          description={"Restart"}
          onClick={() => dispatch({ type: "restartClicked" })}
          className={"restart"}
        />
      </div>
    </div>
  );
}

export default End;
