import styled from "styled-components";

export const ContainerButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 30%;
height: 50px;
border: none;
border-radius: 5px;
background-color: ${(props) => props.theme.purple};
font-family: "Road Rage", serif;
font-size: 30px;
color: #fff;

&:hover {
    background: #6f357c;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='53' stroke-linecap='square'/%3e%3c/svg%3e");
border-radius: 5px;
}

`