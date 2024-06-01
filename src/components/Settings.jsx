import { FlagTriangleRight } from "lucide-react";
import { useGlobal } from "../Context/GlobalContext";
import { useMemo } from "react";
import SettingsItem from "./SettingsItem";
import { iconRotate, iconPalette } from "./Icons";

function Settings() {
  const { dispatch, isEasyMode } = useGlobal();
  const iconFlagTriangle = useMemo(
    () => (
      <FlagTriangleRight
        className={`iconFlagTriangle ${isEasyMode ? "green" : "red"}`}
      />
    ),
    [isEasyMode]
  );

  return (
    <div className="settings">
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
        description={"Theme"}
        onClick={() => console.log("theme changed")}
      />
      <SettingsItem
        icon={iconRotate}
        description={"Restart"}
        onClick={() => dispatch({ type: "restartClicked" })}
      />
    </div>
  );
}

export default Settings;
