import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #001848;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="https://github.com/slpascoal/IMGLover" target='_blank'>
                        <img src="/imagens/sociais/github.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://portfolio-silas-psi.vercel.app/" target='_blank'>
                        <img src="/imagens/sociais/dev.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/msi.lp/" target='_blank'>
                        <img src="/imagens/sociais/instagram.svg" alt="" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Silas L. Pascoal</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;