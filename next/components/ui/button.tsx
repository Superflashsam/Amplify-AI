import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' | 'gradient' }

export const Button: React.FC<Props> = ({ variant = 'default', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-2xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400'
  const styles = {
    default: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50',
    gradient: 'btn-gradient text-white shadow-lg shadow-primary/25 hover:shadow-primary/40'
  }[variant]
  return <button {...props} className={`${base} ${styles} ${className}`} />
}
