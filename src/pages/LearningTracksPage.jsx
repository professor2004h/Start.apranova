import { Database, Code, BarChart3, Layers, Link as LinkIcon, Github, FileText, CheckCircle } from 'lucide-react'

const LearningTracksPage = () => {
  const tracks = [
    {
      icon: <Database className="w-16 h-16" />,
      title: 'Data Professional Track',
      description: 'Master data analytics, ETL pipelines, and cloud data warehousing with industry-standard tools and real-world business scenarios.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      color: 'primary',
      projects: [
        {
          level: 'Project 1',
          name: 'Business Analytics Dashboard',
          description: 'Build interactive dashboards for business intelligence and data visualization',
        },
        {
          level: 'Project 2',
          name: 'ETL Pipeline Development',
          description: 'Design and implement data extraction, transformation, and loading workflows',
        },
        {
          level: 'Project 3',
          name: 'Cloud Data Warehouse',
          description: 'Architect and deploy scalable data warehousing solutions',
        },
      ],
      techStack: [
        { name: 'Python', icon: '🐍' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Apache Superset', icon: '📊' },
        { name: 'Pandas', icon: '🐼' },
      ],
    },
    {
      icon: <Code className="w-16 h-16" />,
      title: 'Full-Stack Developer Track',
      description: 'Build production-ready web applications from frontend to backend, including DevOps practices and cloud deployment strategies.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
      color: 'blue-500',
      projects: [
        {
          level: 'Project 1',
          name: 'Professional Portfolio',
          description: 'Create a responsive portfolio website with modern frontend technologies',
        },
        {
          level: 'Project 2',
          name: 'E-Commerce Platform',
          description: 'Develop a full-featured online store with payment integration',
        },
        {
          level: 'Project 3',
          name: 'Social Application with DevOps',
          description: 'Build a social platform with CI/CD pipelines and cloud deployment',
        },
      ],
      techStack: [
        { name: 'Django', icon: '🎸' },
        { name: 'React', icon: '⚛️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' },
      ],
    },
  ]

  const deliverables = [
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: 'Live Applications',
      description: 'Deployed, functional applications accessible via public URLs',
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: 'GitHub Repositories',
      description: 'Complete source code with version control history',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Professional Portfolio',
      description: 'Comprehensive documentation and project showcases',
    },
  ]

  return (
    <div className="bg-black">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80"
            alt="Professional learning space"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
        </div>
        <div className="relative z-20 container-custom px-6 md:px-12 lg:px-24 text-center">
          <h1 className="heading-xl mb-6">Learning Tracks</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Structured pathways to master in-demand technical skills through hands-on projects
          </p>
        </div>
      </section>

      {/* Tracks */}
      {tracks.map((track, index) => (
        <section
          key={index}
          className={`section-padding bg-black ${index > 0 ? 'border-t border-gray-800' : ''}`}
        >
          <div className="container-custom">
            {/* Track Header */}
            <div className="text-center mb-12">
              <div className="text-primary mb-6 flex justify-center">
                {track.icon}
              </div>
              <h2 className="heading-lg mb-6">{track.title}</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                {track.description}
              </p>
            </div>

            {/* Track Image */}
            <div className="mb-12">
              <img
                src={track.image}
                alt={track.title}
                className="rounded-lg shadow-2xl w-full max-w-4xl mx-auto"
                loading="lazy"
              />
            </div>

            {/* Projects */}
            <div className="mb-12">
              <h3 className="heading-sm text-center mb-8">Project Progression</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {track.projects.map((project, projIndex) => (
                  <div key={projIndex} className="card">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary font-semibold">{project.level}</span>
                      <Layers className="w-6 h-6 text-gray-500" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{project.name}</h4>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-black/50 border border-gray-700 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-center mb-6">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {track.techStack.map((tech, techIndex) => (
                  <div key={techIndex} className="text-center">
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <p className="text-gray-300 font-medium">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Deliverables */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Student Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="text-primary mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">What You'll Achieve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Build a professional portfolio of real-world projects',
                'Master industry-standard tools and technologies',
                'Gain hands-on experience with cloud infrastructure',
                'Develop DevOps and deployment skills',
                'Create production-ready applications',
                'Establish a strong GitHub presence',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LearningTracksPage

