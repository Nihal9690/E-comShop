
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import UserState from './context/UserState.jsx'
import UserState2 from './context/UserState2.jsx'

createRoot(document.getElementById('root')).render(
  <UserState2>
  <UserState>
    <App />
  </UserState>,
  </UserState2>
)
