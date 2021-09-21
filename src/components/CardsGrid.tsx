import { Grid } from "semantic-ui-react";
import useFirestore from "../hooks/useFirestore";
import Cards from "./Cards";

interface iProps {
  setSelectedImage : Function; 
  setModalOpened: Function
}
const CardGrid = (props:iProps) => {
  const { documents } = useFirestore("images");
  const handleClick = (doc:any) => {
    props.setSelectedImage(doc.url)
    props.setModalOpened(true)
  }
  return (
      <Grid centered>
        {documents.map((doc: any) => (
          <div key={doc != null ? doc.key : 0}>
            {doc != null && (
              <Grid.Row>
                <Grid.Column>
                 <div onClick={()=> {handleClick(doc)}}>
                 <Cards
                    description={doc.description}
                    path={doc.url_squared}
                    title={doc.title}
                  />
                 </div>
                </Grid.Column>
              </Grid.Row>
            )}
          </div>
        ))}
      </Grid>
  );
};

export default CardGrid;
