import { useState } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    // counter++;
  }

  console.log("counter: ", counter);

  return (
    <div>
      <p>
        Counter:
        <span>{counter}</span>
        <button onClick={() => set}>ARTTIR</button>
        <button >AZALT</button>
      </p>
    </div>
  );
};

export default Counter;
