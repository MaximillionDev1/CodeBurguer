import styled from "styled-components";
import BannerHamburger from "../../assets/banner-hamburguer.svg";
import Background from "../../assets/background.png";
import { Link } from "react-router";
import { ReturnButton } from "../../components/ReturnButton";

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;

background: linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
),url('${Background}');



`;

export const Banner = styled.div`
background-image: url(${BannerHamburger}) ;
background-repeat: no-repeat;
background-color: #1f1f1f;
background-size: cover; 
background-position: center;




display: flex;
align-items: center;
justify-content: center;
height: 480px;
width: 100%;
position: relative;

h1{
font-family: 'Road Rage', sans-serif;
font-size: 80px;
line-height: 65px;
color: #fff;
position: absolute;

right: 20%;
top: 30%;
}

span{
display: block;
color: #fff;
font-size: 20px;
font-weight: 400;
font-style: normal;
`;

export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 50px;
`;

export const CategoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
background:none;
color:${(props) => (props.$isActiveCategory ? (props) => props.theme.purple : "#696955")};
font-size: 24px;
font-weight: 700;
padding-bottom: 5px;
line-height: 20px;
border:none;
border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};




`;

export const ProductsContainer = styled.div`
display:grid;
grid-template-columns: repeat(3, 1fr);
padding: 40px;
justify-content: center;
max-width: 1280px;
gap: 60px;
margin: 50px auto 0 auto;


`;

export const ReturnButtonStyled = styled(ReturnButton)`
margin: 0 auto;
width: 15%;`;
