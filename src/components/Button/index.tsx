import './index.css'

export default ({children, theme, style}: {
  children: React.ReactNode,
  theme?: string,
  style?: React.CSSProperties
}) => {

  const classname = theme ? `button ${theme}` : 'button'

  return (
    <>
      <button style={style} className={classname}>
        {children}
      </button>
    </>
  )
}