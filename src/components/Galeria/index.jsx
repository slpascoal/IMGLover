import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
`

const SessaoFluida = styled.section`
    flex-grow: 1;
    width: 100%;
`
const FotosContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, setTag}) => {
    return(
        <>
            <Tags setTag={setTag}/>
            <GaleriaContainer>
                <SessaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <FotosContainer>
                        {fotos.map(foto => <Imagem 
                            key={foto.id} 
                            fotoPrincipal={foto.path}
                            tituloFoto={foto.titulo}
                            fonte={foto.fonte}
                            foto={foto}
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                        />)}
                    </FotosContainer>
                </SessaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria