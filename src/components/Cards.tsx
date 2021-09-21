import { Card, Image } from "semantic-ui-react";
import { CardBox, ProfileImage } from "./Styles/MainStyle";
interface iProps {
  path: string;
  description: string;
  title: string;

}
const Cards = (props: iProps) => (
  <CardBox>
    <Card>
      <ProfileImage>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/photogallery-48237.appspot.com/o/badbubblee_compressed.jpg?alt=media&token=ebe0b6c7-ec62-4456-a928-89990066d7cc"
          alt="Profile Image"
          avatar
        />
        <span>lapis_lazullii</span>
      </ProfileImage>
      <Image src={props.path} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  </CardBox>
);

export default Cards;
