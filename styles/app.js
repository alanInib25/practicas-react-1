import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #352f44;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

export const FlexContent = styled.article`
  width: 30rem;
  height: 20rem;
  padding: 1rem;
  box-shadow: 0 0 0.5rem #b9b4c7;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.picture`
  width: 40rem;
  height: 30rem;
  box-shadow: 0 0 1rem #b9b4c7;
  border-radius: 0.5rem;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const ImageCat = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ButtonGet = styled.button`
  width: 6rem;
  height: 3rem;
  padding: 0.8rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

export const ParrafFact = styled.p`
  width: 100%;
  font-size: 1.3rem;
  color: white;
`;
