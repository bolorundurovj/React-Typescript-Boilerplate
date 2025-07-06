import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ThemeProvider } from '../../contexts/ThemeContext'
import Contact from '../Contact'

const TestWrapper = ({ children }) => (
  <ThemeProvider>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </ThemeProvider>
)

describe('Contact', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders contact page title and description', () => {
    render(
      <TestWrapper>
        <Contact />
      </TestWrapper>
    )
    
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByText(/Have a question or want to contribute/)).toBeInTheDocument()
  })

  it('renders contact form with all fields', () => {
    render(
      <TestWrapper>
        <Contact />
      </TestWrapper>
    )
    
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('handles form input changes', async () => {
    const user = userEvent.setup()
    
    render(
      <TestWrapper>
        <Contact />
      </TestWrapper>
    )
    
    const nameInput = screen.getByLabelText('Name')
    const emailInput = screen.getByLabelText('Email')
    
    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')
    
    expect(nameInput).toHaveValue('John Doe')
    expect(emailInput).toHaveValue('john@example.com')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    
    render(
      <TestWrapper>
        <Contact />
      </TestWrapper>
    )
    
    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Test Subject')
    await user.type(screen.getByLabelText('Message'), 'Test message content')
    
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    expect(console.log).toHaveBeenCalledWith('Form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'Test message content',
    })
  })
}) 