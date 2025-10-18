import { GraduationCap, UserCheck, Shield, Building2, Briefcase, Users as UsersIcon, FileText, CheckCircle, Lock, Info } from 'lucide-react'

const RolesPage = () => {
  const activeRoles = [
    {
      icon: <GraduationCap className="w-16 h-16" />,
      title: 'Student Role',
      description: 'Comprehensive learning environment with access to projects, AI assistance, and collaboration tools.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      features: [
        'Access to cloud-based IDE workspaces',
        'AI syntax helper for learning support',
        'Project checkpoints and progress tracking',
        'Peer collaboration and code review',
        'GitHub integration for version control',
        'Live application deployment',
        'Portfolio building tools',
        'Trainer feedback and mentorship',
      ],
    },
    {
      icon: <UserCheck className="w-16 h-16" />,
      title: 'Trainer Role',
      description: 'Advanced oversight and mentorship capabilities with real-time access to student workspaces and progress.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      features: [
        'Real-time workspace monitoring',
        'Student progress dashboard',
        'Code review and feedback tools',
        'Direct workspace access for assistance',
        'Checkpoint validation and grading',
        'Analytics and performance reports',
        'Live session capabilities',
        'Curriculum management',
      ],
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: 'Admin Role',
      description: 'Complete platform control with user management, analytics, and system configuration capabilities.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      features: [
        'User and role management',
        'Platform-wide analytics',
        'Payment and billing oversight',
        'System configuration and settings',
        'Resource allocation and scaling',
        'Security and access control',
        'Institutional reporting',
        'Integration management',
      ],
    },
  ]

  const futureRoles = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Enterprise Admin',
      description: 'Multi-tenant management for large organizations',
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Employer Portal',
      description: 'Talent recruitment and hiring integration',
    },
    {
      icon: <UsersIcon className="w-12 h-12" />,
      title: 'Team Lead',
      description: 'Group project coordination and team management',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Content Creator',
      description: 'Curriculum development and course authoring',
    },
  ]

  return (
    <div className="bg-black">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
        </div>
        <div className="relative z-20 container-custom px-6 md:px-12 lg:px-24 text-center">
          <h1 className="heading-xl mb-6">User Roles & Access</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored permissions and capabilities for every stakeholder in the learning ecosystem
          </p>
        </div>
      </section>

      {/* Active Roles */}
      {activeRoles.map((role, index) => (
        <section
          key={index}
          className={`section-padding bg-black ${index > 0 ? 'border-t border-gray-800' : ''}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-primary mb-6">
                  {role.icon}
                </div>
                <h2 className="heading-md mb-6">{role.title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {role.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {role.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-gray-400 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={role.image}
                  alt={role.title}
                  className="rounded-lg shadow-2xl w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Future Roles */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Future Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {futureRoles.map((role, index) => (
              <div key={index} className="card opacity-60 relative">
                {/* Lock Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gray-700 rounded-full p-2">
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="text-gray-500 mb-4">
                  {role.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-300">{role.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{role.description}</p>
                <span className="inline-block bg-gray-700 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="max-w-3xl mx-auto bg-black border border-gray-700 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <Info className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Expanding Role Ecosystem</h3>
                <p className="text-gray-300 leading-relaxed">
                  More specialized roles and granular permissions will unlock in upcoming phases as we scale to enterprise deployments. Our role-based access control system is designed to accommodate complex organizational structures and diverse use cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Comparison */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Access Level Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-2 border-gray-800 rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-black border-b-2 border-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold">Capability</th>
                  <th className="px-6 py-4 text-center text-gray-300 font-semibold">Student</th>
                  <th className="px-6 py-4 text-center text-gray-300 font-semibold">Trainer</th>
                  <th className="px-6 py-4 text-center text-gray-300 font-semibold">Admin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {[
                  { capability: 'IDE Workspace Access', student: true, trainer: true, admin: true },
                  { capability: 'AI Syntax Helper', student: true, trainer: true, admin: false },
                  { capability: 'View All Workspaces', student: false, trainer: true, admin: true },
                  { capability: 'User Management', student: false, trainer: false, admin: true },
                  { capability: 'Platform Analytics', student: false, trainer: true, admin: true },
                  { capability: 'Billing Management', student: false, trainer: false, admin: true },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-900/30 transition-colors border-b border-gray-800 last:border-b-0">
                    <td className="px-6 py-4 text-gray-300">{row.capability}</td>
                    <td className="px-6 py-4 text-center">
                      {row.student ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.trainer ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.admin ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RolesPage

