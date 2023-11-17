import './index.css'
import { useState } from 'react'

export default ({tabs, activeIndex, onChange}: {
  tabs: string[],
  activeIndex?: number,
  onChange?: (index: number) => void
}) => {

  const [active, setActive] = useState(activeIndex || 0)

  const changeActiveIndex = (index: number) => {
    setActive(index)
    if (onChange) {
      onChange(index)
    }
  }

  return (
    <>
      <div className='tabs flex'>
        {
          tabs.map((tab, index) => {
            const classname = index === active ? 'tab active' : 'tab'
            return (
              <a key={index} className={classname} onClick={() => changeActiveIndex(index)}>
                {tab}
              </a>
            )
          })
        }
      </div>
    </>
  )
}