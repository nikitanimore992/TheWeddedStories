import { BrowserRouter , Route , Routes } from "react-router-dom"
import Layout from "../Home/Layout";
import Home from "../Home/Home";
import ContactUs from "../Home/ContactUS/ContactUS";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
