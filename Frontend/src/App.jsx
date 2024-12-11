import { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Component/Footer/Footer'
import LogInPopup from './Component/LogInPopup/LogInPopup'



export const routes = [
  { path: '/', element: <Home /> },
  { path: '/cart', element: <Cart /> },
  { path: '/order', element: <PlaceOrder /> },
]; 

function App() {
     const[showlogin,setshowlogin] = useState(false);
    
  return ( 
    <>
      {showlogin? <LogInPopup setshowlogin={setshowlogin}/> : <></>}
    <div className="app">
    <Navbar  setshowlogin = {setshowlogin}/>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
    <Footer/>
   
    </>
  );
}

// function App() {
  

//   return (
//     <div className='app'>
//      <Navbar/>
//      <Routes>
//       <Route path='/' element={< Home/>}></Route>
//       <Route path='/cart' element={< Cart/>}></Route>
//       <Route path='/order' element={< PlaceOrder/>}></Route>
     
//      </Routes>
    
//     </div>
//   )
// }

export default App
