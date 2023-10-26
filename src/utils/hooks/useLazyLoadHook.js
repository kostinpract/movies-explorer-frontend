import { useEffect, useState } from "react";

const useLazyLoadHook = () => {
  const [cardsNumber, setCardsNumber] = useState({
    default: 7,
    additional: 7,
  });

  useEffect(() => {
    if (window.screen.width <= 480) {
      setCardsNumber((prevState) => {
        return { ...prevState, default: 5, additional: 1 };
      });
    } else if (window.screen.width <= 1280) {
      setCardsNumber((prevState) => {
        return { ...prevState, default: 7, additional: 7 };
      });
    }
  }, []);

  return cardsNumber;
};

export default useLazyLoadHook;
