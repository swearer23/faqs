import Header from './layouts/header'
import Sidebar from './layouts/sidebar'
import './components/UserCard'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className='main'>
        <Sidebar />
      </div>
    </>
  )
}

export default App
