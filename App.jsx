import { useEffect, useState } from "react";
import { GlobalStyles } from "./styles/globalStyles";

//styles components
import {
  Wrapper,
  FlexContent,
  ImageContainer,
  ImageCat,
  ButtonGet,
  ParrafFact,
} from "./styles/app.js";


function App() {
  const [fact, setFact] = useState("");
  const [catImage, setCatImage] = useState("");
  
  const FACT_URL = import.meta.env.VITE_API_FACT_URL;
  const IMAGE_URL = import.meta.env.VITE_API_IMAGE_URL;
  
    useEffect(() => {
    factRandom();
  }, []);

  useEffect(() => {
    if (fact) {
      const firstWord = fact.split(" ", 1);
      imageRandom(firstWord);
    }
  }, [fact]);

  const factRandom = async () => {
    try {
      const response = await fetch(FACT_URL);
      if (response.ok) {
        const { fact } = await response.json();
        setFact(fact);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const imageRandom = async (firstWord) => {
    try {
      const { url } = await fetch(`${IMAGE_URL}${firstWord}`);
      setCatImage(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <FlexContent>
          <ButtonGet onClick={factRandom}>Get Fact</ButtonGet>
          <ParrafFact>{fact}</ParrafFact>
        </FlexContent>
        <ImageContainer className="picture">
          {catImage ? (
            <ImageCat
              src={`${catImage}`}
              alt="imagen de un gato traido desde una api"
            />
          ) : (
            "loading..."
          )}
        </ImageContainer>
      </Wrapper>
    </>
  );
}

export default App;