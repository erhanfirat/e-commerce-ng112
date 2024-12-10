import { useState } from "react";
import Button from "../components/Button";
import Counter from "../components/Counter";

const HomePage = () => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <>
      <h1 className="title">Ana Sayfa</h1>
      <hr />
      <p className="text-[#3355CC] w-[350px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolor,
        delectus repudiandae eveniet dolores aliquam officiis odit labore,
        obcaecati ea in placeat consequuntur harum, commodi unde ullam culpa
        vero veniam.
      </p>
      <Button onClick={() => setShow(!show)}>Toggle Counter</Button>
      {show && <Counter />}
    </>
  );
};

export default HomePage;
