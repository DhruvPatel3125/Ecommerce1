import { Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Homepages from './pages/Homepages'
import About from './pages/About'
import PageNot from './pages/PageNot'
import Register from './pages/Auth/Register'
import {TostContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App(){

  return (
    <>
   
     <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNot />} />
     </Routes>

    </>
  )
}

export default App
