import styled from "styled-components"
import Imagem from "../Galeria/Imagem"

const Overlay = styled.div`
    background-color: rgba(0,0,0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background-color: transparent;
    padding: 0;
    border: 0px solid;
    border-radius: 20px;

    form button{
        background-color: transparent;
        border: 0px solid;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        margin: 30px;
    }
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return(
        <>
            {foto && <>
                <Overlay />
                    <DialogEstilizado open={!!foto} onClose={aoFechar}>
                        <Imagem 
                            fotoPrincipal={foto.path}
                            tituloFoto={foto.titulo}
                            fonte={foto.fonte}
                            foto={foto}
                            expandido={true}
                            aoAlternarFavorito={aoAlternarFavorito}
                        />
                        <form method="dialog">
                            <button><img src="/icones/fechar.png" alt="" /></button>
                        </form>
                    </DialogEstilizado>
                </>
        }
        </>
    )
}

export default ModalZoom