import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30">Terms of Service</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Please read these terms carefully before using MLGG's website and services. By accessing our website, you
              agree to be bound by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using the MaVoid Lead Generation Group (MLGG) website and services, you accept and agree
              to be bound by the terms and provision of this agreement. If you do not agree to abide by the above,
              please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-6">
              MLGG provides real estate lead generation services to investors and professionals in the United States.
              Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Distressed property lead generation</li>
              <li>Absentee owner identification</li>
              <li>Off-market opportunity sourcing</li>
              <li>Market analysis and consultation</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-6">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Provide accurate and complete information when requested</li>
              <li>Use our services only for lawful purposes</li>
              <li>Respect the privacy and rights of property owners in our leads</li>
              <li>Comply with all applicable local, state, and federal laws</li>
              <li>Not share or redistribute our proprietary lead information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Limitations</h2>
            <p className="text-gray-600 mb-6">
              While we strive to provide accurate and up-to-date information, MLGG makes no guarantees regarding:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>The accuracy or completeness of lead information</li>
              <li>The availability or willingness of property owners to sell</li>
              <li>The success of any particular investment opportunity</li>
              <li>Market conditions or property values</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is
              the property of MLGG or its content suppliers and is protected by copyright and other intellectual
              property laws. You may not reproduce, distribute, or create derivative works from our content without
              express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our
              services, to understand our practices regarding the collection and use of your personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              MLGG shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting
              from the use or inability to use our services, even if we have been advised of the possibility of such
              damages. This includes but is not limited to damages for loss of profits, business interruption, or loss
              of information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
            <p className="text-gray-600 mb-6">
              You agree to indemnify and hold harmless MLGG, its officers, directors, employees, and agents from any
              claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-600 mb-6">
              MLGG reserves the right to terminate or suspend your access to our services at any time, without notice,
              for conduct that we believe violates these terms or is harmful to other users, us, or third parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms shall be governed by and construed in accordance with the laws of the United States and the
              state in which MLGG is incorporated, without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              MLGG reserves the right to modify these terms at any time. We will notify users of any material changes by
              posting the updated terms on our website. Your continued use of our services after such modifications
              constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> legal@mlgg.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> MLGG Legal Department
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
