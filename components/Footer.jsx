import React from 'react'

const Footer = (props) => {
  return (
    <div className={`footer ${props.showBorder ? 'border-t' : ''}`}>
      <div>All Rights Reserved</div>
    </div>
  )
}

export default Footer
