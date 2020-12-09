import React from "react";

import Button from "components/Button";

import iconPlus from "assets/images/plus.png";

import * as S from "./styled";

const Sidebar = ({pokemons = [],onClick}) => (
  <S.SideBarWrapper>
    <S.SideBarList>
      <S.SideBarItem>?</S.SideBarItem>
    </S.SideBarList>
    <Button icon={iconPlus} onClick={()=>onClick()}/>
  </S.SideBarWrapper>
);

export default Sidebar;
