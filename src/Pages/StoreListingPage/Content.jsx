import { WrapperContent } from "../../Elements/WrapperContent";
import { Filter } from "./ContentElements/Filter";
import { Form } from "./ContentElements/Form";
import { ListItem } from "./ContentElements/ListItem";

export const Content = () => {
  return (
    <WrapperContent propsBreadcum={{ show: true }} padding="1">
      <Filter />
      <Form />
      <ListItem />
      <div className="clearfix" />
    </WrapperContent>
  );
};
