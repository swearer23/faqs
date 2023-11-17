import './index.css'

export default ({children, activeIndex}: {
  children: React.ReactNode[],
  activeIndex?: number
}) => {

  const active = activeIndex || 0

  return (
    <>
      <div className='tab-content'>
        {children?.map((child, index) => {
          if (index !== active) return ''
          return (
            <div key={index} className='tab-pane'>
              {child}
            </div>
          )
        })}
      </div>
    </>
  )
}