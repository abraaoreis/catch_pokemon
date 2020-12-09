import React , {useState} from "react";
import Sidebar from "components/Sidebar";
import * as S from "./styled";
import { SearchingPokemon } from 'services/searchingPkm'

const MapPage = () => {
  const [tooltip, setTootip ] = useState({search:false,loading:false,error:false})
  const ashFront = require('assets/images/ashFront.png');
  const ashStop = require('assets/images/ashStop.png');
  const searchTooltip = require('assets/images/searchTooltip.png');
  const searchingTooltip = require('assets/images/searchingTooltip.png');

  const searchingPokemon = async () => {
    try {
      setTootip({loading:true})
      const pokemon = await SearchingPokemon();
    } catch (error) {
      setTootip({error:true})
    }
  }

  const addPokemon = () => {
    
  } 
  return(
    <S.MapWrapper className="map">
      <Sidebar onClick={()=>addPokemon()}/>
      {tooltip.search && <S.TootipImage src={searchTooltip} alt="tooltip"/>}
      {tooltip.loading && <S.TootipImage src={searchingTooltip} alt="tooltip"/>}
      {tooltip.error && <S.TootipImage src={searchTooltip} alt="tooltip"/>}
      <S.AshImage src={tooltip.loading ? ashStop : ashFront} alt="ash" 
        onMouseOver={()=>{setTootip({search:true})}} 
        onMouseOut={()=>{setTootip({search:false})}}
        onClick={()=>searchingPokemon()} 
      />
    </S.MapWrapper>
  )
};

export default MapPage;
