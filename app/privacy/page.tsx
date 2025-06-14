import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30">Privacy Policy</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Your Privacy Matters to Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              MLGG is committed to protecting your personal information and privacy. This policy explains how we
              collect, use, and safeguard your data.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you fill out our contact form, request
              information about our services, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company or organization name</li>
              <li>Investment preferences and requirements</li>
              <li>Messages and communications with our team</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Provide you with information about our lead generation services</li>
              <li>Customize our services to meet your investment needs</li>
              <li>Send you relevant market updates and service information (with your consent)</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy. We may share your information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>With service providers who assist us in operating our website and conducting business</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-6">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              Our website may use cookies and similar tracking technologies to enhance your experience. These
              technologies help us understand how you use our website and improve our services. You can control cookie
              settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Data Transfers</h2>
            <p className="text-gray-600 mb-6">
              As an internationally verified company operating across multiple countries, your information may be
              transferred to and processed in countries other than your own. We ensure appropriate safeguards are in
              place to protect your information in accordance with this privacy policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting
              the new policy on our website and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> privacy@mlgg.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> MLGG Privacy Officer
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
