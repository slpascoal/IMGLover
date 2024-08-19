import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"

const GaleriaContainer = styled.div`
    display: flex;
`

const SessaoFluida = styled.section`
    flex-grow: 1;
`


const Galeria = () => {
    return(
        <>
            <Tags />
            <GaleriaContainer>
                <SessaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                
                </SessaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria