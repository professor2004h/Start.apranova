import { Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react'

const PrivacyPolicyPage = () => {
  const lastUpdated = 'October 18, 2025'

  const sections = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Account Information',
          text: 'When you create an Apranova account, we collect your name, email address, educational institution affiliation, and role (student, trainer, or administrator). This information is necessary to provide you with access to our platform and personalize your learning experience.',
        },
        {
          subtitle: 'Usage Data',
          text: 'We automatically collect information about your interactions with the platform, including course progress, code submissions, exercise completions, and time spent on various activities. This data helps us improve our educational content and provide meaningful analytics to trainers and administrators.',
        },
        {
          subtitle: 'Technical Information',
          text: 'We collect device information, IP addresses, browser types, and operating system details to ensure platform compatibility, security, and optimal performance across different environments.',
        },
      ],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Educational Services',
          text: 'Your data is primarily used to deliver our educational platform services, including providing access to cloud-based development environments, tracking learning progress, generating performance analytics, and facilitating collaboration between students and trainers.',
        },
        {
          subtitle: 'Platform Improvement',
          text: 'We analyze aggregated usage patterns to enhance our curriculum, improve AI-assisted learning features, optimize platform performance, and develop new educational tools and resources.',
        },
        {
          subtitle: 'Communication',
          text: 'We use your contact information to send important platform updates, course notifications, security alerts, and educational content relevant to your learning tracks. You can manage communication preferences in your account settings.',
        },
      ],
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: 'Data Storage and Security',
      content: [
        {
          subtitle: 'Secure Infrastructure',
          text: 'All user data is stored on enterprise-grade cloud infrastructure with encryption at rest and in transit. We utilize AWS services with multi-region redundancy, automated backups, and industry-standard security protocols to protect your information.',
        },
        {
          subtitle: 'Access Controls',
          text: 'We implement role-based access control (RBAC) to ensure that only authorized personnel can access user data. Students can only view their own data, trainers can access data for their assigned courses, and administrators have controlled access based on their institutional responsibilities.',
        },
        {
          subtitle: 'Code and Project Data',
          text: 'Your code submissions, projects, and development work are stored securely in isolated environments. We use containerization and Kubernetes orchestration to ensure data isolation between users and prevent unauthorized access.',
        },
      ],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Data Sharing and Third Parties',
      content: [
        {
          subtitle: 'Educational Institutions',
          text: 'If you access Apranova through an educational institution, we may share your progress data, completion status, and performance metrics with authorized administrators and trainers at your institution. This sharing is limited to educational purposes only.',
        },
        {
          subtitle: 'Service Providers',
          text: 'We work with trusted third-party service providers for authentication (Auth0), cloud infrastructure (AWS), monitoring (Prometheus/Grafana), and analytics. These providers are contractually obligated to protect your data and use it only for providing services to Apranova.',
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, court order, or governmental regulation, or if necessary to protect the rights, property, or safety of Apranova, our users, or the public.',
        },
      ],
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: 'Cookies and Tracking',
      content: [
        {
          subtitle: 'Essential Cookies',
          text: 'We use essential cookies to maintain your session, remember your preferences, and ensure platform functionality. These cookies are necessary for the platform to work properly and cannot be disabled.',
        },
        {
          subtitle: 'Analytics Cookies',
          text: 'With your consent, we use analytics cookies to understand how users interact with our platform, identify areas for improvement, and measure the effectiveness of our educational content. You can opt out of analytics cookies in your account settings.',
        },
        {
          subtitle: 'Third-Party Cookies',
          text: 'Some features may use third-party cookies from our service providers (e.g., authentication services). These cookies are governed by the respective third-party privacy policies.',
        },
      ],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Your Rights and Choices',
      content: [
        {
          subtitle: 'Access and Portability',
          text: 'You have the right to access your personal data and request a copy in a portable format. You can download your code projects, exercise submissions, and progress reports directly from your account dashboard.',
        },
        {
          subtitle: 'Correction and Deletion',
          text: 'You can update your account information at any time through your profile settings. You may also request deletion of your account and associated data by contacting us at contact@apranova.com. Note that some data may be retained for legal or legitimate business purposes.',
        },
        {
          subtitle: 'Opt-Out Rights',
          text: 'You can opt out of non-essential communications, analytics tracking, and certain data processing activities. However, opting out of essential services may limit your ability to use certain platform features.',
        },
        {
          subtitle: 'Data Protection Rights (GDPR/CCPA)',
          text: 'If you are located in the European Union or California, you have additional rights under GDPR or CCPA, including the right to object to processing, restrict processing, and lodge complaints with supervisory authorities.',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="heading-xl mb-6">Privacy Policy</h1>
            <p className="text-gray-300 text-lg mb-4">
              Your privacy and data security are fundamental to our mission. This policy explains how
              Apranova collects, uses, protects, and shares your information.
            </p>
            <p className="text-gray-400 text-sm">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`section-padding bg-black ${index > 0 ? 'border-t border-gray-800' : ''}`}
        >
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="flex items-start space-x-4 mb-8">
                <div className="text-primary mt-1">{section.icon}</div>
                <div>
                  <h2 className="heading-lg mb-2">{section.title}</h2>
                </div>
              </div>

              {/* Section Content */}
              <div className="space-y-6 ml-16">
                {section.content.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.subtitle}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Data Retention */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Data Retention</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We retain your personal data for as long as your account is active or as needed to provide
                you with our services. If you request account deletion, we will delete or anonymize your
                personal information within 30 days, except where we are required to retain it for legal,
                regulatory, or legitimate business purposes.
              </p>
              <p>
                Course completion records and certifications may be retained indefinitely to maintain the
                integrity of educational credentials. Aggregated and anonymized data may be retained for
                research and platform improvement purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Apranova is designed for users aged 16 and older. We do not knowingly collect personal
              information from children under 16. If you believe we have inadvertently collected information
              from a child under 16, please contact us immediately at contact@apranova.com, and we will take
              steps to delete such information.
            </p>
          </div>
        </div>
      </section>

      {/* International Data Transfers */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Apranova operates globally and may transfer your data to servers located in different countries.
              We ensure that all international data transfers comply with applicable data protection laws and
              implement appropriate safeguards, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Standard contractual clauses approved by regulatory authorities</li>
              <li>Adequacy decisions for data transfers to approved countries</li>
              <li>Encryption and security measures during data transmission</li>
              <li>Regular audits of our data processing practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Changes to Privacy Policy */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices,
              technology, legal requirements, or other factors. We will notify you of any material changes by
              posting the updated policy on this page and updating the "Last Updated" date. For significant
              changes, we will provide additional notice through email or platform notifications. Your
              continued use of Apranova after such changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-black border-2 border-gray-800 rounded-2xl p-12 text-center shadow-lg">
            <h2 className="heading-lg mb-4">Questions About Privacy?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data
              practices, please contact our Data Protection Officer.
            </p>
            <a
              href="mailto:contact@apranova.com?subject=Privacy Policy Inquiry"
              className="btn-primary text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage

