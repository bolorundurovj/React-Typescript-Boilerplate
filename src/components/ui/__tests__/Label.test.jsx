import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Label } from '../Label'

describe('Label', () => {
  it('renders with default props', () => {
    render(<Label>Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
    expect(label).toHaveClass('text-sm', 'font-medium', 'leading-none')
  })

  it('applies custom className', () => {
    render(<Label className="custom-label">Custom Label</Label>)
    expect(screen.getByText('Custom Label')).toHaveClass('custom-label')
  })

  it('supports htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Input Label</Label>)
    const label = screen.getByText('Input Label')
    expect(label).toHaveAttribute('for', 'test-input')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Label ref={ref}>Ref Test</Label>)
    expect(ref).toHaveBeenCalled()
  })

  it('supports all standard label attributes', () => {
    render(
      <Label
        id="test-label"
        className="test-class"
        htmlFor="test-input"
        title="Tooltip text"
      >
        Full Label
      </Label>
    )
    
    const label = screen.getByText('Full Label')
    expect(label).toHaveAttribute('id', 'test-label')
    expect(label).toHaveClass('test-class')
    expect(label).toHaveAttribute('for', 'test-input')
    expect(label).toHaveAttribute('title', 'Tooltip text')
  })

  it('renders with complex content', () => {
    render(
      <Label>
        <span>Complex</span> <strong>Label</strong> <em>Content</em>
      </Label>
    )
    
    expect(screen.getByText('Complex')).toBeInTheDocument()
    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
}) 