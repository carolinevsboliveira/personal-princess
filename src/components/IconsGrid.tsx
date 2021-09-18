import { Icon } from "semantic-ui-react";
import { IconGridBox, IconLink } from "./Styles/MainStyle";
import useFirestore from "../hooks/useFirestore";

const IconGrid = () => {
  let { documents } = useFirestore("social");
  let social: any = documents[0];
  return (
    <>
      {social && (
        <IconGridBox>
          <IconLink
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Icon link name="instagram" size="big" color="black" />
          </IconLink>
          <IconLink
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Icon link name="linkedin" size="big" color="black" />
          </IconLink>
          <IconLink
            href={social.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon link name="github" size="big" color="black" />
          </IconLink>
        </IconGridBox>
      )}
    </>
  );
};

export default IconGrid;
