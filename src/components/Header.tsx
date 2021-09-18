import Typewriter from "typewriter-effect";
import useFirestore from "../hooks/useFirestore";
import { HeaderBox, TextWriter,HeaderSubtitle } from "./Styles/MainStyle";
const Header = () => {
  let {documents} = useFirestore("details")
  let details : any = documents[0]
  return (
   <>
   {details &&  
    <HeaderBox>
        <TextWriter>
          {/* Style will be inherited from the parent element */}
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
    </HeaderBox>}
   </>
  );
};

export default Header;
