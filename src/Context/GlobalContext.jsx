import { createContext, useContext, useEffect, useReducer } from "react";
import ArrayShuffler from "../lib/ArrayShuffler";
import initialCountryData from "../Data/initialData";
import RandomNumberGenerator from "../lib/RandomNumberGenerator";

const GlobalContext = createContext();

const initialState = {
  countryData: [],
  count: 0,
  answers: [],
  hasAnswered: false,
  chosenAnswer: null,
  points: 0,
  gameMode: "easy",
  restart: false,
  isBtnDisabled: false,
  isLoading: true,
  isEnd: false,
  highscore: 0,
  isNewHighscore: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataLoaded":
      return { ...state, countryData: action.payload, restart: false };
    case "answersLoaded":
      return { ...state, answers: action.payload, isLoading: false };
    case "optionClicked":
      return {
        ...state,
        isBtnDisabled: true,
        hasAnswered: true,
        chosenAnswer: action.payload.chosenAnswer,
        count: state.count <= state.countryData.length ? state.count + 1 : null,
        points:
          action.payload.answerType === "correct"
            ? state.points + 1
            : state.points,
      };
    case "timeOutEnded":
      return {
        ...state,
        isBtnDisabled: false,
        hasAnswered: false,
        chosenAnswer: null,
      };
    case "gameModeChanged":
      return {
        ...state,
        gameMode: state.gameMode === "easy" ? "hard" : "easy",
      };
    case "restartClicked":
      return {
        ...initialState,
        gameMode: state.gameMode,
        highscore: state.highscore,
        restart: true,
      };
    case "setEnd":
      return {
        ...state,
        isEnd: true,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
        isNewHighscore: state.points > state.highscore,
      };
    default:
      throw new Error("Action unknown");
  }
};

function GlobalProvider({ children }) {
  const [
    {
      countryData,
      count,
      answers,
      hasAnswered,
      chosenAnswer,
      points,
      gameMode,
      restart,
      isBtnDisabled,
      isLoading,
      isEnd,
      highscore,
      isNewHighscore,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const countryDataLength = countryData.length;
  const countryName = countryData[count]?.countryName;
  const previousCountryName = countryData[count - 1]?.countryName;
  const countryCode = countryData[count]?.countryCode;
  const nextCountryCode = countryData[count + 1]?.countryCode;
  const isEasyMode = gameMode === "easy";

  useEffect(() => {
    if (nextCountryCode)
      new Image().src = `CountryFlags/${nextCountryCode}.webp`;
  }, [nextCountryCode]);

  useEffect(() => {
    dispatch({
      type: "dataLoaded",
      payload: ArrayShuffler(initialCountryData),
    });
  }, [restart]);

  useEffect(() => {
    if (countryDataLength && count === countryDataLength) {
      setTimeout(() => {
        dispatch({ type: "setEnd" });
      }, 300);
    }
  }, [count, countryDataLength]);

  useEffect(() => {
    if (!countryDataLength) return;
    let arr = [];

    function getUniqueCountryName(arr) {
      let tempCountryName;
      do {
        const randomNum = RandomNumberGenerator(countryDataLength);
        tempCountryName = countryData[randomNum].countryName;
      } while (arr.includes(tempCountryName));
      return tempCountryName;
    }

    arr.push(countryName);
    arr.push(getUniqueCountryName(arr));

    if (!isEasyMode) {
      arr.push(getUniqueCountryName(arr));
      arr.push(getUniqueCountryName(arr));
    }

    setTimeout(() => {
      dispatch({ type: "timeOutEnded" });
      dispatch({ type: "answersLoaded", payload: ArrayShuffler(arr) });
    }, 500);
  }, [countryDataLength, countryName, countryData, isEasyMode]);

  return (
    <>
      {countryDataLength && (
        <GlobalContext.Provider
          value={{
            dispatch,
            countryCode,
            countryName,
            answers,
            hasAnswered,
            chosenAnswer,
            points,
            count,
            countryDataLength,
            isEasyMode,
            previousCountryName,
            isBtnDisabled,
            isLoading,
            isEnd,
            highscore,
            isNewHighscore,
          }}
        >
          {children}
        </GlobalContext.Provider>
      )}
    </>
  );
}

function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error("GlobalContext is used outside of GlobalProvider.");
  return context;
}

export { GlobalProvider, useGlobal };
