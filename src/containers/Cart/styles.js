import styled from "styled-components";
import Texture from "../../assets/texture.svg";
import Background from "../../assets/background.png";

export const Container = styled.div`
width: 100%;
background: linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
),url('${Background}');
background-size: cover;
background-position: center;
min-height: 100vh;

`;

export const Banner = styled.div`
background: url(${Texture});
background-size: cover;
background-position: center;
background-color:#1f1f1f;
display: flex;
justify-content: center;
align-items: center;
position: relative;
height: 180px;

img{
height:145px;
}

`;

export const Title = styled.h1`
font-size: 32px;
font-weight: 800;
padding-bottom: 12px;
color: #61a120;
text-align: center;
position:Relative;

&:: after{
position: absolute;
left: 50%;
transform: translateX(-50%);
bottom: 0;
content: "";
width: 56px;
background-color: #61a120;
height: 4px;

}
`;

export const Content = styled.div`
display:grid;
grid-template-columns: 1fr 32%;
width: 100%;
max-width: 1280px;
padding: 40px;
margin: 0 auto;
gap: 32px;
`;

export const Return= styled.button`
display: flex;
justify-content: center;
align-items: center;
width:10%;
height: 30px;
border: none;
border-radius: 5px;
background-color: ${(props) => props.theme.purple};
font-family: "Road Rage", serif;
font-size: 30px;
color: #fff;
margin:80px auto 0 auto;

&:hover {
    background: #6f357c;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='53' stroke-linecap='square'/%3e%3c/svg%3e");
border-radius: 5px;
}

`;

