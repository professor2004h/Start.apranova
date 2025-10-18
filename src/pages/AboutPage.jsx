import { Target, Lightbulb, BookOpen, Building2, GraduationCap, Users, Globe, TrendingUp, Rocket, Heart } from 'lucide-react'

const AboutPage = () => {
  const targetAudiences = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Universities',
      description: 'Comprehensive learning platform for computer science and data science programs',
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Bootcamps',
      description: 'Intensive training environments with real-world project portfolios',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Enterprises',
      description: 'Corporate training and upskilling for technical teams',
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: 'Individual Learners',
      description: 'Self-paced learning with professional-grade tools and mentorship',
    },
  ]

  const visionPoints = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Global Accessibility',
      description: 'Making enterprise-grade learning tools accessible to institutions and individuals worldwide',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Continuous Innovation',
      description: 'Evolving with industry trends and technological advancements',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Learning-First Approach',
      description: 'Prioritizing genuine skill development over shortcuts and quick fixes',
    },
  ]

  return (
    <div className="bg-black">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Inspiring workspace"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
        </div>
        <div className="relative z-20 container-custom px-6 md:px-12 lg:px-24 text-center">
          <h1 className="heading-xl mb-6">About Apranova</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming technical education through intelligent cloud infrastructure
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="heading-lg mb-6">Our Mission</h2>
            </div>
            <div className="bg-black border-2 border-gray-800 rounded-lg p-8 md:p-12 shadow-lg">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Apranova exists to bridge the gap between traditional education and industry demands by providing an enterprise-grade learning platform that combines cloud infrastructure, artificial intelligence, and collaborative tools.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We empower educational institutions and individual learners with the same professional tools used by leading technology companies, ensuring students graduate with practical, job-ready skills and comprehensive project portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Philosophy */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Lightbulb className="w-16 h-16 text-primary mb-6" />
              <h2 className="heading-md mb-6">Platform Philosophy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Hands-On Learning</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We believe in learning by doing. Every feature is designed to encourage practical application, experimentation, and real-world problem-solving.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Intelligent Assistance</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our AI helps students understand syntax and best practices without providing complete solutions, fostering genuine comprehension and skill development.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Enterprise Standards</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Students work with the same tools, workflows, and infrastructure used in professional environments, ensuring seamless transition to industry roles.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="Diverse students learning"
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="heading-lg mb-6">Who We Serve</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Apranova is designed for diverse learning environments and educational models
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="card text-center group">
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{audience.title}</h3>
                <p className="text-gray-400">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                alt="Global reach visualization"
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Globe className="w-16 h-16 text-primary mb-6" />
              <h2 className="heading-md mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We envision a world where quality technical education is accessible to everyone, regardless of location or resources. Apranova will become the global standard for cloud-based learning platforms, serving millions of students and thousands of institutions worldwide.
              </p>
              <div className="space-y-6">
                {visionPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-primary flex-shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                      <p className="text-gray-400">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Excellence</h3>
              <p className="text-gray-400">
                Delivering enterprise-grade quality in every feature and interaction
              </p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Innovation</h3>
              <p className="text-gray-400">
                Continuously evolving with cutting-edge technologies and methodologies
              </p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Accessibility</h3>
              <p className="text-gray-400">
                Making professional learning tools available to all educational contexts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="bg-black border-2 border-gray-800 rounded-2xl p-12 md:p-16 text-center max-w-4xl mx-auto shadow-lg">
            <h2 className="heading-lg mb-6">Join Our Journey</h2>
            <p className="text-gray-300 text-lg mb-8">
              Be part of the future of technical education. Whether you're an institution or an individual learner, Apranova provides the tools you need to succeed.
            </p>
            <a href="mailto:contact@apranova.com?subject=Get Started with Apranova" className="btn-primary text-lg">
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

