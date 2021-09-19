import { Card, Image } from "semantic-ui-react";
import { CardBox } from "./Styles/MainStyle";
interface iProps {
  path: string;
  description: string;
  title: string;
}
const Cards = (props: iProps) => (
  <CardBox>
    <Card>
      <Image src={props.path} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  </CardBox>
);

export default Cards;