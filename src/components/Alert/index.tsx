import './index.css'

export default ({children, url} : {
  children: React.ReactNode,
  url: string
}) => {
  return (
    <>
      <div className="alert flex">
        <img src="/images/warn.svg" alt="" />
        <p className='grow'>
          {children}
        </p>
        <a target='_blank' href={url}>View now</a>
      </div>
    </>
  )
}