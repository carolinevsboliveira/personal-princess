import Typewriter from "typewriter-effect";
import useFirestore from "../hooks/useFirestore";
import IconGrid from "./IconsGrid";
import { HeaderBox, TextWriter,HeaderSubtitle } from "./Styles/MainStyle";
const Header = () => {
  let {documents} = useFirestore("details")
  let details : any = documents[0]
  return (
   <>
   {details &&  
   
    <HeaderBox>
        <TextWriter>
          <Typewriter
            options={{
              loop: true
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(details.instagram_account)
                .pauseFor(2500)
                .start();
            }}
          />
        </TextWriter>
        <HeaderSubtitle>
         {details.subtitle}
        </HeaderSubtitle>
        <IconGrid />
    </HeaderBox>}
   </>
  );
};

export default Header;
