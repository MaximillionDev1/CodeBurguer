import styled from "styled-components";

export const CardContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  cursor: grab !important;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
position: relative;

  &:active {
    cursor: grabbing !important;
  }

div {
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    width: 100%;
    height: 80%;
    gap: 7px;
}

p{
font-size: 18px;
  color:#ff8c05 ;
  line-height: 20px;
  font-weight: 600;
  margin-top:40px
}

  strong {
  font-size: 22px;
  color: #363636;
  font-weight: 800;
  line-height: 20px;
  }
`;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
    
`;
