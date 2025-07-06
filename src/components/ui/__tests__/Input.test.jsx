import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Input } from '../Input'

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveClass('flex', 'h-10', 'w-full', 'rounded-md')
  })

  it('renders with different types', () => {
    const { rerender } = render(<Input type="email" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')

    rerender(<Input type="password" />)
    expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'password')

    rerender(<Input type="number" />)
    expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number')
  })

  it('applies custom className', () => {
    render(<Input className="custom-input" />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-input')
  })

  it('handles value and onChange', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Input value="test" onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('test')
    
    await user.type(input, 'ing')
    expect(handleChange).toHaveBeenCalled()
  })

  it('can be disabled', () => {
    render(<Input disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    expect(input).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50')
  })

  it('supports placeholder', () => {
    render(<Input placeholder="Enter text here" />)
    expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument()
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Input ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })

  it('supports all standard input attributes', () => {
    render(
      <Input
        id="test-input"
        name="testName"
        required
        minLength={3}
        maxLength={10}
        pattern="[A-Za-z]+"
        autoComplete="name"
      />
    )
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('id', 'test-input')
    expect(input).toHaveAttribute('name', 'testName')
    expect(input).toBeRequired()
    expect(input).toHaveAttribute('minLength', '3')
    expect(input).toHaveAttribute('maxLength', '10')
    expect(input).toHaveAttribute('pattern', '[A-Za-z]+')
    expect(input).toHaveAttribute('autoComplete', 'name')
  })

  it('handles focus and blur events', async () => {
    const user = userEvent.setup()
    const onFocus = vi.fn()
    const onBlur = vi.fn()
    
    render(<Input onFocus={onFocus} onBlur={onBlur} />)
    const input = screen.getByRole('textbox')
    
    await user.click(input)
    expect(onFocus).toHaveBeenCalled()
    
    await user.tab()
    expect(onBlur).toHaveBeenCalled()
  })
}) 