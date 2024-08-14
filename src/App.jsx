import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from "../Componets/Home"
import ContactUs from "../Componets/ContactUS"
import Layout from "../Componets/Layout"




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
