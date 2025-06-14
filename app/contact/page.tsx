"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <Card className="max-w-md mx-auto text-center p-8">
          <CardContent className="p-0">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your inquiry has been submitted successfully. Our team will review your request and get back to you within
              24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
              Submit Another Inquiry
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Getting Quality Leads?</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Contact MLGG today to discuss your real estate investment goals and discover how our premium lead
              generation services can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-700 font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-700 font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-gray-700 font-medium">
                        Company/Organization
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us about your investment goals and lead requirements..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-gray-900">Get in Touch</CardTitle>
                    <p className="text-gray-600">Multiple ways to reach our team for immediate assistance.</p>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">Call us for immediate assistance</p>
                        <p className="text-blue-600 font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">Send us a detailed message</p>
                        <p className="text-green-600 font-medium">info@mlgg.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-8 bg-slate-900 text-white">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl">Why Contact MLGG?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-4">
                      {[
                        "Free consultation on your investment goals",
                        "Custom lead generation strategies",
                        "Access to exclusive off-market opportunities",
                        "International expertise with local knowledge",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
