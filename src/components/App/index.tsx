import React from 'react'
import { Route, Routes } from 'react-router'
import { Cookbooks } from '../Cookbooks'
import { FrontDoor } from '../FrontDoor'

export const App = () => (
  <Routes>
    <Route path="/" element={<FrontDoor />} />
    <Route path="/cookbooks" element={<Cookbooks />} />
  </Routes>
)
