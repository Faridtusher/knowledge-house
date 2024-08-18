import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Contents from './components/contents/Contents'
import Header from './components/Header/Header'

function App() {

  const [carts, setCarts] = useState([])
  const [readingTimes, setReadingTimes] = useState(0)
  
  const handelAddToCarts = (content) => {
    const newCarts = [...carts, content]
    setCarts(newCarts)
  }

  const handelTimes = (id, time) =>{
    const newTimes = readingTimes + time;
    setReadingTimes(newTimes)

    // remove the read blog from the cart
    const remainingCarts = carts.filter(cart => cart.id !== id)
    setCarts(remainingCarts)
  }

  return (
    <>
    <Header></Header>

    <div className='flex justify-between mx-40 my-10'>
      <Contents handelAddToCarts = {handelAddToCarts} handelTimes = {handelTimes}> </Contents>
      <Carts readingTimes = {readingTimes} carts ={carts} handelTimes = {handelTimes}> </Carts>
    </div>

    </>
  )
}

export default App
