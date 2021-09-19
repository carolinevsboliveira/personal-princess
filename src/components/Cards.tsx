import { Card, Image } from 'semantic-ui-react'
interface iProps{
    path: string,
    description: string, 
    title: string
}
const Cards = (props: iProps) => (
  <Card>
    <Image src={props.path} wrapped ui={false}/>
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default Cards