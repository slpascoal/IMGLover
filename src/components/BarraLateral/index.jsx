import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const BarraLateralEstilizada = styled.aside`
    max-width: 212px;
`

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`

const BarraLateral = () => {
    return(
        <BarraLateralEstilizada>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao 
                        iconeAtivo="/icones/home-ativo.png"    
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-vistas-ativo.png"    
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-curtidas-ativo.png"    
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/novas-ativo.png"    
                        iconeInativo="/icones/novas-inativo.png"
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/surpreenda-me-ativo.png"    
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </BarraLateralEstilizada>
    )
}

export default BarraLateral