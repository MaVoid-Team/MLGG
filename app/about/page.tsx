import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Globe, Award, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30">About MLGG</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">International Expertise, Local Market Knowledge</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              MaVoid Lead Generation Group (MLGG) combines global real estate expertise with deep US market insights to
              deliver premium investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                MLGG was founded as a specialized division of MaVoid, bringing together international real estate
                expertise and cutting-edge lead generation technology. Our unique position as a verified entity across
                multiple international markets gives us unparalleled insights into global real estate trends and
                investment opportunities.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We recognized that successful real estate investment requires more than just data – it requires deep
                market understanding, cultural awareness, and the ability to identify opportunities that others
                overlook. This is where our international verification and multi-market experience becomes invaluable.
              </p>
              <p className="text-lg leading-relaxed">
                Today, MLGG serves serious real estate investors across the United States, providing them with
                high-quality, thoroughly vetted leads that align with their investment strategies and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Verification */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Verified Across International Markets</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our official verification and operational presence across multiple countries demonstrates our commitment
                to excellence and regulatory compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  country: "Oman",
                  flag: "🇴🇲",
                  description: "Officially verified and compliant with Omani business regulations",
                },
                {
                  country: "Saudi Arabia",
                  flag: "🇸🇦",
                  description: "Registered and verified under KSA business compliance standards",
                },
                {
                  country: "Egypt",
                  flag: "🇪🇬",
                  description: "Verified entity with full operational compliance in Egypt",
                },
                {
                  country: "UAE",
                  flag: "🇦🇪",
                  description: "UAE verified with adherence to Emirates business regulations",
                },
              ].map((item) => (
                <Card key={item.country} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 text-center">
                    <div className="text-5xl mb-4">{item.flag}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.country}</h3>
                    <div className="flex items-center justify-center mb-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-600 font-medium">Verified</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do at MLGG</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Perspective</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We leverage our international experience and verification to provide unique insights that give our
                    clients a competitive advantage in the US market.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every lead undergoes rigorous verification and quality assurance processes to ensure our clients
                    receive only the most promising investment opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Success</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our success is measured by our clients' success. We're committed to providing leads that translate
                    into profitable real estate investments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MLGG */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Why Investors Choose MLGG</h2>
              <p className="text-xl text-gray-300">
                Our unique combination of international expertise and US market focus
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Verified International Status",
                  description:
                    "Official verification across 4 countries demonstrates our credibility and operational excellence.",
                },
                {
                  title: "Proven Track Record",
                  description: "Years of successful lead generation with measurable results for real estate investors.",
                },
                {
                  title: "Quality Over Quantity",
                  description: "We focus on delivering high-quality, thoroughly vetted leads rather than volume.",
                },
                {
                  title: "Specialized Expertise",
                  description: "Deep understanding of various investment strategies and property types.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
