import React from 'react'
import { Route, Routes } from 'react-router'
import { AppLayout } from '../AppLayout'
import { Cookbooks } from '../Cookbooks'
import { FrontDoor } from '../FrontDoor'

export const App = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="cookbooks" element={<Cookbooks />} />
    </Route>
    <Route path="/welcome" element={<FrontDoor />} />
  </Routes>
)
