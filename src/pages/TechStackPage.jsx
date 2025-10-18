import { Code, Server, Cloud, Zap, GitBranch, CreditCard, Shield, Video, Database, Layers, Activity, Eye } from 'lucide-react'

const TechStackPage = () => {
  const techCategories = [
    {
      category: 'Frontend',
      icon: <Code className="w-12 h-12" />,
      description: 'Modern, responsive user interfaces with real-time capabilities',
      technologies: [
        { name: 'React', icon: '⚛️', description: 'Component-based UI framework' },
        { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS framework' },
        { name: 'WebSocket', icon: '🔌', description: 'Real-time bidirectional communication' },
        { name: 'Vite', icon: '⚡', description: 'Next-generation build tool' },
      ],
    },
    {
      category: 'Backend',
      icon: <Server className="w-12 h-12" />,
      description: 'Robust server infrastructure with scalable architecture',
      technologies: [
        { name: 'Django', icon: '🎸', description: 'High-level Python web framework' },
        { name: 'PostgreSQL', icon: '🐘', description: 'Advanced relational database' },
        { name: 'Redis', icon: '🔴', description: 'In-memory data structure store' },
        { name: 'Celery', icon: '🌿', description: 'Distributed task queue' },
      ],
    },
    {
      category: 'Infrastructure',
      icon: <Cloud className="w-12 h-12" />,
      description: 'Enterprise-grade cloud infrastructure and orchestration',
      technologies: [
        { name: 'Kubernetes', icon: '☸️', description: 'Container orchestration platform' },
        { name: 'Docker', icon: '🐳', description: 'Containerization technology' },
        { name: 'AWS EFS', icon: '☁️', description: 'Elastic file system storage' },
        { name: 'AWS S3', icon: '📦', description: 'Object storage service' },
      ],
    },
    {
      category: 'Integrations',
      icon: <Zap className="w-12 h-12" />,
      description: 'Third-party services and API integrations',
      technologies: [
        { name: 'GitHub API', icon: '🐙', description: 'Version control integration' },
        { name: 'Stripe', icon: '💳', description: 'Payment processing' },
        { name: 'Auth0', icon: '🔐', description: 'Authentication and authorization' },
        { name: 'WebRTC', icon: '📹', description: 'Video calling (planned)' },
      ],
    },
    {
      category: 'Development Tools',
      icon: <Layers className="w-12 h-12" />,
      description: 'Tools and platforms for development and learning',
      technologies: [
        { name: 'VS Code Server', icon: '💻', description: 'Cloud-based code editor' },
        { name: 'Jupyter', icon: '📓', description: 'Interactive notebooks' },
        { name: 'Git', icon: '🌳', description: 'Version control system' },
        { name: 'npm/pip', icon: '📦', description: 'Package managers' },
      ],
    },
    {
      category: 'DevOps & Monitoring',
      icon: <Activity className="w-12 h-12" />,
      description: 'Continuous integration, deployment, and system monitoring',
      technologies: [
        { name: 'GitHub Actions', icon: '⚙️', description: 'CI/CD automation' },
        { name: 'Prometheus', icon: '📊', description: 'Monitoring and alerting' },
        { name: 'Grafana', icon: '📈', description: 'Analytics and visualization' },
        { name: 'ELK Stack', icon: '🔍', description: 'Logging and search' },
      ],
    },
  ]

  return (
    <div className="bg-black">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
            alt="Modern server infrastructure"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
        </div>
        <div className="relative z-20 container-custom px-6 md:px-12 lg:px-24 text-center">
          <h1 className="heading-xl mb-6">Technology Stack</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with industry-leading technologies for performance, scalability, and reliability
          </p>
        </div>
      </section>

      {/* Technology Categories */}
      {techCategories.map((category, index) => (
        <section
          key={index}
          className={`section-padding bg-black ${index > 0 ? 'border-t border-gray-800' : ''}`}
        >
          <div className="container-custom">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className="text-primary mb-4 flex justify-center">
                {category.icon}
              </div>
              <h2 className="heading-md mb-4">{category.category}</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">{category.description}</p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="card text-center group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Architecture Overview */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">System Architecture</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-black border-2 border-gray-800 rounded-lg p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-black border border-gray-800 rounded-lg p-6 mb-4">
                    <Code className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Presentation Layer</h3>
                    <p className="text-gray-400 text-sm">React + Tailwind CSS</p>
                  </div>
                  <div className="text-gray-500 text-2xl">↓</div>
                </div>
                <div className="text-center">
                  <div className="bg-black border border-gray-800 rounded-lg p-6 mb-4">
                    <Server className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Application Layer</h3>
                    <p className="text-gray-400 text-sm">Django + Redis</p>
                  </div>
                  <div className="text-gray-500 text-2xl">↓</div>
                </div>
                <div className="text-center">
                  <div className="bg-black border border-gray-800 rounded-lg p-6 mb-4">
                    <Database className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Data Layer</h3>
                    <p className="text-gray-400 text-sm">PostgreSQL + EFS</p>
                  </div>
                  <div className="text-gray-500 text-2xl">↓</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-black border border-gray-800 rounded-lg p-6">
                  <Cloud className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Infrastructure Layer</h3>
                  <p className="text-gray-400 text-sm">Kubernetes + Docker + AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technical Features */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Technical Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'High Performance',
                description: 'Optimized for speed with Redis caching and CDN delivery',
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'Enterprise Security',
                description: 'Auth0 integration with role-based access control',
              },
              {
                icon: <Layers className="w-10 h-10" />,
                title: 'Microservices Ready',
                description: 'Containerized architecture for independent scaling',
              },
              {
                icon: <GitBranch className="w-10 h-10" />,
                title: 'CI/CD Pipeline',
                description: 'Automated testing and deployment workflows',
              },
              {
                icon: <Eye className="w-10 h-10" />,
                title: 'Real-time Monitoring',
                description: 'Prometheus and Grafana for system observability',
              },
              {
                icon: <Database className="w-10 h-10" />,
                title: 'Data Persistence',
                description: 'EFS and S3 for reliable, scalable storage',
              },
            ].map((feature, index) => (
              <div key={index} className="card">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TechStackPage

