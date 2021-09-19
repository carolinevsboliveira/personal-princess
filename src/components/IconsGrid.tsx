import { Icon } from "semantic-ui-react";
import { IconGridBox, IconLink } from "./Styles/MainStyle";
import useFirestore from "../hooks/useFirestore";

const IconGrid = () => {
  let { documents } = useFirestore("social");
  return (
    <IconGridBox>
      {documents.map((doc: any) => (
        <>
          {doc != null && (
            <IconLink href={doc.url} target="_blank" rel="noreferrer">
              <Icon link name={doc.name} size="big" color="black" />
            </IconLink>
          )
          }
        </>
      ))
    }
  </IconGridBox>
  )
}
export default IconGrid;
