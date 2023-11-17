import './header.css'

export default () => {
  return (
    <>
      <header className='header flex justify-between'>
        <div className='flex items-center'>
          <img src="/src/assets/images/logo.png" className='mr-2' alt="" />
          <span><img src="/src/assets/images/name.png" alt="" /></span>
        </div>
        <div className='flex items-center'>
          <img src='/images/global.png' />
          <span className='ml-2'>English</span>
        </div>
      </header>
    </>
  )
}