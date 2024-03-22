import styled from "styled-components";

import type { ButtonProps } from ".";

const Wrapper = styled.button`
  background-color: white;
  color: hsl(0, 2%, 12%);
  font-size: 1.2rem;
  padding: 0.5em 1em;
  cursor: pointer;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: hsl(0, 0%, 70%);
  }
`;

function Button({ text, callback }: ButtonProps) {
  return <Wrapper onClick={callback}>{text}</Wrapper>;
}

export default Button;
