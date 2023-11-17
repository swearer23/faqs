import './index.css'

export default ({children, url, style} : {
  children: React.ReactNode,
  url: string,
  style?: React.CSSProperties
}) => {
  return (
    <>
      <div className="alert flex" style={style}>
        <img src="/images/warn.svg" alt="" />
        <p className='grow'>
          {children}
        </p>
        <a target='_blank' href={url}>View now</a>
      </div>
    </>
  )
}