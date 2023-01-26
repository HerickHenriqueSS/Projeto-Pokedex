
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import HomePokemon from './pages/home/HomePokemon'
import AnwerPokemon from './pages/pokemon/AnwerPokemon'
import AnwerRegion from './pages/region/AnwerRegion'
import AnwerTypes from './pages/types/AnwerTypes'

function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<HomePokemon />}/>
          <Route path = '/types/' element={<AnwerTypes />}/>
          <Route path = '/regions/' element={<AnwerRegion />}/>
          <Route path = '/pokemon/:id' element={<AnwerPokemon />}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App
