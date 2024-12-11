import { useState } from "react";
import Button from "../components/Button";
import Counter from "../components/Counter";

const YumurtaPage = () => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <>
      <h1 className="title">Gerçek Yumurta</h1>
      <Button onClick={() => setShow(!show)}>Toggle Counter</Button>
      {show && <Counter />}
    </>
  );
};

export default YumurtaPage;
