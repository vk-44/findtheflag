import { AnimatePresence, motion } from "framer-motion";
import { useGlobal } from "../Context/GlobalContext";
import Loader from "../components/Loader";
import { useLoader } from "../Hook/useLoader";

function Flag() {
  const { countryCode } = useGlobal();
  const { loading } = useLoader();
  const isMobileView = window.innerWidth < 768;

  return (
    <div className="flag">
      {loading && <Loader />}
      {!loading && (
        <AnimatePresence mode="wait">
          <motion.img
            key={countryCode}
            initial={{ x: isMobileView ? -200 : -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: isMobileView ? 200 : 500, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            src={`CountryFlags/${countryCode}.webp`}
            alt="Country Flag"
            className={` ${countryCode === "qa" ? "qatar" : ""} ${
              countryCode === "np" ? "nepal" : ""
            }`}
            width={600}
            height={400}
          />
        </AnimatePresence>
      )}
    </div>
  );
}

export default Flag;
