import './content.css';
import Alert from '../components/Alert';
import Page from '../pages/faq_management'

export default () => {
  return (
    <>
      <div className="content grow">
        <Alert url='https://portfolio.zspxy.xyz'>Still have 23 conflicting, 30 unanswered data need to be processed.</Alert>
        <div className='main'>
          <Page />
        </div>
      </div>
    </>
  )
}