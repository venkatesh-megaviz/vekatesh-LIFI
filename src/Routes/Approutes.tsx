import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Layout from '../Layout/Layout'
import Contact from '../Components/Contact'
import Vision from '../Components/Vision'
import Stakeholder from '../Components/Stakeholder'
import Login from '../Auth/Login'
import ForgotOtp from '../Auth/ForgotOtp'
import ForgotPassword from '../Auth/Forgotpassword'
import Resetpassword from '../Auth/Resetpassword'
import Userlogin from '../Auth/Userlogin'
import Avatar from '../Components/Avatar'
import Playoption from '../Components/Play'
import Career from '../Components/Career'
import Support from '../Components/Support'
import Blog from '../Components/Blog'
import Founder from '../Components/Founder'
import TermsAndConditions from '../Components/Terms'
import Policy from '../Components/Policy'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store/store'


const ProtectedRoute = ({ children }: any) => {
  const { loginremainingtime } = useSelector((state: RootState) => state.auth);
  if (loginremainingtime > 0) {
    return <Navigate to="/login" replace />;
  }

  const token = localStorage.getItem('token') || '';
  return token ? children : <Navigate to="/" replace />;
};
export default function AppRoutes() {
  
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        {/* Auth Routes */}
        {/*Protected Routes*/}
        <Route path="/userlogin" element={<ProtectedRoute><Userlogin /></ProtectedRoute>} />
        <Route path="/avatar" element={<ProtectedRoute><Avatar /></ProtectedRoute>} />
        <Route path="/play" element={<ProtectedRoute><Playoption /></ProtectedRoute>} />
        <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
        {/*Protected Routes*/}


        <Route path='/otpverify' element={<ForgotOtp />} />
        <Route path='/referalid' element={<Userlogin />} />
        <Route path='/claimcoin' element={<Userlogin />} />
        <Route path='/referalcomplete' element={<Userlogin/>}/>

        {/* Public Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/career" element={<Career />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions open={true} />} />
        <Route path="/privacy-policy" element={<Policy open={true} />} />
        <Route path="/stakeholder" element={<Stakeholder />} />
         {/* Public Pages */}
      </Route>
    </Routes >

  )
}
