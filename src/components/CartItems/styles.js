import styled from "styled-components";

export const ProductImage = styled.img`
    width: 80%;
    height: 80%;
    border-radius: 16px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;


    button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    color: #fff;
    border-radius: 5px;
    background-color: ${(props) => props.theme.purple};
    transition: background-color 0.2s ease-in-out;
    border: none;
    cursor: pointer;

    &:hover {
    background-color: #7b4a8d;
    }
`;


export const EmptyCart = styled.p`
font-size: 20px;
text-align: center;
font-weight: bold;
`;

export const TotalPrice = styled.p`
font-weight: bold;
`;

export const TrashImage = styled.img`
height: 20px;
width: 20px;
cursor: pointer;
`;