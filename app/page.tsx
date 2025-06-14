import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, TrendingUp, Shield, Phone, Mail, Sparkles, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mlgg-teal/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-mlgg-gold/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-mlgg-medium-blue/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-mlgg-deep-blue via-mlgg-medium-blue to-mlgg-teal text-white overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/30 rotate-45 animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/30 rotate-12 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-3/4 w-40 h-40 border border-white/30 -rotate-12 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Floating Badge */}
            <div className="animate-slide-up">
              <Badge className="mb-8 bg-mlgg-gold/20 text-mlgg-gold border-mlgg-gold/30 backdrop-blur-sm px-6 py-2 text-lg font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Verified International Lead Generation
              </Badge>
            </div>

            {/* Main Heading with Gradient Text */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-tight">
                Premium Real Estate
                <span className="block bg-gradient-to-r from-mlgg-gold via-mlgg-teal to-mlgg-gold bg-clip-text text-transparent animate-glow">
                  Leads That Convert
                </span>
              </h1>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-xl lg:text-2xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto">
                MLGG delivers high-quality, verified real estate investment opportunities across the US.
                <span className="text-mlgg-gold font-semibold"> Backed by our international expertise</span> and proven
                track record.
              </p>
            </div>

            {/* CTA Buttons with Glassmorphism */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-mlgg-gold hover:bg-mlgg-gold/90 text-mlgg-deep-blue text-lg px-10 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-mlgg-gold/25 transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Your Leads Today
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
              >
                <Link href="/services">
                  <Target className="w-5 h-5 mr-2" />
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Floating Stats */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              {[
                { number: "4", label: "Countries Verified", icon: Globe },
                { number: "1000+", label: "Successful Deals", icon: TrendingUp },
                { number: "99%", label: "Client Satisfaction", icon: Shield },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <stat.icon className="w-8 h-8 text-mlgg-gold mx-auto mb-4" />
                  <div className="text-4xl font-black text-mlgg-gold mb-2">{stat.number}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trust Indicators with Modern Cards */}
      <section className="py-24 bg-mlgg-light relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-mlgg-deep-blue/10 text-mlgg-deep-blue border-mlgg-deep-blue/20">
              International Verification
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-mlgg-deep-blue mb-6">
              Trusted & Verified
              <span className="block text-mlgg-teal">Across 4 Countries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MLGG is officially verified and operates across multiple international markets, bringing global expertise
              to US real estate investment.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { country: "Oman", flag: "🇴🇲", color: "mlgg-deep-blue" },
              { country: "Saudi Arabia", flag: "🇸🇦", color: "mlgg-medium-blue" },
              { country: "Egypt", flag: "🇪🇬", color: "mlgg-teal" },
              { country: "UAE", flag: "🇦🇪", color: "mlgg-gold" },
            ].map((item, index) => (
              <Card
                key={item.country}
                className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-${item.color}/5`}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${item.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      {item.flag}
                    </div>
                    <h3 className="font-bold text-mlgg-deep-blue text-lg mb-3">{item.country}</h3>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-mlgg-teal mr-2" />
                      <span className="text-mlgg-teal font-semibold">Verified</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition with Unique Layout */}
      <section className="py-24 bg-gradient-to-br from-mlgg-deep-blue/5 to-mlgg-teal/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #4059AD 2px, transparent 2px), radial-gradient(circle at 75% 75%, #97D8C4 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-mlgg-gold/10 text-mlgg-gold border-mlgg-gold/20">Why Choose MLGG</Badge>
              <h2 className="text-4xl lg:text-6xl font-black text-mlgg-deep-blue mb-8">
                International Expertise
                <span className="block bg-gradient-to-r from-mlgg-teal to-mlgg-gold bg-clip-text text-transparent">
                  Meets Local Knowledge
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We combine international expertise with deep US market knowledge to deliver the highest quality real
                estate investment opportunities that others simply can't match.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Global Expertise",
                  description:
                    "Our international verification and multi-market experience gives us unique insights into real estate investment opportunities that others miss.",
                  color: "mlgg-deep-blue",
                  bgColor: "mlgg-deep-blue/10",
                },
                {
                  icon: TrendingUp,
                  title: "Proven Results",
                  description:
                    "Our systematic approach to lead generation has helped investors across the US identify and secure profitable real estate opportunities.",
                  color: "mlgg-teal",
                  bgColor: "mlgg-teal/10",
                },
                {
                  icon: Shield,
                  title: "Quality Assured",
                  description:
                    "Every lead is thoroughly vetted and verified before delivery, ensuring you receive only the highest quality investment opportunities.",
                  color: "mlgg-gold",
                  bgColor: "mlgg-gold/10",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-${item.bgColor}`}
                >
                  <CardContent className="p-10 relative">
                    {/* Animated Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${item.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div
                        className={`bg-${item.bgColor} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className={`h-10 w-10 text-${item.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-mlgg-deep-blue mb-6">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview with Creative Layout */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-mlgg-teal/10 text-mlgg-teal border-mlgg-teal/20">Our Specialties</Badge>
              <h2 className="text-4xl lg:text-6xl font-black text-mlgg-deep-blue mb-8">
                Specialized Leads for
                <span className="block bg-gradient-to-r from-mlgg-gold to-mlgg-teal bg-clip-text text-transparent">
                  Every Strategy
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                From distressed properties to off-market opportunities, we provide leads tailored to your specific
                investment goals with unmatched precision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { type: "Distressed Properties", color: "mlgg-deep-blue", icon: "🏚️" },
                { type: "Absentee Owners", color: "mlgg-teal", icon: "🏠" },
                { type: "Off-Market Deals", color: "mlgg-gold", icon: "💎" },
              ].map((type, index) => (
                <Card
                  key={type.type}
                  className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-${type.color}/5`}
                >
                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${type.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div className="text-5xl mb-6 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                        {type.icon}
                      </div>
                      <h3 className="font-bold text-mlgg-deep-blue text-xl">{type.type}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-mlgg-deep-blue to-mlgg-teal hover:from-mlgg-teal hover:to-mlgg-deep-blue text-white text-lg px-10 py-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/services">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Glassmorphism */}
      <section className="py-24 bg-gradient-to-br from-mlgg-deep-blue via-mlgg-medium-blue to-mlgg-teal text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mlgg-gold/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mlgg-teal/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl lg:text-6xl font-black mb-8">
                Ready to Scale Your
                <span className="block text-mlgg-gold">Investment Portfolio?</span>
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join successful investors who trust MLGG for their lead generation needs. Get started today and discover
                your next profitable opportunity with our internationally verified expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-mlgg-gold hover:bg-mlgg-gold/90 text-mlgg-deep-blue text-lg px-10 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-mlgg-gold/25 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Getting Leads
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-8 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
                >
                  <Link href="/about">
                    <Globe className="w-5 h-5 mr-2" />
                    Learn Our Story
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-mlgg-gold" />
                  <span className="font-medium">Instant Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-mlgg-gold" />
                  <span className="font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-mlgg-gold" />
                  <span className="font-medium">Verified Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
