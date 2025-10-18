import { Link } from 'react-router-dom'
import { Terminal, Brain, Briefcase, ArrowRight, Code2, Users, Zap } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: <Terminal className="w-12 h-12" />,
      title: 'Cloud IDE Workspaces',
      description: 'Fully containerized development environments with auto-save, EFS persistence, and multi-language support. Code from anywhere with enterprise-grade infrastructure.',
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI-Powered Learning',
      description: 'Intelligent syntax assistance that helps you learn proper coding patterns. Our AI guides you through syntax challenges without providing complete solutions.',
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Enterprise Projects',
      description: 'Real-world project portfolios with automated checkpoint tracking, GitHub integration, and comprehensive progress monitoring for institutional learning.',
    },
  ]

  const differentiators = [
    {
      icon: <Code2 className="w-6 h-6" />,
      text: 'Real-time collaborative coding environment',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: 'Containerized workspaces with instant provisioning',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      text: 'AI syntax helper for accelerated learning',
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: 'Trainer-student interaction system',
    },
  ]

  return (
    <div className="bg-black dark:bg-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black dark:from-white/70 dark:via-white/60 dark:to-white z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80"
            alt="Professional developer workspace"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container-custom px-6 md:px-12 lg:px-24 text-center">
          <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
            Enterprise Learning Platform
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-8">
            Where Code Meets Intelligence
          </p>
          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Advanced cloud-based IDE platform with AI-powered syntax assistance, collaborative coding environment, and enterprise-grade project management for modern technical education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@apranova.com?subject=Early Access Request" className="btn-primary">
              Request Early Access
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </a>
            <Link to="/features" className="btn-secondary">
              Explore Features
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="section-padding bg-black dark:bg-white border-t border-gray-800 dark:border-gray-200">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Why Choose Apranova</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4">
                <div className="text-primary flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <p className="text-gray-300 dark:text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section-padding bg-black dark:bg-white border-t border-gray-800 dark:border-gray-200">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card group">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="heading-sm mb-4">{feature.title}</h3>
                <p className="text-gray-400 dark:text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Image Section */}
      <section className="section-padding bg-black dark:bg-white border-t border-gray-800 dark:border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">Built for Modern Learning</h2>
              <p className="text-gray-300 dark:text-gray-700 text-lg leading-relaxed mb-6">
                Apranova combines cutting-edge cloud infrastructure with intelligent learning tools to create an unparalleled educational experience. Our platform scales from individual learners to enterprise institutions.
              </p>
              <p className="text-gray-400 dark:text-gray-600 leading-relaxed mb-8">
                With containerized workspaces, real-time collaboration, and AI-assisted learning, students gain hands-on experience with industry-standard tools while trainers maintain complete visibility and control.
              </p>
              <Link to="/learning-tracks" className="btn-primary">
                View Learning Tracks
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration in modern office"
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-t border-gray-800 dark:border-gray-200">
        <div className="container-custom">
          <div className="bg-black dark:bg-white border-2 border-gray-800 dark:border-gray-200 rounded-2xl p-12 md:p-16 text-center shadow-lg">
            <h2 className="heading-lg mb-6">Ready to Transform Your Learning Experience?</h2>
            <p className="text-gray-300 dark:text-gray-700 text-lg max-w-2xl mx-auto mb-8">
              Join forward-thinking institutions and learners who are building the future with Apranova's enterprise learning platform.
            </p>
            <a href="mailto:contact@apranova.com?subject=Early Access Request" className="btn-primary text-lg">
              Request Early Access
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

