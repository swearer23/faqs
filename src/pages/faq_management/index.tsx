import './index.css'
import Tabs from '../../components/Tab'
import Button from '../../components/Button'
import TabContent from '../../components/TabContent'
import { useState } from 'react'
import AllFaq from './components/AllFaq'

export default () => {
  const [active, setActive] = useState(0)
  const onTabChange = (index: number) => {
    setActive(index)
  }
  return (
    <>
      <h1>FAQ Management</h1>
      <p className="desc">Training your AI Assistant with customised data. Supports: URL, PDF, Excel, Pptx, MP3, MP4/MOV</p>
      <div className="flex justify-between">
        <Tabs tabs={['Priority FAQ(30)', 'Conflicting(30)', 'Unanswered(30)']} onChange={onTabChange} />
        <div className='flex'>
          <Button style={{marginRight: '20px'}}>Import Data</Button>
          <Button theme='primary'>
            <div className='flex items-center'>
              <img src="/images/arrow-top-circle.svg" alt="" style={{marginRight: '8px'}} />
              <p>Add FAQ</p>
            </div>
          </Button>
        </div>
      </div>
      <TabContent activeIndex={active}>
        <AllFaq />
        <div className='faq-list'>
          <h1>Conflicting</h1>
        </div>
        <div className='faq-list'>
          <h1>Unanswered</h1>
        </div>
      </TabContent>
    </>
  )
}