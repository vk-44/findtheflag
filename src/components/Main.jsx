import { useGlobal } from "../Context/GlobalContext";
import End from "./End";
import Flag from "./Flag";
import Loader from "./Loader";
import Options from "./Options";
import Settings from "./Settings";
import Status from "./Status";

function Main() {
  const { isLoading, isEnd } = useGlobal();
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !isEnd && (
        <main className="main">
          <Status />
          <Settings />
          <Flag />
          <Options />
        </main>
      )}
      {isEnd && <End />}
    </>
  );
}

export default Main;
