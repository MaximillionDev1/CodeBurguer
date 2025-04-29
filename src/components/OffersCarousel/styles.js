import styled from "styled-components";

export const CarouselContainer = styled.div`
`;

export const Container = styled.div`
.carousel-item {  
padding-right:40px;

}

overflow-x: hidden;

.react-multi-carousel-list {
    
    overflow:visible !important;
}

padding-left:40px;
padding-bottom:40px;
`;
export const Title = styled.h2`
   font-size: 32px;
    font-weight: 700;
   color:#61a120;
   padding-bottom: 12px;
   position: relative;
   text-align: center;
   margin: 70px 0;




   &::after {
   content: "";
    position: absolute;
    bottom: 0px;
    width: 56px ;
    height: 4px;
    background: #61a120;
    left: 50%;
    transform: translateX(-50%);

`;
