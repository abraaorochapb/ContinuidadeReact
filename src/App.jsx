import './App.css'

{/* Importando a imagem dos assets */}
import borushiki from './assets/279ea37834435b42702507635d9f57d0.jpg'

{/*useState*/}
import Data from './components/Data'

{/* Renderização de listas */}
import ListRender from './components/ListRender'


function App() {

  return (
    <>
      <div className='App' style={{paddingBottom: '500px'}}>
        <h1>Avançando em React</h1>
        <h2>Inserindo imagens</h2>
        {/* Imagem oriunda de assets*/}
        <img src={borushiki}/>
      
        {/* Imagem oriunda de public*/}
        <img src='./Joestars.jpg'/>
        <Data/>
        <ListRender/>
        
      </div>
      
    </>
  )
}

export default App