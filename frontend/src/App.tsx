import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import { Bussines } from './components/bussines'
import { Header } from './components/Header'
import { Title } from './components/Title'
import { HomePage } from './pages/HomePage'
import { PageNotFound } from './pages/PageNotFound'

function App() {


  return (
    <div className="App">
       <Bussines />
       <Header/>
       <Title/>
   <Routes>
        <Route index element={<Navigate to="/homepage" />} />
        <Route
          path="/homepage"
          element={<HomePage  />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
