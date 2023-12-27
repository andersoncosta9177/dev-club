import styled from 'styled-components'
import Background from '../../assets/bg_image.svg'
// import { Link } from 'react-router-dom'

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





