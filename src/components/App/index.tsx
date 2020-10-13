import React from 'react'
import { Route, Routes } from 'react-router'
import { Cookbooks } from '../../screens/Cookbooks'
import { FrontDoor } from '../../screens/FrontDoor'
import { AppLayout } from '../AppLayout'

export const App = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Cookbooks />} />
    </Route>
    <Route path="/welcome" element={<FrontDoor />} />
  </Routes>
)
