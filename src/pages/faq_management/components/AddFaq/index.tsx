import './index.css'
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"


const labelStyle = {
  color: '#FFF',
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '150%',
}

const textareaStyle = {
  width: '100%',
  background: 'transparent',
  color: '#FFFFFF'
}

export default ({onClickClose}: {
  onClickClose: () => void
}) => {

  const { toast } = useToast()

  const [formulations, setFormulations] = useState<string[]>([''])
  const [answer, setAnswer] = useState<string>('')

  const deleteFormulation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = e.target as HTMLElement
    const index = parseInt(target.getAttribute('aria-label')!)
    const newFormulations = formulations.filter((_, i) => i !== index)
    setFormulations(newFormulations)
  }

  const updateAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value)
  }

  const addFormulation = () => {
    const newFormulations = [...formulations, '']
    setFormulations(newFormulations)
  }

  const submit = () => {
    console.log(formulations)
    console.log(answer)
    toast({
      title: 'FAQ Added',
      description: 'Your FAQ has been added successfully',
      duration: 1000,
    })
    onClickClose()
  }

  return (
    <>
      <div style={{
        // width: '396px',
        fontSize: '30px',
        color: '#fff',
        fontWeight: 700,
        lineHeight: '38px',
      }} className="flex items-center">
        <span className="grow">Add FAQ</span>
        <a onClick={onClickClose}>
          <img src="/images/cross.svg" alt="" />
        </a>
      </div>
      <div className="add-faq-form">
        <label htmlFor="" style={labelStyle}>Formulation</label>
        {
          formulations.map((formulation, index) => (
            <div key={index} className="flex items-center input">
              <input type="text" placeholder={`Formulation ${index+1}`} value={formulation} onChange={(() => {return (e) => {
                const newFormulations = [...formulations]
                newFormulations[index] = (e.target as HTMLInputElement).value
                setFormulations(newFormulations)
              }})()} />
              <a onClick={deleteFormulation} style={{
                cursor: 'pointer'
              }}>
                <img src="/images/minus.svg" alt="" aria-label={index.toString()}/>
              </a>
            </div>
          ))
        }
        <div className='mt-2 text-end'>
          <button className='add-new-formulation' onClick={addFormulation}></button>
        </div>
        <hr style={{
          opacity: 0.5,
          border: '1px solid #E1E1E6',
          margin: '24px 0'
        }} />
        <label htmlFor="" style={labelStyle}>Answer (markdown)</label>
        <div style={{
          padding: '6px 12px',
          borderRadius: '10px',
          background: '#1F2129',
          marginBottom: '24px'
        }}>
          <textarea name="" id="" style={textareaStyle} placeholder='Enter' value={answer} onChange={(e) => updateAnswer(e)}></textarea>
        </div>
        <div className='text-end'>
          <button className='primary' style={{
            padding: '12px 24px',
            fontSize: '14px',
          }} onClick={submit}>SAVE</button>
        </div>
      </div>
    </>
  )
}