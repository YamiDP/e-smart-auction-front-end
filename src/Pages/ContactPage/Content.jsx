import { WrapperContent } from "../../Elements/WrapperContent";
import { MoreServ } from "../AboutPage/ContentElements/MoreServ";
import { Teams } from "../AboutPage/ContentElements/Teams";
import { Contact } from "./ContentElements/Contact";
import { FormContact } from "./ContentElements/FormContact";

export const Content = () => {
  return (
    <WrapperContent>
      <FormContact />
      <div className="vc_row-full-width vc_clearfix" />
      <Contact />
      <div className="vc_row-full-width vc_clearfix" />
      <Teams />
      <MoreServ />
      <div className="vc_row-full-width vc_clearfix" />
      <div className="clearfix" />
    </WrapperContent>
  );
};
