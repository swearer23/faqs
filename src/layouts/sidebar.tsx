import './sidebar.css'
import UserCard from '../components/UserCard'

export default () => {
  return (
    <>
      <div className="sidebar-container">
        <div className='sidebar-top'>
          <img className='avatar' src="/images/Avatar.png" alt="" />
          <div className='grow'>
            <p className='text-white'>BTC Coin Community</p>
            <p className='' style={{
              color: '#D7FF1F'
            }}>12,500 members</p>
          </div>
          <img className='justify-self-end' src="/images/down.png" alt="" />
        </div>
        <div className='sidebar-section'>
          <p className='title'>GENERAL</p>
          <ul>
            <li className='flex items-center'>
              <img src="/images/dashboard-icon.png" alt="" />
              <p>Dashboard</p>
            </li>
            <li className='flex items-center'>
              <img src="/images/Setup.png" alt="" />
              <p className='grow'>Setup in channels</p>
              <div className='badge justify-self-end'>Essential</div>
            </li>
            <li className='sub-menu'>
              <ul>
                <li>hello world</li>
              </ul>
            </li>
            <li className='flex items-center active'>
              <img src="/images/Bot.png" alt="" />
              <p className='grow'>AI Data Training</p>
              <div className='badge justify-self-end'>Essential</div>
            </li>
            <li className='sub-menu'>
              <span>Data Import</span>
              <span className='active'>FAQ Management</span>
            </li>
            <li className='flex items-center'>
              <img src="/images/History.png" alt="" />
              <p className='grow'>Bot History</p>
            </li>
            <li className='flex items-center'>
              <img src="/images/cog.png" alt="" />
              <p className='grow'>Bot Settings</p>
            </li>
          </ul>
        </div>
        <div className='sidebar-section'>
          <p className='title'>Plugins Managment</p>
          <ul>
            <li className='flex items-center default-icon'>
              <p className='grow'>Quiz Generator</p>
              <div className='badge justify-self-end'>Comming soon</div>
            </li>
            <li className='flex items-center default-icon'>
              <p className='grow'>FAQ Generator</p>
              <div className='badge justify-self-end'>Comming soon</div>
            </li>
            <li className='flex items-center'>
              <img src="/images/plus-circle.png" alt="" />
              <p style={{color: '#686B6E'}}>Add New Plugins</p>
            </li>
          </ul>
        </div>
        <div className='sidebar-section'>
          <UserCard />
        </div>
      </div>
    </>
  )
}