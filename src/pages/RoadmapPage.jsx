import { CheckCircle, Clock, Calendar, Blocks, Settings, TrendingUp, Users, CreditCard, Code, Brain, Video, FileQuestion, Globe, Briefcase, Info } from 'lucide-react'

const RoadmapPage = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'MVP Foundation',
      status: 'Live',
      statusColor: 'bg-green-500',
      icon: <Blocks className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      description: 'Core platform infrastructure with essential learning tools and payment integration for initial cohort.',
      features: [
        { icon: <Code className="w-5 h-5" />, text: 'Cloud-based IDE with containerized workspaces' },
        { icon: <Users className="w-5 h-5" />, text: 'Support for 20 concurrent students' },
        { icon: <CreditCard className="w-5 h-5" />, text: 'Stripe payment integration' },
        { icon: <Blocks className="w-5 h-5" />, text: 'Project 1 for both learning tracks' },
        { icon: <Brain className="w-5 h-5" />, text: 'Basic AI syntax assistance' },
      ],
      timeline: 'Current',
    },
    {
      phase: 'Phase 2',
      title: 'Advanced Features',
      status: 'In Development',
      statusColor: 'bg-blue-500',
      icon: <Settings className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      description: 'Enhanced learning capabilities with advanced AI features, assessment tools, and expanded project portfolio.',
      features: [
        { icon: <Brain className="w-5 h-5" />, text: 'Enhanced AI with advanced code analysis' },
        { icon: <FileQuestion className="w-5 h-5" />, text: 'Automated quiz generation and grading' },
        { icon: <Video className="w-5 h-5" />, text: 'Integrated video calling for live sessions' },
        { icon: <Code className="w-5 h-5" />, text: 'Projects 2 and 3 for both tracks' },
        { icon: <Users className="w-5 h-5" />, text: 'Expanded collaboration tools' },
      ],
      timeline: 'Q2 2025',
    },
    {
      phase: 'Phase 3',
      title: 'Enterprise Scale',
      status: 'Planned',
      statusColor: 'bg-gray-500',
      icon: <TrendingUp className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      description: 'Global scalability with multi-region deployment, employer partnerships, and talent marketplace integration.',
      features: [
        { icon: <Globe className="w-5 h-5" />, text: 'Multi-region deployment infrastructure' },
        { icon: <Users className="w-5 h-5" />, text: 'Support for 500+ concurrent users' },
        { icon: <Briefcase className="w-5 h-5" />, text: 'Employer portal and hiring integration' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Talent marketplace for graduates' },
        { icon: <Settings className="w-5 h-5" />, text: 'Advanced analytics and reporting' },
      ],
      timeline: 'Q4 2025',
    },
  ]

  return (
    <div className="bg-black">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="Development roadmap"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
        </div>
        <div className="relative z-20 container-custom px-6 md:px-12 lg:px-24 text-center">
          <h1 className="heading-xl mb-6">Development Roadmap</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our strategic vision for building the world's leading enterprise learning platform
          </p>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

              {/* Phases */}
              {phases.map((phase, index) => (
                <div key={index} className="relative mb-16 last:mb-0">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}>
                    {/* Content */}
                    <div className={index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:col-start-2'}>
                      <div className="card">
                        {/* Status Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-400 font-semibold">{phase.phase}</span>
                          <span className={`${phase.statusColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                            {phase.status}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="heading-sm mb-4">{phase.title}</h3>

                        {/* Description */}
                        <p className="text-gray-400 mb-6">{phase.description}</p>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                          {phase.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <div className="text-primary flex-shrink-0 mt-1">
                                {feature.icon}
                              </div>
                              <p className="text-gray-300 text-sm">{feature.text}</p>
                            </div>
                          ))}
                        </div>

                        {/* Timeline */}
                        <div className="flex items-center space-x-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{phase.timeline}</span>
                        </div>
                      </div>
                    </div>

                    {/* Icon Circle */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-black border-4 border-primary rounded-full items-center justify-center text-primary z-10 shadow-lg">
                      {phase.icon}
                    </div>

                    {/* Image */}
                    <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}>
                      <img
                        src={phase.image}
                        alt={phase.title}
                        className="rounded-lg shadow-2xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Phases Note */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-black border-2 border-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <Info className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Continuous Evolution</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Additional phases and advanced role management features will unlock progressively based on user feedback, market demands, and technological advancements.
                </p>
                <p className="text-gray-400 text-sm">
                  Our roadmap is designed to be flexible and responsive to the needs of our educational partners and learners, ensuring we deliver maximum value at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Key Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">20+</h3>
              <p className="text-gray-400">Students Onboarded</p>
            </div>
            <div className="card text-center">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-400">Target Users by Q4 2025</p>
            </div>
            <div className="card text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Multi-Region</h3>
              <p className="text-gray-400">Global Deployment Ready</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RoadmapPage

