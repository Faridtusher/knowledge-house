
import './App.css'
import Carts from './components/Carts/Carts'
import Contents from './components/contents/Contents'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header></Header>
    <div className='flex justify-between mx-40 my-10'>
      <Contents></Contents>
      <Carts></Carts>

    </div>
    

    </>
  )
}

export default App
