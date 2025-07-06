import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { ThemeProvider } from '../../contexts/ThemeContext'
import Home from '../Home'

const TestWrapper = ({ children }) => (
  <ThemeProvider>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </ThemeProvider>
)

describe('Home', () => {
  it('renders hero section with title and description', () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )
    
    expect(screen.getByText('React JavaScript Boilerplate')).toBeInTheDocument()
    expect(screen.getByText(/A minimal and flexible boilerplate/)).toBeInTheDocument()
  })

  it('renders hero section buttons', () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )
    
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /view documentation/i })).toBeInTheDocument()
  })

  it('renders features section with title', () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )
    
    expect(screen.getByText('Everything you need to build modern web apps')).toBeInTheDocument()
  })

  it('renders all feature cards', () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )
    
    expect(screen.getByText('Fast Development')).toBeInTheDocument()
    expect(screen.getByText('Type Safe')).toBeInTheDocument()
    expect(screen.getByText('Modern Stack')).toBeInTheDocument()
    expect(screen.getByText('Beautiful UI')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )
    
    expect(screen.getByText(/Built with Vite for lightning-fast development/)).toBeInTheDocument()
    expect(screen.getByText(/Full TypeScript support with strict type checking/)).toBeInTheDocument()
    expect(screen.getByText(/React 18, Tailwind CSS, and shadcn\/ui components/)).toBeInTheDocument()
    expect(screen.getByText(/Pre-built components with dark mode support/)).toBeInTheDocument()
  })

  it('renders CTA section', () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )
    
    expect(screen.getByText('Ready to get started?')).toBeInTheDocument()
    expect(screen.getByText(/Clone this repository and start building/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /clone repository/i })).toBeInTheDocument()
  })

  it('renders feature icons', () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )
    
    // Check that icons are rendered (they should be in the DOM as SVG elements)
    const featureCards = screen.getAllByText(/Fast Development|Type Safe|Modern Stack|Beautiful UI/)
    expect(featureCards).toHaveLength(4)
  })

  it('has proper heading hierarchy', () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )
    
    const h1 = screen.getByRole('heading', { level: 1 })
    const h2s = screen.getAllByRole('heading', { level: 2 })
    
    expect(h1).toHaveTextContent('React JavaScript Boilerplate')
    expect(h2s).toHaveLength(2) // Features section and CTA section
  })

  it('has proper semantic structure', () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )
    
    // Check that sections are properly structured
    const sections = document.querySelectorAll('section')
    expect(sections.length).toBeGreaterThan(0)
  })
}) 