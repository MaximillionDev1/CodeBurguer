import { Link } from "react-router";
import styled from "styled-components";

export const CarouselContainer = styled.div`
`;

export const Container = styled.div`
.carousel-item {  
padding-right:40px;

}

padding-left:40px;
`;
export const Title = styled.h2`
   font-size: 32px;
    font-weight: 700;
   color:${(props) => props.theme.purple};
   padding-bottom: 12px;
   position: relative;
   text-align: center;
   margin-bottom: 40px;
  
 


   &::after {
   content: "";
    position: absolute;
    bottom: 0px;
    width: 56px ;
    height: 4px;
    background: ${(props) => props.theme.purple};
    left: 50%;
    transform: translateX(-50%); }

`;
export const ContainerItems = styled.div`
   background-image: url(${(props) => props.imageUrl});
   background-size: cover;
    background-position: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    height: 200px;
    border-radius: 8px;


`;

export const CategoryButton = styled(Link)`
   color: #fff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5px;    
        font-weight: 500;
        margin-top: 50px;
        text-decoration: none;

        &:hover {
            background-color: ${(props) => props.theme.purple};
            opacity: 0.9;
        }
    
`;
