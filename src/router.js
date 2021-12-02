import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from './views/landing/landing'
import CurriculumForm from './views/curriculum';

const CustomRoutes = () => {
  return (
    
      <Routes>
        <Route index element={<Landing />}/>
        <Route path="/curriculum" element={<CurriculumForm />}/>
      </Routes>
  )
}

export default CustomRoutes;
