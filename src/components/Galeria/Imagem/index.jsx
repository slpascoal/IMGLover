import styled from "styled-components"

const FigureEstilizado = styled.figure`
    margin: 0;
    width: ${(props) => (props.$expandido ? '1156px' : '448px')};
    height: ${(props) => (props.$expandido ? '740px' : '336px')};
    box-shadow: 0px 4px 4px 0px #00000026;

    display: flex;
    flex-direction: column;

    border-radius: 20px;
`

const IMGPrincipal = styled.img`
    margin: 0;
    width: 100%;
    height: ${(props) => (props.$expandido ? '660px' : '256px')};

    border-radius: 20px 20px 0px 0px;
`

const LegendaEstilizada = styled.figcaption`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 20px;
    
    margin: 0;
    height: 80px;
    background: #001634;

    border-radius: 0px 0px 20px 20px;
`

const FooterIMG = styled.footer`
    h3{
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;

        color: white;
    }

    span{
        font-size: 16px;
        font-weight: 400;
        line-height: 19.2px;
        text-align: left;

        color: white;

    }
`

const IconesIMG = styled.div`
    display: flex;
    gap: 15px;

    margin-top: 20px;

    button{
        background-color: transparent;
        border: 0px solid;
        cursor: pointer;
    }
`

const Imagem = ({fotoPrincipal, tituloFoto, fonte, foto, aoZoomSolicitado, expandido = false, aoAlternarFavorito}) => {
    const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png"
    
    return(
        <FigureEstilizado $expandido={expandido}>
            <IMGPrincipal src={fotoPrincipal} alt="" $expandido={expandido}/>
            <LegendaEstilizada>
                <FooterIMG>
                    <h3>{tituloFoto}</h3>
                    <span>{fonte}</span>
                </FooterIMG>
                <IconesIMG>
                    <button onClick={() => aoAlternarFavorito(foto)}><img src={iconeFavorito} /></button>
                    {!expandido && <button onClick={()=> aoZoomSolicitado(foto)}><img src="/icones/expandir.png" /></button>}
                </IconesIMG>
            </LegendaEstilizada>
        </FigureEstilizado>
    )
}

export default Imagem