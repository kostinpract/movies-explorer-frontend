import { useEffect, useState } from "react";

const useLazyLoadHook = () => {
  const [cardsNumber, setCardsNumber] = useState({
    default: 4,
    additional: 4,
  });

  useEffect(() => {
    if (window.screen.width <= 480) {
      setCardsNumber((prevState) => {
        return { ...prevState, default: 5, additional: 2 };
      });
    } else if (window.screen.width <= 1280) {
      setCardsNumber((prevState) => {
        return { ...prevState, default: 4, additional: 4 };
      });
    }
  }, []);

  return cardsNumber;
};

export default useLazyLoadHook;
