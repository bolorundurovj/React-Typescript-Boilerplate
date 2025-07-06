import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ThemeProvider, useTheme } from '../ThemeContext'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

// Test component to access theme context
const TestComponent = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

describe('ThemeContext', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Clear any existing classes
    document.documentElement.className = ''
  })

  afterEach(() => {
    // Clean up
    document.documentElement.className = ''
  })

  it('provides default light theme', () => {
    localStorageMock.getItem.mockReturnValue(null)
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
    expect(document.documentElement).toHaveClass('light')
  })

  it('loads theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('dark')
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
    expect(document.documentElement).toHaveClass('dark')
  })

  it('toggles theme correctly', async () => {
    const user = userEvent.setup()
    localStorageMock.getItem.mockReturnValue('light')
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
    
    const toggleButton = screen.getByText('Toggle Theme')
    await user.click(toggleButton)
    
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
    expect(document.documentElement).toHaveClass('dark')
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark')
  })

  it('saves theme to localStorage', () => {
    localStorageMock.getItem.mockReturnValue('light')
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light')
  })

  it('updates document classes when theme changes', async () => {
    const user = userEvent.setup()
    localStorageMock.getItem.mockReturnValue('light')
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    expect(document.documentElement).toHaveClass('light')
    expect(document.documentElement).not.toHaveClass('dark')
    
    const toggleButton = screen.getByText('Toggle Theme')
    await user.click(toggleButton)
    
    expect(document.documentElement).toHaveClass('dark')
    expect(document.documentElement).not.toHaveClass('light')
  })

  it('throws error when useTheme is used outside ThemeProvider', () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    
    expect(() => {
      render(<TestComponent />)
    }).toThrow('useTheme must be used within a ThemeProvider')
    
    consoleSpy.mockRestore()
  })

  it('handles invalid localStorage theme gracefully', () => {
    // Set an invalid theme in localStorage
    localStorageMock.getItem.mockReturnValue('invalid-theme')
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    // Should default to light theme and ignore invalid value
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
    expect(document.documentElement).toHaveClass('light')
    // The invalid value should still be in localStorage but not used
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light')
  })
}) 