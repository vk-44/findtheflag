import { useMemo } from "react";
import { FlagTriangleRight } from "lucide-react";
import { useGlobal } from "../Context/GlobalContext";
import {
  iconStar,
  iconFlag,
  iconTrophy,
  iconRotate,
  iconPalette,
} from "./Icons";
import StatusItem from "./StatusItem";
import SettingsItem from "./SettingsItem";

function Menu() {
  const { points, count, countryDataLength, highscore, dispatch, isEasyMode } =
    useGlobal();
  const flagCount = count < countryDataLength ? count + 1 : count;
  const iconFlagTriangle = useMemo(
    () => (
      <FlagTriangleRight
        className={`iconFlagTriangle ${isEasyMode ? "green" : "red"}`}
      />
    ),
    [isEasyMode]
  );
  return (
    <div className="menu">
      <StatusItem icon={iconStar} description="Score" data={points} />
      <StatusItem
        icon={iconFlag}
        description="Flags"
        data={`${flagCount} / ${countryDataLength}`}
      />
      <StatusItem icon={iconTrophy} description="Highscore" data={highscore} />
      <SettingsItem
        icon={iconFlagTriangle}
        description={isEasyMode ? "Easy" : "Hard"}
        onClick={() => {
          dispatch({ type: "gameModeChanged" });
          dispatch({ type: "restartClicked" });
        }}
      />
      <SettingsItem
        icon={iconPalette}
        description="Theme"
        onClick={() => console.log("theme changed")}
      />
      <SettingsItem
        icon={iconRotate}
        description="Restart"
        onClick={() => dispatch({ type: "restartClicked" })}
      />
    </div>
  );
}

export default Menu;
