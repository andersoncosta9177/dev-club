import styled from 'styled-components'
import Background from '../../assets/bg_image.svg'
import { Link } from 'react-router-dom'

export const Container = styled.div`
background: url("${Background}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100%;
min-height: 100vh;
`


export const Image = styled.img`
margin-top: 30px;


`

export const ContainerItens = styled.div`
background: linear-gradient(
    157.44deg,
     rgba(255,255,255, 0.6) 0.84%,
     rgba(255,255,255, 0.6) 0.85%,
     rgba(255,255,255, 0.15) 100%
);
border-radius:  61px;
backdrop-filter: blur(45px);
padding: 50px 36px;
display: flex;
flex-direction: column;
height: 100vh;

`

export const H1 = styled.h1`
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 40px;
text-align: center;
color: #fff;
margin-bottom: 80px ;
`




export const Button = styled(Link)`
   width: 342px;
   height: 58px;
   border: 1px solid white;
   border-radius: 14px;
   background: transparent;
   color: #ddd;
   font-size: 20px;
   font-weight: bold;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   margin-top: 120px;
   text-decoration: none;


   &:hover{
    opacity: 0.8;

   }

   &:active{
    opacity: 0.7;
   }
   img{
   transform: rotate(180deg);

   }
`

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
background: rgba(255,255,255, 0.25);
   box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
   border-radius: 14px;
   border: none;
   width: 342px;
   height: 58px;
   outline: none;
   color: #ddd;
   margin-top: 20px;


   p{
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      color: #fff;
   }

   button{
      background: none;
      border: none;
      cursor: pointer;
   }

`