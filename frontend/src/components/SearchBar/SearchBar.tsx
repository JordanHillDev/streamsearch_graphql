import { useEffect, useState } from "react";
import styled from "styled-components";

import type { SearchBarProps } from ".";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 10px 0;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  background: white;
  margin: 0 auto;
  border-radius: 40px;
  color: white;
  text-align: center;
  padding: 0;

  input {
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    border-radius: 40px;
    background: transparent;
    height: 40px;
    color: var(--background-color);
    font-size: 1.5rem;
    text-align: center;

    :focus {
      outline: none;
      border: 3px solid var(--font-color-bright);
    }

    ::selection {
      background: gray;
    }

    ::placeholder {
      color: gray;
    }
  }
`;

function SearchBar({ onChange }: SearchBarProps) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [input, onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Wrapper>
      <Content>
        <input type="text" placeholder="Search Titles" onChange={handleChange} value={input} />
      </Content>
    </Wrapper>
  );
}

export default SearchBar;
