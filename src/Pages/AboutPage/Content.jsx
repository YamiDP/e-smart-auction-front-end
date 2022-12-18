import { WrapperContent } from "../../Elements/WrapperContent";
import { Carousel } from "./ContentElements/Carousel";
import { Description } from "./ContentElements/Description";
import { EndDesc } from "./ContentElements/EndDesc";
import { MoreServ } from "./ContentElements/MoreServ";
import { Services } from "./ContentElements/Services";
import { Teams } from "./ContentElements/Teams";

export const Content = () => {
  return (
    <WrapperContent>
      <Carousel />
      <div className="vc_row-full-width vc_clearfix" />
      <Description />
      <Services />
      <Teams />
      <MoreServ />
      <div className="vc_row-full-width vc_clearfix" />
      <EndDesc />
      <div className="clearfix" />
    </WrapperContent>
  );
};
