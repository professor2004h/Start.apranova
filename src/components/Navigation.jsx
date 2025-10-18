import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

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
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AN</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">Apranova</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-gray-900 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-900'
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

