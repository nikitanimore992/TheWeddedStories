import { BrowserRouter , Route , Routes } from "react-router-dom"
import Layout from "../Home/Layout";
import Home from "../Home/Home";
import ContactUs from "../Home/ContactUS/ContactUS";
import Photos from "../Home/Photos/Photos";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Photographer from "../Home/Photographer";
import Portfolio from "../Home/Porfolio/Porfolio";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="photos" element={<Photos/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
          <Route path="Photographer" element={<Portfolio/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
