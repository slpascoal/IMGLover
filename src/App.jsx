import styled from "styled-components"
import EstilosGlobais from './components/EstilosGlobais'
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import fotos from './fotos.json'
import { useEffect, useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Rodape from "./components/Rodape"

const FundoGradiente = styled.div`
  background: linear-gradient(180deg, rgba(0,24,72,1) 0%, rgba(48,24,96,1) 100%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  max-width: 99%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoComZoom, setFotoComZoom] = useState(null)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [filtro, tag])

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoComZoom?.id) {
      setFotoComZoom({
        ...fotoComZoom,
        favorita: !fotoComZoom.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho 
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner 
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage="/banner.png" 
            />
            <Galeria 
              aoFotoSelecionada={foto => setFotoComZoom(foto)} 
              fotos={fotosDaGaleria}
              aoAlternarFavorito={aoAlternarFavorito}
              setTag={setTag}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotoComZoom} 
        aoFechar={() => setFotoComZoom(null)} 
        aoAlternarFavorito={aoAlternarFavorito}
        
      />
      <Rodape />
    </FundoGradiente>
  )
}

export default App
