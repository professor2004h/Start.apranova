import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black dark:bg-white border-t border-gray-800 dark:border-gray-200 transition-colors duration-300">
      <div className="container-custom px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/Apra Nova Logo.png"
                alt="Apra Nova Logo"
                className="h-10 w-auto md:h-12 object-contain"
              />
            </div>
            <p className="text-gray-400 dark:text-gray-600 text-sm">
              Enterprise Learning Platform where code meets intelligence.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white dark:text-black font-semibold mb-4">Contact</h3>
            <a
              href="mailto:contact@apranova.com"
              className="flex items-center space-x-2 text-gray-400 dark:text-gray-600 hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span>contact@apranova.com</span>
            </a>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white dark:text-black font-semibold mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link
                to="/privacy-policy"
                className="text-gray-400 dark:text-gray-600 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-gray-400 dark:text-gray-600 hover:text-primary transition-colors text-sm"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 dark:border-gray-200 text-center text-gray-400 dark:text-gray-600 text-sm">
          <p>&copy; {currentYear} Apranova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

