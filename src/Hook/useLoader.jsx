import { useEffect, useState } from "react";
import { useGlobal } from "../Context/GlobalContext";

export function useLoader() {
  const [loading, setLoading] = useState(true);
  const { countryCode } = useGlobal();

  useEffect(() => {
    const img = new Image();
    img.src = `CountryFlags/${countryCode}.webp`;
    img.onload = () => {
      setLoading(false);
    };
  }, [countryCode]);

  return { loading };
}
