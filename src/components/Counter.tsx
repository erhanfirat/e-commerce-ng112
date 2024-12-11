import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

export type YumurtaEbat = "küçük" | "orta" | "büyük"; // 12 15 18

const Counter: React.FC = () => {
  // 1 - States
  const [counter, setCounter] = useState<number>(0);
  const [fiyat, setFiyat] = useState<number>(0);
  const [ebat, setEbat] = useState<YumurtaEbat>("orta");

  // 2 - Methods

  const increase = () => {
    setCounter((prevVal) => prevVal + 1);
    setCounter((prevVal) => prevVal + 1);
    // 
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  const changeYumurtaEbat = (newEbat: YumurtaEbat) => setEbat(newEbat);

  const fiyatHesapla = () => {
    const adetFiyat = ebat == "büyük" ? 18 : ebat == "orta" ? 15 : 12;

    setFiyat(counter * adetFiyat);
  };

  // 3 - useEffects

  useEffect(() => {
    fiyatHesapla();
    // console.log("useEffect tetiklendi");
  }, [counter, ebat]);

  useEffect(() => {
    // component did mount
    // console.warn("COUNTER COMPONENT DID MOUNT!");
    return () => {
      // Component will unmount / Component siliniyor
      // console.warn("COUNTER COMPONENT WILL UNMOUNT!");
    };
  }, []);

  useEffect(() => {
    // component did mount
    // console.warn("COUNTER COMPONENT DID UPDATE!");
  });

  // JSX Template return
  return (
    <CounterDisplay
      fiyat={fiyat}
      ebat={ebat}
      changeYumurtaEbat={changeYumurtaEbat}
      counter={counter}
      increase={increase}
      decrease={decrease}
    />
  );
};

export default Counter;
