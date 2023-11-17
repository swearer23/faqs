import './index.css'

export default ({children, theme, style, onClick}: {
  children: React.ReactNode,
  theme?: string,
  style?: React.CSSProperties,
  onClick?: () => void
}) => {

  const classname = theme ? `button ${theme}` : 'button'

  return (
    <>
      <button style={style} className={classname} onClick={onClick}>
        {children}
      </button>
    </>
  )
}