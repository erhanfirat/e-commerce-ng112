import { useEffect } from "react";
import Button from "./Button";
import { YumurtaEbat } from "./Counter";

type CounterDisplayProps = {
  counter: number;
  fiyat: number;
  ebat: YumurtaEbat;
  changeYumurtaEbat: (newEbat: YumurtaEbat) => void;
  increase: () => void;
  decrease: () => void;
};

const CounterDisplay: React.FC<CounterDisplayProps> = ({
  counter,
  fiyat,
  ebat,
  changeYumurtaEbat,
  increase,
  decrease,
}: CounterDisplayProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeYumurtaEbat(event.target.value as YumurtaEbat);
  };

  useEffect(() => {
    // component did mount
    // console.warn("COUNTER DISPLAY COMPONENT DID MOUNT!");
  }, []);

  return (
    <>
      <div>
        <p>
          Counter:
          <span>{counter}</span>
        </p>
        <p>
          <select onChange={handleChange} value={ebat}>
            <option>küçük</option>
            <option>orta</option>
            <option>büyük</option>
          </select>
        </p>
        <Button onClick={increase} color="orange" title="Sayaç değerini arttır">
          <i className="fa fa-plus" />
          <span>Arttır</span>
        </Button>
        <Button onClick={decrease}>
          <i className="fa fa-minus" />
          <span>Azalt</span>
        </Button>
        <p>
          Fiyat
          <span>{fiyat}</span>
        </p>
      </div>
    </>
  );
};

export default CounterDisplay;
