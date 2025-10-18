import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-custom px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AN</span>
              </div>
              <span className="text-white font-bold text-xl">Apranova</span>
            </div>
            <p className="text-gray-400 text-sm">
              Enterprise Learning Platform where code meets intelligence.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <a
              href="mailto:contact@apranova.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span>contact@apranova.com</span>
            </a>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Apranova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

