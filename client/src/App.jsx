import { Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Homepages from './pages/Homepages'
import About from './pages/About'
import PageNot from './pages/PageNot'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import DashBord from './pages/user/DashBord'
import PrivateRoute from './components/layouts/Routes/Privaate'
import ForgotPassword from './pages/Auth/ForgotPassword'
import AdminDashbord from './pages/Admin/AdminDashbord'
import AdminRoute from './components/layouts/Routes/AdminRoute'
function App(){

  return (
    <>
   
     <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/dashboard" element={<PrivateRoute/>}>
        <Route path="user" element={<DashBord />} />
         </Route>
         <Route path="/dashboard" element={<AdminRoute />} >
         <Route path="admin" element={<AdminDashbord />} />
         </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNot />} />
     </Routes>

    </>
  )
}

export default App
