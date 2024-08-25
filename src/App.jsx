import { BrowserRouter , Route , Routes } from "react-router-dom"
import Layout from "../Home/Layout";
import Home from "../Home/Home";
import ContactUs from "../Home/ContactUS/ContactUS";
import Photos from "../Home/Photos/Photos";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="photos" element={<Photos/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
