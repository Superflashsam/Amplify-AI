import { describe, it, expect } from 'vitest'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SignIn } from '../pages/SignIn'

describe('SignIn', () => {
  it('validates email and password', () => {
    render(<SignIn />)
    fireEvent.click(screen.getByText('Continue'))
    expect(screen.getByText(/Enter a valid email/)).toBeInTheDocument()
    expect(
      screen.getByText(/Minimum 8 characters|At least one (uppercase|lowercase|digit)/)
    ).toBeInTheDocument()
  })
  it('toggles password visibility', () => {
    render(<SignIn />)
    const toggle = screen.getByLabelText('Toggle password visibility')
    fireEvent.click(toggle)
    expect(toggle).toBeInTheDocument()
  })
})
