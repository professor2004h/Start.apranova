import { Cloud, Brain, Users, TrendingUp, Server, Code, Save, Globe, GitBranch, Eye, MessageSquare, BarChart3, Database } from 'lucide-react'

const FeaturesPage = () => {
  const features = [
    {
      icon: <Cloud className="w-16 h-16" />,
      title: 'Cloud-Based Development Environment',
      description: 'Fully containerized workspaces accessible from anywhere, eliminating local setup complexity and ensuring consistent development environments across all users.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      capabilities: [
        { icon: <Save className="w-5 h-5" />, text: 'Automatic save with EFS persistence' },
        { icon: <Code className="w-5 h-5" />, text: 'Multi-language support (Python, JavaScript, Java, Go)' },
        { icon: <Globe className="w-5 h-5" />, text: 'Access from any device with internet connection' },
      ],
    },
    {
      icon: <Brain className="w-16 h-16" />,
      title: 'AI Syntax Helper',
      description: 'Intelligent assistance focused on syntax guidance and best practices. Our AI helps students understand proper code structure without providing complete solutions, fostering genuine learning.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
      capabilities: [
        { icon: <Code className="w-5 h-5" />, text: 'Real-time syntax error detection and suggestions' },
        { icon: <Brain className="w-5 h-5" />, text: 'Context-aware code completion' },
        { icon: <MessageSquare className="w-5 h-5" />, text: 'Best practice recommendations' },
      ],
      note: 'Designed to assist with syntax only, not complete solutions',
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: 'Collaborative Learning Tools',
      description: 'Comprehensive trainer-student interaction system enabling real-time mentorship, code review, and collaborative problem-solving in a secure, monitored environment.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      capabilities: [
        { icon: <Eye className="w-5 h-5" />, text: 'Trainer dashboard with real-time workspace access' },
        { icon: <MessageSquare className="w-5 h-5" />, text: 'Peer code review and feedback system' },
        { icon: <Users className="w-5 h-5" />, text: 'Live collaboration and pair programming' },
      ],
    },
    {
      icon: <TrendingUp className="w-16 h-16" />,
      title: 'Progress Tracking System',
      description: 'Automated checkpoint detection and comprehensive progress monitoring integrated with version control, providing detailed insights into student development and project completion.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      capabilities: [
        { icon: <BarChart3 className="w-5 h-5" />, text: 'Automated checkpoint detection and validation' },
        { icon: <GitBranch className="w-5 h-5" />, text: 'GitHub integration for version control' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Detailed analytics and progress reports' },
      ],
    },
    {
      icon: <Server className="w-16 h-16" />,
      title: 'Enterprise Infrastructure',
      description: 'Built on Kubernetes with containerized architecture, our platform delivers enterprise-grade scalability, security, and reliability for institutions of any size.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      capabilities: [
        { icon: <Server className="w-5 h-5" />, text: 'Kubernetes-orchestrated container management' },
        { icon: <Database className="w-5 h-5" />, text: 'Scalable storage with EFS and S3 integration' },
        { icon: <Globe className="w-5 h-5" />, text: 'Multi-region deployment ready' },
      ],
    },
  ]

  return (
    <div className="bg-black dark:bg-white transition-colors duration-300">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black dark:from-white/80 dark:via-white/70 dark:to-white z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80"
            alt="Clean coding environment"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
        </div>
        <div className="relative z-20 container-custom px-6 md:px-12 lg:px-24 text-center">
          <h1 className="heading-xl mb-6">Platform Features</h1>
          <p className="text-xl text-gray-300 dark:text-gray-700 max-w-3xl mx-auto">
            Enterprise-grade tools and infrastructure designed for modern technical education
          </p>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, index) => (
        <section
          key={index}
          className={`section-padding bg-black dark:bg-white ${index > 0 ? 'border-t border-gray-800 dark:border-gray-200' : ''}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-primary mb-6">
                  {feature.icon}
                </div>
                <h2 className="heading-md mb-6">{feature.title}</h2>
                <p className="text-gray-300 dark:text-gray-700 text-lg leading-relaxed mb-8">
                  {feature.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-4 mb-6">
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-start space-x-3">
                      <div className="text-primary flex-shrink-0 mt-1">
                        {capability.icon}
                      </div>
                      <p className="text-gray-400 dark:text-gray-600">{capability.text}</p>
                    </div>
                  ))}
                </div>

                {/* Note if exists */}
                {feature.note && (
                  <div className="bg-black/50 dark:bg-white/50 border border-primary/30 rounded-lg p-4 mt-6">
                    <p className="text-sm text-gray-400 dark:text-gray-600 italic">{feature.note}</p>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-lg shadow-2xl w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Architecture Diagram Section */}
      <section className="section-padding bg-black dark:bg-white border-t border-gray-800 dark:border-gray-200">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-12">Enterprise Architecture</h2>
          <div className="bg-black dark:bg-white border-2 border-gray-800 dark:border-gray-200 rounded-lg p-8 md:p-12 max-w-4xl mx-auto shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <Server className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-white dark:text-black">Kubernetes</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Container orchestration and scaling</p>
              </div>
              <div className="space-y-4">
                <Database className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-white dark:text-black">Storage Layer</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">EFS persistence and S3 integration</p>
              </div>
              <div className="space-y-4">
                <Globe className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-white dark:text-black">Multi-Region</h3>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Global deployment capability</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage

