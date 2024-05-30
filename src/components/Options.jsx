import { useGlobal } from "../Context/GlobalContext";

function Options() {
  const {
    countryName: correctAnswer,
    answers,
    dispatch,
    hasAnswered,
    chosenAnswer,
    isEasyMode,
    previousCountryName,
    isBtnDisabled,
  } = useGlobal();

  const handleClick = (chosenAnswer) => {
    const payload = { chosenAnswer };
    if (chosenAnswer === correctAnswer) payload.answerType = "correct";

    dispatch({ type: "optionClicked", payload: payload });
  };

  return (
    <div className={`options ${isEasyMode ? "easy" : "hard"}`}>
      {answers.map((answer) => (
        <button
          key={answer}
          disabled={isBtnDisabled}
          onClick={() => handleClick(answer)}
          className={` btnMain
            ${
              hasAnswered
                ? answer === chosenAnswer
                  ? answer === previousCountryName
                    ? "correct"
                    : "wrong"
                  : ""
                : ""
            } ${
            hasAnswered ? (answer === previousCountryName ? "correct" : "") : ""
          } `}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Options;
