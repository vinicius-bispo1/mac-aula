import styled,{css} from "styled-components";

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Promocao = styled.section`
background-color: #FEB706;
height: 70vh;
${center}
flex-direction: column;
justify-content: space-around;
h2{
    color: white;
}
`
export const Center = styled.div`
/* border: solid 2px red; */
width: 70vw;
${center}
justify-content: space-around;
`
export const Card = styled.div`
/* border: solid 2px green; */
height: 40vh;
text-align: center;
background-color: white;
border-radius: 13px;
p{
   /* border: solid 2px green;  */
   height: 9vh;
   ${center}
}
button{
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
}
`

export const BoxProdutos = styled.section`

height: 80vh;
background-color: #FFC72C;
${center}
flex-direction: column;
justify-content: space-around;
`

export const Opcao = styled.figure`

width: 38vw;
${center}
justify-content: space-around;
img{
    cursor: pointer;
}
`

export const Principal = styled.div`

height: 40vh;
img{
    width: 20vw;
}
`

export const Caixa = styled.div`

${center}
justify-content: space-between;
height: 80vh;
width: 90vw;
h2{
    
    font-size: 5rem;
    color: white;
    width: 50vw;
    span{
        color: red;
    }
}
`