import styled from 'styled-components'
import Background from './assets/bg_image.svg'


export const Container = styled.div`
background: url("${Background}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100vh;
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


export const InputLabel = styled.p`
letter-spacing: -0.408px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px ;
color: #eee ;
padding-left: 20px;
margin-bottom: 6px;

`


export const Input = styled.input`
   background: rgba(255,255,255, 0.25);
   box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
   border-radius: 14px;
   border: none;
   width: 342px;
   height: 58px;
   outline: none;
   padding-left: 20px;
   color: #fff;
   font-weight: normal;
   font-size: 24px;
   line-height: 28px;
   margin-bottom: 29px;

   &::placeholder{
    color: #ddd;
   }
`





export const Button = styled.button`
   width: 342px;
   height: 58px;
   border: none;
   border-radius: 14px;
   background: rgba(0,0,0,0.8);
   color: #ddd;
   font-size: 20px;
   font-weight: bold;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;


   &:hover{
    opacity: 0.8;

   }

   &:active{
    opacity: 0.7;
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