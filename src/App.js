import { useState, useEffect, useReducer } from 'react'
import { Routes, BrowserRouter, Route } from "react-router-dom"

import { DataContext, initialState, reducer } from './global/global-state'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RocketList from "./components/RocketList";
import Rocket from './components/Rocket';

function App() {
  const [data, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <DataContext.Provider value={{ data: data, dispatch: dispatch }}>
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <RocketList />
            </>
          } />
          <Route path="/:id" element={<Rocket />} />
        </Routes>

      </div>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
