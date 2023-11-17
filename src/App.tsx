import Header from './layouts/header'
import Sidebar from './layouts/sidebar'
import './components/UserCard'
import './App.css'
import UserCard from './components/UserCard'

function App() {

  return (
    <>
      <Header />
      <div className='main'>
        <Sidebar />
        <UserCard />
      </div>
    </>
  )
}

export default App
