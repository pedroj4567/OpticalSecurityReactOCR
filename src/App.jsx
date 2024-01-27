import { BrowserRouter, Routes, Route } from "react-router-dom";

import { OfficerLayout, AuthLayout } from "./layouts";

import { StartPage, VisitsPage, LoginPage } from "./pages";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SendEmailVerificationPage from "./pages/authPages/rememberPsw/SendEmailVerification";
import RememberPswPage from "./pages/authPages/rememberPsw/RememberPswPage";
import CommunityPage from "./pages/communityPage/CommunityPage";
// import { ScanPlatePage } from "./pages/ScanPlatePage/ScanPlatePage";
// import { PrivateRoute } from "./utils/PrivateRoute";
import RequireAuth from "./utils/RequiredAuth";
import Register from "./components/register/Register";
import AdminLayout from "./layouts/AdminLayout.jsx/AdminLayout";
// import { PeoplePage } from "./pages/communityPage/people/PeoplePage";
import { FamilyPage } from "./pages/communityPage/family/FamilyPage";

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
                    <Route path='community/people' element={<PeoplePage/>}/>
                    <Route path='community/family' element={<FamilyPage/>}/>
                </Route>
            </Routes>
             */}
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="register" element={<Register />} />
            <Route path="verify" element={<SendEmailVerificationPage />} />
            <Route path="remember" element={<RememberPswPage />} />
          </Route>

          <Route
            path="/Admin"
            element={
              <RequireAuth
                allowedRoles={["Admin"]} // Adjust the allowed roles based on your requirements
                layout={AdminLayout}
              />
            }
          >
            <Route index element={<StartPage />} />
            <Route path="visits" element={<VisitsPage />} />
            <Route path="peoples" element={<CommunityPage />} />
            <Route path="family" element={<FamilyPage />} />
          </Route>

          <Route
            path="/officer"
            element={
              <RequireAuth
                allowedRoles={["Officer"]} // Adjust the allowed roles based on your requirements
                layout={OfficerLayout}
              />
            }
          >
            <Route index element={<StartPage />} />
            <Route path="visits" element={<VisitsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
