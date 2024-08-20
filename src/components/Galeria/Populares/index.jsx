import styled from "styled-components"
import Titulo from "../../Titulo"

const PopularesContainer = styled.section`
   width: 300px;
`

const PopularesGaleria = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    img{
        width: 100%;
        border-radius: 20px;
    }

    button{
        transition: 0.5s;
        background-color: transparent;
            &:hover{
                background-color: #00000024;
                transition: 0.5s;
            }
        border: 2px solid;
        border-radius: 10px;
        padding: 20px 10px;

        color: white;
        border-color: #906090;

        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        text-align: center;

        cursor: pointer;
    }
`

const Populares = () => {
    return(
        <PopularesContainer>
            <Titulo $alinhamento='center'>Populares</Titulo>
            <PopularesGaleria>
                <img src="/imagens/populares/foto-1.png" />
                <img src="/imagens/populares/foto-2.png" />
                <img src="/imagens/populares/foto-3.png" />
                <img src="/imagens/populares/foto-4.png" />
                <img src="/imagens/populares/foto-5.png" />
                <button>Ver mais</button>
            </PopularesGaleria>
        </PopularesContainer>
    )
}

export default Populares