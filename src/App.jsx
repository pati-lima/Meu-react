import Header from "./componentes/Header"
import Bio from "./componentes/Bio"
import Cards from "./componentes/Cards"
import Footer from "./componentes/Footer"
import './App.css'

function App() {
  

  return (
    <div className="App" >
      <Header tituloPrincipal ='Meus conteúdos favoritos'/>
      <Bio />
      <Cards />
      <Footer rodape ="Feito com ♡ por Paty Lima. E todos os direitos são reservados."/>
    </div>
  )
}

export default App
