import Header from './layouts/header'
import Sidebar from './layouts/sidebar'
import Content from './layouts/content'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className='main flex'>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default App
