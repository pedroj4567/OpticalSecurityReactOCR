import {BrowserRouter, Routes,Route} from 'react-router-dom'

import { OfficerLayout,AuthLayout } from "./layouts"

import { StartPage,VisitsPage,LoginPage } from './pages'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SendEmailVerificationPage from './pages/authPages/rememberPsw/SendEmailVerification';
import RememberPswPage from './pages/authPages/rememberPsw/RememberPswPage';
import CommunityPage from './pages/communityPage/CommunityPage';
import { ScanPlatePage } from './pages/ScanPlatePage/ScanPlatePage';
import { PrivateRoute } from './utils/PrivateRoute';
import RequireAuth from './utils/RequiredAuth';


function App() {

  return (
    <>
        <BrowserRouter>
            {/* <Routes >

                <Route path='/' element={<AuthLayout/>}>
                    <Route index element={<LoginPage/>}/>
                    <Route path='verify' element={<SendEmailVerificationPage/>}/>
                    <Route path='remember' element={<RememberPswPage/>}/>
                </Route>

                <Route path='/officer' element={<OfficerLayout/>}>
                    <Route index element={<StartPage/>}/>
                    <Route path='scan' element={<ScanPlatePage/>}/>
                    <Route path='visits' element={<VisitsPage/>}/>
                    <Route path='community' element={<CommunityPage/>}/>
                </Route>
            </Routes> */}
            <Routes>
                <Route path="/" element={<AuthLayout/>}>
                    <Route index element={<LoginPage/>}/>
                    <Route path="verify" element={<SendEmailVerificationPage/>}/>
                    <Route path="remember" element={<RememberPswPage/>}/>
                </Route>
                <Route element={<RequireAuth/>}>
                    <Route path='/officer' element={<OfficerLayout/>}>
                        <Route index element={<StartPage/>}/>
                        <Route path='scan' element={<ScanPlatePage/>}/>
                        <Route path='visits' element={<VisitsPage/>}/>
                        <Route path='community' element={<CommunityPage/>}/>
                    </Route>
                </Route>

                {/* <PrivateRoute path="/officer" element={<OfficerLayout/>}>
                    <Route index element={<StartPage/>}/>
                    <Route path="scan" element={<ScanPlatePage/>}/>
                    <Route path="visits" element={<VisitsPage/>}/>
                    <Route path="community" element={<CommunityPage/>}/>
                </PrivateRoute> */}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
