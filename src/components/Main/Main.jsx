import Card from "./Card"
import * as S from "./main_styled"
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.png"
import mac from "../../assets/bigmac.png"
import batata from "../../assets/batata.png"
import sorvete from "../../assets/sorvete.png"
import frita from "../../assets/frita.png"
import supmac from "../../assets/supermac.png"
import supcasca from "../../assets/supcasca.png"
import { useState } from "react"

export default function Main() {

  const[item, setItem] = useState(mac)

  function casquinha(){
    setItem(supcasca)
  }


  return (
    <main>
      <S.BoxProdutos>
        <S.Caixa>
        <S.Principal>
          <img src={item} alt="" />
        </S.Principal>
        <h2>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>?</h2>
        </S.Caixa>
        <S.Opcao>
          <img onClick={()=>{setItem(supmac)}} src={mac} alt="" />
          <img onClick={()=>{setItem(frita)}} src={batata} alt="" />
          <img onClick={casquinha} src={sorvete} alt="" />
        </S.Opcao>
      </S.BoxProdutos>
        <S.Promocao>
            <h2>Promoção</h2>
            <S.Center>
           <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
           <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
           <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
            </S.Center>
        </S.Promocao>
    </main>
  )
}
