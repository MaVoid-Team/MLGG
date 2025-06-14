import { Building2, Phone, Mail, MapPin, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-mlgg-deep-blue via-mlgg-medium-blue to-mlgg-deep-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rotate-45 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-24 h-24 border border-white/30 -rotate-12 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/30 rotate-12 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-mlgg-gold to-mlgg-teal p-3 rounded-2xl shadow-lg">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black">MLGG</span>
                <span className="text-sm text-white/80 -mt-1">MaVoid Lead Generation</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Premium real estate lead generation services for serious investors. Internationally verified and locally
              focused across 4 countries.
            </p>
            <div className="flex space-x-3">
              {["🇴🇲", "🇸🇦", "🇪🇬", "🇦🇪"].map((flag, index) => (
                <span key={index} className="text-3xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {flag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-mlgg-gold flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-mlgg-gold transition-colors font-medium hover:translate-x-1 inline-block transition-transform duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-mlgg-teal">Our Specialties</h3>
            <ul className="space-y-3">
              {["Distressed Properties", "Absentee Owners", "Off-Market Deals", "Market Analysis"].map((service) => (
                <li key={service}>
                  <span className="text-white/80 font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-mlgg-gold">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-mlgg-gold/20 p-2 rounded-lg group-hover:bg-mlgg-gold/30 transition-colors">
                  <Phone className="h-5 w-5 text-mlgg-gold" />
                </div>
                <span className="text-white/80 font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-mlgg-teal/20 p-2 rounded-lg group-hover:bg-mlgg-teal/30 transition-colors">
                  <Mail className="h-5 w-5 text-mlgg-teal" />
                </div>
                <span className="text-white/80 font-medium">info@mlgg.com</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-mlgg-medium-blue/20 p-2 rounded-lg group-hover:bg-mlgg-medium-blue/30 transition-colors">
                  <MapPin className="h-5 w-5 text-mlgg-medium-blue mt-0.5" />
                </div>
                <span className="text-white/80 font-medium">
                  Serving US Real Estate Investors
                  <br />
                  <span className="text-mlgg-gold">Internationally Verified</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 font-medium">
              © {new Date().getFullYear()} MaVoid Lead Generation Group (MLGG). All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-white/60 hover:text-mlgg-gold font-medium transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-mlgg-gold font-medium transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
