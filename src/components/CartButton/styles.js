import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color: ${(props) => props.theme.purple};
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 8px;
  font-size: 30px;
  color: #fff;

  &:hover {
  background-color: #6f357c;
  
  }
  `