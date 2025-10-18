import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import LearningTracksPage from './pages/LearningTracksPage'
import RoadmapPage from './pages/RoadmapPage'
import RolesPage from './pages/RolesPage'
import TechStackPage from './pages/TechStackPage'
import AboutPage from './pages/AboutPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/learning-tracks" element={<LearningTracksPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/tech-stack" element={<TechStackPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

