import React from 'react'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className = '', ...props }, ref) => {
  return <input ref={ref} {...props} className={`w-full rounded-2xl border border-gray-200 bg-white px-3 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:-translate-y-[1px] transition-all ${className}`} />
})
Input.displayName = 'Input'
