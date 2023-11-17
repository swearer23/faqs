import './index.css'
import Alert from '../../../../components/Alert'

export default () => {

  const list = [
    {title: "What's your function", content: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram."},
    {title: "What's your function", content: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram."},
    {title: "What's your function", content: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram.", active: true},
    {title: "What's your function", content: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram."},
    {title: "What's your function", content: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram.", conflict: true},
    {title: "What's your function", content: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram."},
    {title: "What's your function", content: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram."},
    {title: "What's your function", content: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram."},
  ]

  return (
    <>
      <div className='faq-list'>
        <div className="title flex items-center">
          <h1 className='grow'>All FAQ</h1>
          <div className='search flex items-center'>
            <input type="text" placeholder='Search' />
          </div>
          <div>
            <img src="/images/Frame.svg" alt="" />
          </div>
        </div>
        <ul>
          {
            list.map((item, index) => {
              let classname = 'list-item'
              if (item.active) {
                classname += ' active'
              }
              return (
                <li key={index} className={classname}>
                  <div className='flex items-center'>
                    <div className='number'>{index + 1}</div>
                    <div className='faq-content grow'>
                      <div className='question'>{item.title}</div>
                      <div className='answer'>{item.content}</div>
                    </div>
                    <div className='justify-self-end flex items-center faq-ops'>
                      <img src="/images/edit.svg" alt="" />
                      <img src="/images/delete.svg" alt="" />
                    </div>
                  </div>
                  {
                    item.conflict && (
                      <Alert style={{opacity: '0.5', fontSize: '12px', margin: '8px 0'}} url='https://portfolio.zspxy.xyz'>Causing a Conflict problem.</Alert>
                    )
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}