import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Contents from './components/contents/Contents'
import Header from './components/Header/Header'

function App() {

  const [carts, setCarts] = useState([])
  
  const handelAddToCarts = (content) => {
    const newCarts = [...carts, content]
    setCarts(newCarts)
  }


  return (
    <>
    <Header></Header>
    <div className='flex justify-between mx-40 my-10'>
      <Contents 
      handelAddToCarts = {handelAddToCarts}
      >
      </Contents>
      <Carts 
      carts ={carts}
      
      ></Carts>

    </div>
    

    </>
  )
}

export default App
