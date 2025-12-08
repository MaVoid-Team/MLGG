import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, Users, TrendingUp, Search, FileText, Phone } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Premium Real Estate Lead Generation Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Specialized lead types and comprehensive services designed to maximize your real estate investment
              opportunities across the United States.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Specialized Lead Types for Every Investment Strategy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide carefully curated leads across multiple property types and investment strategies, each
                thoroughly vetted for quality and potential.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                <CardHeader className="p-0 mb-6">
                  <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Home className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Distressed Properties</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Properties facing foreclosure, tax liens, or financial distress. These leads offer significant
                    potential for below-market acquisitions and value-add opportunities.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Pre-foreclosure properties",
                      "Tax lien opportunities",
                      "Motivated seller situations",
                      "Below-market pricing potential",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                <CardHeader className="p-0 mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Absentee Owners</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Property owners who live outside the area and may be interested in selling. These leads often
                    represent excellent opportunities for quick acquisitions.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Out-of-state property owners",
                      "Inherited property situations",
                      "Investment property liquidation",
                      "Management burden relief",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                <CardHeader className="p-0 mb-6">
                  <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Off-Market Deals</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Exclusive opportunities not listed on the MLS. These leads provide access to properties before they
                    hit the public market, giving you a competitive advantage.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Pre-MLS opportunities",
                      "Private seller networks",
                      "Exclusive property access",
                      "Reduced competition",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Lead Generation Process</h2>
              <p className="text-xl text-gray-600">
                A systematic approach that ensures quality and maximizes your investment potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Data Collection",
                  description: "We gather comprehensive property and owner data from multiple verified sources.",
                  icon: Search,
                },
                {
                  step: "02",
                  title: "Analysis & Filtering",
                  description: "Advanced algorithms and manual review identify the most promising opportunities.",
                  icon: FileText,
                },
                {
                  step: "03",
                  title: "Verification",
                  description: "Each lead undergoes thorough verification to ensure accuracy and viability.",
                  icon: CheckCircle,
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "Qualified leads are delivered to you with all necessary contact and property details.",
                  icon: Phone,
                },
              ].map((item) => (
                <Card key={item.step} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Our Service Different</h2>
              <p className="text-xl text-gray-600">International expertise meets local market knowledge</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "International Verification",
                  description:
                    "Our verified status across 4 countries demonstrates our credibility and operational excellence, giving you confidence in our service quality.",
                },
                {
                  title: "Quality Over Quantity",
                  description:
                    "We focus on delivering thoroughly vetted, high-potential leads rather than overwhelming you with unqualified prospects.",
                },
                {
                  title: "Multiple Lead Sources",
                  description:
                    "We utilize diverse data sources and proprietary methods to identify opportunities that others might miss.",
                },
                {
                  title: "Ongoing Support",
                  description:
                    "Our team provides continued support and guidance to help you maximize the value of every lead we provide.",
                },
                {
                  title: "Custom Targeting",
                  description:
                    "Leads can be customized based on your specific investment criteria, geographic preferences, and deal size requirements.",
                },
                {
                  title: "Fast Delivery",
                  description:
                    "Time-sensitive opportunities are delivered quickly, ensuring you can act on the best deals before your competition.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Access Premium Real Estate Leads?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join successful investors who trust MLGG for their lead generation needs. Contact us today to discuss your
              specific requirements and get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-white text-white hover:bg-blue-700/95 text-lg px-8 py-6"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
