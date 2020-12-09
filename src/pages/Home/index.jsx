import React from "react";

import * as S from "./styled";
import Button from "components/Button";
import { useHistory } from "react-router-dom";
import pokemonLogo from "assets/images/pokemonLogo.png"


const HomePage = () => {
  const history = useHistory();
  const goToMap = () => {
    history.push('/map')
  }
  return(
    <S.HomeWrapper>
      <img src={pokemonLogo} alt="pokemon-logo" />
      <Button 
        text="Start"
        onClick={goToMap}
      />
    </S.HomeWrapper>
  )
};

export default HomePage;
