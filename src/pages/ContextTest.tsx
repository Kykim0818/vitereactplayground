import styled from "styled-components";
import { Button } from "../components/Button";

export const ContextTest = () => {
  return (
    <Style.Wrapper>
      <Style.Title>Context Test</Style.Title>
      <Style.Body>content body</Style.Body>
      <Button size="md" theme="dark">
        White
      </Button>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: black;
  `,

  Title: styled.h2`
    color: white;
  `,
  Body: styled.body`
    display: flex;
    align-items: center;
    color: white;
    height: 500px;
  `,
};
