import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Skills from '../Skills/Skills'
import { memo } from 'react'

const Sections = memo(({ openModal, setOpenModal, darkImages, setDarkImages }) => {
    return (
        <Routes basename='/portfolio-react'>
            <Route path='/portfolio-react/' element={
                <Home
                    darkImages={darkImages}
                />
            } />
            <Route path='/portfolio-react/about' element={
                <About
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            } />
            <Route path='/portfolio-react/portfolio' element={
                <Portfolio
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            } />
            <Route path='/portfolio-react/skills' element={
                <Skills
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    darkImages={darkImages}
                />
            } />
        </Routes>
    )
})

export default Sections