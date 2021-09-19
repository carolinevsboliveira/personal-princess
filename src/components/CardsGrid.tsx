import { Grid } from "semantic-ui-react";
import useFirestore from "../hooks/useFirestore";
import Cards from "./Cards";
import { GridBox } from "./Styles/MainStyle";
const CardGrid = () => {
  const { documents } = useFirestore("images");
  return (
    <GridBox>
      <Grid centered>
        {documents.map((doc: any) => (
          <div key={doc != null ? doc.key : 0}>
            {doc != null && (
              <Grid.Row>
                <Grid.Column>
                  <Cards
                    description={doc.description}
                    path={doc.url_squared}
                    title={doc.title}
                  />
                </Grid.Column>
              </Grid.Row>
            )}
          </div>
        ))}
      </Grid>
    </GridBox>
  );
};

export default CardGrid;
