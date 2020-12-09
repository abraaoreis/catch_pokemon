import styled from "styled-components";

import img from "assets/images/pageBackground.png";

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;
  background-position:center center;
`;

export const AshImage = styled.img`
  position:absolute;
  top:50%;
  left:50%;
`;
export const TootipImage = styled(AshImage)`
 @media(max-width:414px){
    top:41.5%;
 }
 top:45%;  
  
`
