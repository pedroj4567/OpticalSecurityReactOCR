import {BrowserRouter, Routes,Route} from 'react-router-dom'

import { OfficerLayout } from "./layouts"

import { StartPage,VisitsPage } from './pages'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes >
                <Route path='/officer' element={<OfficerLayout/>}>
                    <Route index element={<StartPage/>}/>
                    <Route path='visits' element={<VisitsPage/>}/>
                </Route>
            </Routes>


        </BrowserRouter>
    </>
  )
}

export default App
