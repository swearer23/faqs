import Header from './layouts/header'
import Sidebar from './layouts/sidebar'
import Content from './layouts/content'
import { Toaster } from "@/components/ui/toaster"
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className='main flex'>
        <Sidebar />
        <Content />
      </div>
      <Toaster />
    </>
  )
}

export default App
