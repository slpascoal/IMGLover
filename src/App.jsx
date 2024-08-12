import styled from "styled-components"
import EstilosGlobais from './components/EstilosGlobais'
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"

const FundoGradiente = styled.div`
  background: linear-gradient(180deg, rgba(0,24,72,1) 0%, rgba(48,24,96,1) 35%, rgba(72,48,120,1) 100%);
  width: 100%;
  min-height: 100vh;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />
    </FundoGradiente>
  )
}

export default App
