import { useGlobal } from "../Context/GlobalContext";
import { iconStar, iconTrophy, iconRotate, iconAward } from "./Icons";
import StatusItem from "./StatusItem";
import SettingsItem from "./SettingsItem";

function End() {
  const { dispatch, points, highscore, isNewHighscore } = useGlobal();
  let title;
  if (points <= 40) {
    title = "Novice Navigator";
  } else if (points <= 80) {
    title = "Competent Cartographer";
  } else if (points <= 120) {
    title = "Proficient Pathfinder";
  } else if (points <= 160) {
    title = "Legendary Locator";
  } else if (points < 194) {
    title = "Master Mapmaker";
  } else if (points === 194) {
    title = "Ultimate Geographer";
  }

  return (
    <div className="endContainer">
      <div className="endStatusContainer">
        <p className="title">
          <span>You earned the title</span> <b>{title}</b>
        </p>
        <StatusItem
          icon={iconStar}
          description="Score"
          data={points}
          className="end"
        />
        <StatusItem
          icon={iconTrophy}
          description="Highscore"
          data={highscore}
          className="end"
        />
        {isNewHighscore && (
          <p className="descriptionContainer newHighScore">
            {iconAward}
            <span>New Highscore!</span>
          </p>
        )}
        <SettingsItem
          icon={iconRotate}
          description="Restart"
          onClick={() => dispatch({ type: "restartClicked" })}
          className="restart"
        />
      </div>
    </div>
  );
}

export default End;
