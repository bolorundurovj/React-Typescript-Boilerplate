import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../Card'

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card>Card content</Card>)
    const card = screen.getByText('Card content')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('rounded-lg', 'border', 'bg-card')
  })

  it('applies custom className', () => {
    render(<Card className="custom-card">Custom Card</Card>)
    expect(screen.getByText('Custom Card')).toHaveClass('custom-card')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Card ref={ref}>Ref Test</Card>)
    expect(ref).toHaveBeenCalled()
  })
})

describe('CardHeader', () => {
  it('renders with default props', () => {
    render(<CardHeader>Header content</CardHeader>)
    const header = screen.getByText('Header content')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('flex', 'flex-col', 'space-y-1.5', 'p-6')
  })

  it('applies custom className', () => {
    render(<CardHeader className="custom-header">Custom Header</CardHeader>)
    expect(screen.getByText('Custom Header')).toHaveClass('custom-header')
  })
})

describe('CardTitle', () => {
  it('renders with default props', () => {
    render(<CardTitle>Card Title</CardTitle>)
    const title = screen.getByRole('heading', { level: 3 })
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Card Title')
    expect(title).toHaveClass('text-2xl', 'font-semibold')
  })

  it('applies custom className', () => {
    render(<CardTitle className="custom-title">Custom Title</CardTitle>)
    expect(screen.getByRole('heading')).toHaveClass('custom-title')
  })
})

describe('CardDescription', () => {
  it('renders with default props', () => {
    render(<CardDescription>Card description</CardDescription>)
    const description = screen.getByText('Card description')
    expect(description).toBeInTheDocument()
    expect(description).toHaveClass('text-sm', 'text-muted-foreground')
  })

  it('applies custom className', () => {
    render(<CardDescription className="custom-desc">Custom Description</CardDescription>)
    expect(screen.getByText('Custom Description')).toHaveClass('custom-desc')
  })
})

describe('CardContent', () => {
  it('renders with default props', () => {
    render(<CardContent>Content</CardContent>)
    const content = screen.getByText('Content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveClass('p-6', 'pt-0')
  })

  it('applies custom className', () => {
    render(<CardContent className="custom-content">Custom Content</CardContent>)
    expect(screen.getByText('Custom Content')).toHaveClass('custom-content')
  })
})

describe('CardFooter', () => {
  it('renders with default props', () => {
    render(<CardFooter>Footer content</CardFooter>)
    const footer = screen.getByText('Footer content')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('flex', 'items-center', 'p-6', 'pt-0')
  })

  it('applies custom className', () => {
    render(<CardFooter className="custom-footer">Custom Footer</CardFooter>)
    expect(screen.getByText('Custom Footer')).toHaveClass('custom-footer')
  })
})

describe('Card Composition', () => {
  it('renders a complete card with all components', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>Test Content</CardContent>
        <CardFooter>Test Footer</CardFooter>
      </Card>
    )

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Title')
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
    expect(screen.getByText('Test Footer')).toBeInTheDocument()
  })
}) 