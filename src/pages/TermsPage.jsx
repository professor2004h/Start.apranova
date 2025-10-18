import { FileText, Users, Shield, AlertCircle, Scale, BookOpen } from 'lucide-react'

const TermsPage = () => {
  const lastUpdated = 'October 18, 2025'

  const sections = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Acceptance of Terms',
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing or using the Apranova platform, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not access or use our services. These terms constitute a legally binding agreement between you and Apranova.',
        },
        {
          subtitle: 'Eligibility',
          text: 'You must be at least 16 years old to use Apranova. By using our platform, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these terms. If you are using Apranova on behalf of an educational institution, you represent that you have the authority to bind that institution to these terms.',
        },
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to modify these terms at any time. We will notify users of material changes via email or platform notifications. Your continued use of Apranova after such modifications constitutes acceptance of the updated terms.',
        },
      ],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'User Accounts and Responsibilities',
      content: [
        {
          subtitle: 'Account Creation',
          text: 'To access Apranova, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized access or security breach.',
        },
        {
          subtitle: 'Account Types',
          text: 'Apranova offers different account types (Student, Trainer, Administrator) with varying access levels and permissions. Your account type determines your access to features, content, and data. Misrepresenting your account type or attempting to access unauthorized features is prohibited.',
        },
        {
          subtitle: 'User Conduct',
          text: 'You agree to use Apranova only for lawful educational purposes. You will not engage in any activity that disrupts the platform, infringes on others\' rights, violates applicable laws, or compromises the security or integrity of our systems. Prohibited activities include hacking, distributing malware, harassment, and unauthorized data access.',
        },
      ],
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Acceptable Use Policy',
      content: [
        {
          subtitle: 'Educational Purpose',
          text: 'Apranova is designed exclusively for educational and training purposes. You may use the platform to learn programming, complete exercises, collaborate with peers, and develop projects as part of your coursework. Commercial use of the platform or its resources without explicit authorization is prohibited.',
        },
        {
          subtitle: 'Code of Conduct',
          text: 'Users must maintain professional and respectful behavior when interacting with other users, trainers, and administrators. Harassment, discrimination, hate speech, or any form of abusive behavior will not be tolerated and may result in immediate account suspension or termination.',
        },
        {
          subtitle: 'Resource Usage',
          text: 'You agree to use platform resources (cloud IDE, storage, computing power) responsibly and within allocated limits. Excessive resource consumption, cryptocurrency mining, or running unauthorized services in development environments is strictly prohibited and may result in account termination.',
        },
      ],
    },
    {
      icon: <Scale className="w-12 h-12" />,
      title: 'Intellectual Property Rights',
      content: [
        {
          subtitle: 'Platform Ownership',
          text: 'Apranova and its original content, features, functionality, and design are owned by Apranova and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our platform without explicit permission.',
        },
        {
          subtitle: 'User Content',
          text: 'You retain ownership of the code, projects, and content you create on Apranova. By using our platform, you grant us a limited, non-exclusive license to host, store, and display your content as necessary to provide our services. We will not use your code or projects for commercial purposes without your consent.',
        },
        {
          subtitle: 'Educational Materials',
          text: 'Course materials, exercises, tutorials, and documentation provided by Apranova are licensed for educational use only. You may not redistribute, sell, or commercially exploit these materials. Trainers and institutions may have additional rights to materials they create and upload to the platform.',
        },
        {
          subtitle: 'Third-Party Content',
          text: 'The platform may include content from third-party sources, including open-source libraries, frameworks, and educational resources. Such content is subject to the respective third-party licenses and terms. You are responsible for complying with applicable third-party licenses when using such content.',
        },
      ],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Service Availability and Limitations',
      content: [
        {
          subtitle: 'Service Availability',
          text: 'We strive to maintain high availability of the Apranova platform, but we do not guarantee uninterrupted or error-free service. The platform may be temporarily unavailable due to maintenance, updates, or unforeseen technical issues. We will provide advance notice of scheduled maintenance when possible.',
        },
        {
          subtitle: 'Beta Features',
          text: 'Apranova may offer beta or experimental features that are still under development. These features are provided "as is" without warranties and may be modified or discontinued at any time. Your use of beta features is at your own risk.',
        },
        {
          subtitle: 'Data Backup',
          text: 'While we implement robust backup systems, you are responsible for maintaining your own backups of important code and projects. We recommend regularly downloading your work and storing it in external repositories or version control systems.',
        },
      ],
    },
    {
      icon: <AlertCircle className="w-12 h-12" />,
      title: 'Disclaimers and Limitation of Liability',
      content: [
        {
          subtitle: 'Disclaimer of Warranties',
          text: 'Apranova is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the platform will meet your requirements or that it will be error-free, secure, or uninterrupted.',
        },
        {
          subtitle: 'Limitation of Liability',
          text: 'To the maximum extent permitted by law, Apranova and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, loss of profits, or business interruption, arising from your use of or inability to use the platform.',
        },
        {
          subtitle: 'Educational Outcomes',
          text: 'While Apranova provides high-quality educational resources and tools, we do not guarantee specific learning outcomes, job placement, certification, or career advancement. Your success depends on your effort, dedication, and individual circumstances.',
        },
        {
          subtitle: 'Third-Party Services',
          text: 'The platform integrates with third-party services (authentication, cloud infrastructure, analytics). We are not responsible for the availability, accuracy, or reliability of these third-party services. Your use of third-party services is subject to their respective terms and conditions.',
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
            <Scale className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="heading-xl mb-6">Terms and Conditions</h1>
            <p className="text-gray-300 text-lg mb-4">
              These terms govern your use of the Apranova educational technology platform. Please read them
              carefully before using our services.
            </p>
            <p className="text-gray-400 text-sm">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Termination */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Account Termination</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                You may terminate your account at any time by contacting us at contact@apranova.com. Upon
                termination, your access to the platform will be revoked, and your data will be handled in
                accordance with our Privacy Policy.
              </p>
              <p>
                We reserve the right to suspend or terminate your account immediately, without prior notice,
                if you violate these terms, engage in prohibited activities, or if we believe your actions
                pose a risk to the platform, other users, or our business operations. In case of termination
                for cause, you may not be entitled to a refund of any fees paid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Indemnification */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Apranova, its affiliates, officers, directors,
              employees, and agents from and against any claims, liabilities, damages, losses, costs, or
              expenses (including reasonable attorneys' fees) arising from your use of the platform, violation
              of these terms, infringement of any intellectual property or other rights, or any harmful or
              unlawful conduct.
            </p>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction
                in which Apranova is registered, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these terms or your use of Apranova shall be resolved through binding
                arbitration in accordance with the rules of the applicable arbitration association. You waive
                any right to participate in class action lawsuits or class-wide arbitration.
              </p>
              <p>
                Notwithstanding the above, either party may seek injunctive or equitable relief in a court of
                competent jurisdiction to prevent actual or threatened infringement, misappropriation, or
                violation of intellectual property rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Severability */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Severability and Entire Agreement</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If any provision of these terms is found to be invalid, illegal, or unenforceable, the
                remaining provisions shall continue in full force and effect. The invalid provision shall be
                modified to the minimum extent necessary to make it valid and enforceable.
              </p>
              <p>
                These Terms and Conditions, together with our Privacy Policy and any other legal notices
                published on the platform, constitute the entire agreement between you and Apranova regarding
                your use of the platform and supersede all prior agreements and understandings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-black border-t border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-black border-2 border-gray-800 rounded-2xl p-12 text-center shadow-lg">
            <h2 className="heading-lg mb-4">Questions About These Terms?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have questions or concerns regarding these Terms and Conditions, please contact our legal
              team.
            </p>
            <a
              href="mailto:contact@apranova.com?subject=Terms and Conditions Inquiry"
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

export default TermsPage

