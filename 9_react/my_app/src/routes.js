import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Users from './containers/Users'


function Rotas() {
    return (

        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/usuarios' element={<Users/>} />
            </Routes>

        </Router>

    )
}
export default Rotas