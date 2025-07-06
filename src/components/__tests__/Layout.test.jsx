import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import { ThemeProvider } from '../../contexts/ThemeContext'
import Layout from '../Layout'

// Wrapper component to provide necessary context
const TestWrapper = ({ children }) => (
  <ThemeProvider>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </ThemeProvider>
)

describe('Layout', () => {
  it('renders header with navigation', () => {
    render(
      <TestWrapper>
        <Layout>
          <div>Test content</div>
        </Layout>
      </TestWrapper>
    )
    
    expect(screen.getByText('React Boilerplate')).toBeInTheDocument()
    // Desktop navigation should be visible
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders theme toggle button', () => {
    render(
      <TestWrapper>
        <Layout>
          <div>Test content</div>
        </Layout>
      </TestWrapper>
    )
    
    const themeButton = screen.getByRole('button', { name: /toggle theme/i })
    expect(themeButton).toBeInTheDocument()
  })

  it('renders mobile menu button on small screens', () => {
    render(
      <TestWrapper>
        <Layout>
          <div>Test content</div>
        </Layout>
      </TestWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(menuButton).toBeInTheDocument()
    expect(menuButton).toHaveClass('md:hidden')
  })

  it('toggles mobile menu when menu button is clicked', async () => {
    const user = userEvent.setup()
    
    render(
      <TestWrapper>
        <Layout>
          <div>Test content</div>
        </Layout>
      </TestWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    
    // Menu should be closed initially
    expect(screen.queryByText('Home')).not.toHaveClass('block')
    
    // Open menu
    await user.click(menuButton)
    const mobileHomeLink = screen.getAllByRole('link', { name: 'Home' })[1] // Get the mobile nav link
    expect(mobileHomeLink).toHaveClass('block')
    
    // Close menu
    await user.click(menuButton)
    expect(screen.queryByText('Home')).not.toHaveClass('block')
  })

  it('renders footer with copyright and links', () => {
    render(
      <TestWrapper>
        <Layout>
          <div>Test content</div>
        </Layout>
      </TestWrapper>
    )
    
    expect(screen.getByText(/© 2024 React JavaScript Boilerplate/)).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('Documentation')).toBeInTheDocument()
  })

  it('renders children content in main section', () => {
    render(
      <TestWrapper>
        <Layout>
          <div data-testid="main-content">Main content here</div>
        </Layout>
      </TestWrapper>
    )
    
    expect(screen.getByTestId('main-content')).toBeInTheDocument()
    expect(screen.getByText('Main content here')).toBeInTheDocument()
  })

  it('has proper navigation links', () => {
    render(
      <TestWrapper>
        <Layout>
          <div>Test content</div>
        </Layout>
      </TestWrapper>
    )
    
    const homeLink = screen.getByRole('link', { name: 'Home' })
    const aboutLink = screen.getByRole('link', { name: 'About' })
    const contactLink = screen.getByRole('link', { name: 'Contact' })
    
    // Check that Home link points to root
    expect(homeLink).toHaveAttribute('href', '/')
    expect(aboutLink).toHaveAttribute('href', '/about')
    expect(contactLink).toHaveAttribute('href', '/contact')
  })

  it('has proper footer links', () => {
    render(
      <TestWrapper>
        <Layout>
          <div>Test content</div>
        </Layout>
      </TestWrapper>
    )
    
    const githubLink = screen.getByRole('link', { name: 'GitHub' })
    const docsLink = screen.getByRole('link', { name: 'Documentation' })
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/bolorundurovj/React-Javascript-Boilerplate')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    expect(docsLink).toHaveAttribute('href', 'https://docs.example.com')
    expect(docsLink).toHaveAttribute('target', '_blank')
    expect(docsLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has proper semantic structure', () => {
    render(
      <TestWrapper>
        <Layout>
          <div>Test content</div>
        </Layout>
      </TestWrapper>
    )
    
    expect(screen.getByRole('banner')).toBeInTheDocument() // header
    expect(screen.getByRole('main')).toBeInTheDocument() // main
    expect(screen.getByRole('contentinfo')).toBeInTheDocument() // footer
  })
}) 