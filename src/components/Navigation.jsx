import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme, isDark } = useTheme()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/learning-tracks', label: 'Learning Tracks' },
    { path: '/roadmap', label: 'Roadmap' },
    { path: '/roles', label: 'Roles' },
    { path: '/tech-stack', label: 'Tech Stack' },
    { path: '/about', label: 'About' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/terms-and-conditions', label: 'Terms' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-black dark:bg-white border-b border-gray-800 dark:border-gray-200 sticky top-0 z-50 transition-colors duration-300">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Corner */}
          <Link to="/" className="flex items-center flex-shrink-0 lg:w-48">
            <img
              src="/Apra Nova Logo.png"
              alt="Apra Nova Logo"
              className="h-10 w-auto md:h-12 lg:h-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive(link.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black hover:bg-gray-900 dark:hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle Button - Right Side Desktop */}
          <div className="hidden lg:flex items-center flex-shrink-0 lg:w-48 justify-end">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300"
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className="text-white dark:text-black p-2 hover:bg-gray-900 dark:hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white dark:text-black p-2 hover:bg-gray-900 dark:hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800 dark:border-gray-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black hover:bg-gray-900 dark:hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

