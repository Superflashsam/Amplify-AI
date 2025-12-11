import React from 'react'

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => {
  return <div {...props} className={`rounded-[24px] border border-gray-100 bg-white/80 backdrop-blur-xl shadow-xl ${className}`} />
}
