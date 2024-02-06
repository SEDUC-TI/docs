import React from 'react'

function Tag({children, color = 'primary'}) {
  return (
    <div 
    className={`tag--${color}`}
    style={{
        padding: '5px 10px',
        borderRadius: '10px',
        display: 'inline-block',
        textAlign: 'center',
        fontSize: '12px',
    }}>
        {children}
    </div>
  )
}

export default Tag