import Card from "./Card"
import * as S from "./main_styled"
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.png"

export default function Main() {

  return (
    <main>
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
