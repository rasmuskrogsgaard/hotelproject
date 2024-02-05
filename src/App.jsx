import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider, Route, Router} from "react-router-dom"
import './App.css'
import { Frontpage } from './pages/Frontpage/Frontpage'
function App() {
  
  return (
  
<>
<createBrowserRouter>
  <Router>
    <Route path="/" component={Frontpage} />
  </Router>
</createBrowserRouter>
</>
    
  )
}

export default App
