import { useGlobal } from "../Context/GlobalContext";
import Loader from "./Loader";
import Menu from "./Menu";
import Flag from "./Flag";
import Options from "./Options";
import End from "./End";

function Main() {
  const { isLoading, isEnd } = useGlobal();
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !isEnd && (
        <main className="main">
          <Menu />
          <Flag />
          <Options />
        </main>
      )}
      {isEnd && <End />}
    </>
  );
}

export default Main;
