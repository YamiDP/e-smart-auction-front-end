import { setClassBody } from "../../Configs/classBody";
import { Content } from "./Content";
import { Slider } from "./Slider";

export const HomePage = () => {
  setClassBody(0)
  return (
    <>
      <Slider />
      <Content />
    </>
  );
};
