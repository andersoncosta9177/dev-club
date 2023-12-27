import styled from 'styled-components'

export const Button = styled.button`
   width: 342px;
   height: 58px;
   border: ${props =>props.isBack ? '1px solid #fff' : "none"};
   border-radius: 14px;
   background: ${props => props.isBack ? 'transparent' : 'rgba(0,0,0,0.8)'};
   color: #ddd;
   margin-top: 40px;
   text-decoration: none;
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


img{
   transform:  ${props => props.isBack  && 'rotateY(180deg)'};
}


`

