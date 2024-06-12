import ReactGA from "react-ga4";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { useEffect } from "react";

const overlayStyle = {
  backgroundColor: "rgb(0,0,0,.5)",
};

const mobileBannerStyle = {
  backgroundColor: "#212529",
  color: "#adb5bd",
  fontSize: "2rem",
};

const bannerStyle = {
  alignItems: "center",
  width: "50%",
  height: "10%",
  left: "50%",
  transform: "translate(-50%, 0)",
  fontSize: "2rem",
  backgroundColor: "#212529",
  color: "#adb5bd",
};

const buttonStyle = {
  fontFamily: "inherit",
  fontSize: "2rem",
};

const isMobileView = window.screen.width < 768;

function Cookie() {
  const handleAcceptCookie = () => {
    ReactGA.initialize(import.meta.env.VITE_MEASUREMENT_ID);
    ReactGA.send({ hitType: "pageview", page: "/", title: "home" });
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <CookieConsent
      enableDeclineButton="true"
      onAccept={handleAcceptCookie}
      overlay="true"
      style={isMobileView ? mobileBannerStyle : bannerStyle}
      buttonText="Accept"
      declineButtonText="Reject"
      overlayStyle={overlayStyle}
      buttonStyle={buttonStyle}
      declineButtonStyle={buttonStyle}
    >
      This website uses cookies to enhance the user experience
    </CookieConsent>
  );
}

export default Cookie;
