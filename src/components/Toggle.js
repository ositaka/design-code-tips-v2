// Toggle.js
import React from 'react'
import { func, string } from 'prop-types'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light-theme'
  return <button onClick={toggleTheme} title="Click here to change the theme">{isLight ? 'sun' : 'moon'}</button>
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle
