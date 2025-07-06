import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Button } from '../Button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('inline-flex', 'items-center', 'justify-center', 'rounded-md', 'text-sm', 'font-medium', 'ring-offset-background', 'transition-colors', 'focus-visible:outline-none', 'focus-visible:ring-2', 'focus-visible:ring-ring', 'focus-visible:ring-offset-2', 'disabled:pointer-events-none', 'disabled:opacity-50', 'bg-primary', 'text-primary-foreground', 'hover:bg-primary/90', 'h-10', 'px-4', 'py-2')
  })

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)
    
    let button = screen.getByRole('button', { name: 'Secondary' })
    expect(button).toHaveClass('bg-secondary', 'text-secondary-foreground', 'hover:bg-secondary/80')
    
    rerender(<Button variant="destructive">Destructive</Button>)
    button = screen.getByRole('button', { name: 'Destructive' })
    expect(button).toHaveClass('bg-destructive', 'text-destructive-foreground', 'hover:bg-destructive/90')
    
    rerender(<Button variant="outline">Outline</Button>)
    button = screen.getByRole('button', { name: 'Outline' })
    expect(button).toHaveClass('border', 'border-input', 'bg-background', 'hover:bg-accent', 'hover:text-accent-foreground')
    
    rerender(<Button variant="ghost">Ghost</Button>)
    button = screen.getByRole('button', { name: 'Ghost' })
    expect(button).toHaveClass('hover:bg-accent', 'hover:text-accent-foreground')
    
    rerender(<Button variant="link">Link</Button>)
    button = screen.getByRole('button', { name: 'Link' })
    expect(button).toHaveClass('text-primary', 'underline-offset-4', 'hover:underline')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    
    let button = screen.getByRole('button', { name: 'Small' })
    expect(button).toHaveClass('h-9', 'rounded-md', 'px-3')
    
    rerender(<Button size="lg">Large</Button>)
    button = screen.getByRole('button', { name: 'Large' })
    expect(button).toHaveClass('h-11', 'rounded-md', 'px-8')
    
    rerender(<Button size="icon">Icon</Button>)
    button = screen.getByRole('button', { name: 'Icon' })
    expect(button).toHaveClass('h-10', 'w-10')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    
    const button = screen.getByRole('button', { name: 'Custom' })
    expect(button).toHaveClass('custom-class')
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole('button', { name: 'Click me' })
    await user.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>)
    
    const button = screen.getByRole('button', { name: 'Disabled' })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    
    const link = screen.getByRole('link', { name: 'Link Button' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
    // The link should have the button's base classes
    expect(link).toHaveClass('inline-flex', 'items-center', 'justify-center')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    
    render(<Button ref={ref}>Ref Button</Button>)
    
    expect(ref).toHaveBeenCalled()
  })
}) 
 