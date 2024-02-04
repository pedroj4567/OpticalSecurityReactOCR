import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ServiceProvider from './context/Services/ServiceProvider.jsx'
import { FamilyProvider } from './context/familyContext/FamilyProvider.jsx'
import AuthProvider from './context/authContext/AuthProvider.jsx'
import { PeopleProvider } from './context/peopleContext/PeopleProvider.jsx'
import { RecognitionProvider } from './context/recognitionProvider/RecognitionProvider.jsx'
import { UsersProvider } from './context/usersContext/UsersProvider.jsx'
import { VisitsProvider } from './context/visitsContext/VisitsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VisitsProvider>
      <UsersProvider>
        <RecognitionProvider>
          <PeopleProvider>
            <AuthProvider>
              <FamilyProvider>
                <App />
              </FamilyProvider>
            </AuthProvider>
          </PeopleProvider>
        </RecognitionProvider>
      </UsersProvider>
    </VisitsProvider>
  </React.StrictMode>
)
