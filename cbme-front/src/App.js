import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Sobre from './pages/Institucional/Sobre'
import Missao from './pages/Institucional/MissaoValores'
import Equipe from './pages/Institucional/Equipe'
import Parceiros from './pages/Institucional/Parceiros'
import Admin from './pages/Admin'
import Cursos from './components/Cursos'
import CursoDetalhes from './pages/CursoDetalhes'
import Saude from './components/Saude'
import EspecialidadeDetalhes from './pages/EspecialidadeDetalhes'
import EmBrevePage from './pages/EmBrevePage'
import ContatoPage from './pages/ContatoPage'
import TrabalheConosco from './pages/TrabalheConosco'

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    })
  }, [])

  return (
    <div className='overflow-hidden'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/missao" element={<Missao />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/:slug" element={<CursoDetalhes />} />
        <Route path="/saude" element={<Saude />} />
        <Route path="/saude/:slug" element={<EspecialidadeDetalhes />} />
        <Route path="/concursos" element={<EmBrevePage />} />
        <Route path="/oab" element={<EmBrevePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />


      </Routes>
    </div>
  )
}

export default App