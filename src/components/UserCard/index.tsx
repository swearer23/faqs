import './index.css'

export default () => {
  return (
    <>
      <div className="user-card">
        <div className='avatar-container'>
          <img src="/images/Avatar.png" alt="" />
          <div className='status'></div>
        </div>
        <div className='user-info grow'>
          <p className='user-name'>Ryan Lee</p>
          <p className='user-role'>Premium</p>
        </div>
        <div className='user-action justify-self-end'>
          <img src="/images/more.png" alt="" />
        </div>
      </div>
    </>
  )
}