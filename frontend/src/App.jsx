import { BrowserRouter } from "react-router-dom";
import Router from './Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css'
import './responsive/responsive.css'

function App() {

  return (
    <div className="bg-dark">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )
}

export default App
