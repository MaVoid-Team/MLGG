"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, CheckCircle, Loader2, AlertCircle } from 'lucide-react'
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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        setError("Failed to send message. Please try again or contact us directly.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-mlgg-light flex items-center justify-center py-20">
        <Card className="max-w-md mx-auto text-center p-8 shadow-2xl border-0">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-mlgg-teal/20 to-mlgg-teal/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-mlgg-teal" />
            </div>
            <h2 className="text-3xl font-bold text-mlgg-deep-blue mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your inquiry has been submitted successfully. Our team will review your investment goals and get back to you within
              <span className="font-semibold text-mlgg-deep-blue"> 24 hours</span>.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              className="bg-gradient-to-r from-mlgg-deep-blue to-mlgg-teal hover:from-mlgg-teal hover:to-mlgg-deep-blue text-white font-bold px-8 py-3 rounded-xl"
            >
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
      <section className="bg-gradient-to-br from-mlgg-deep-blue via-mlgg-medium-blue to-mlgg-teal text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-mlgg-gold/20 text-mlgg-gold border-mlgg-gold/30 backdrop-blur-sm">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Getting Quality Leads?</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Contact MLGG today to discuss your real estate investment goals and discover how our premium lead
              generation services can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-mlgg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 shadow-2xl border-0 bg-white">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-2xl text-mlgg-deep-blue">Send Us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-mlgg-deep-blue font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="mt-1 border-mlgg-medium-blue/20 focus:border-mlgg-teal focus:ring-mlgg-teal"
                          placeholder="Enter your first name"
                          disabled={isLoading}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-mlgg-deep-blue font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="mt-1 border-mlgg-medium-blue/20 focus:border-mlgg-teal focus:ring-mlgg-teal"
                          placeholder="Enter your last name"
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-mlgg-deep-blue font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 border-mlgg-medium-blue/20 focus:border-mlgg-teal focus:ring-mlgg-teal"
                        placeholder="Enter your email address"
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-mlgg-deep-blue font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 border-mlgg-medium-blue/20 focus:border-mlgg-teal focus:ring-mlgg-teal"
                        placeholder="Enter your phone number"
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-mlgg-deep-blue font-medium">
                        Company/Organization
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1 border-mlgg-medium-blue/20 focus:border-mlgg-teal focus:ring-mlgg-teal"
                        placeholder="Enter your company name"
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-mlgg-deep-blue font-medium">
                        Investment Goals & Requirements *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 min-h-[120px] border-mlgg-medium-blue/20 focus:border-mlgg-teal focus:ring-mlgg-teal"
                        placeholder="Tell us about your investment goals, preferred property types, target locations, budget range, and any specific lead requirements..."
                        disabled={isLoading}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-mlgg-deep-blue to-mlgg-teal hover:from-mlgg-teal hover:to-mlgg-deep-blue text-white text-lg py-6 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="p-8 shadow-2xl border-0 bg-white">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-mlgg-deep-blue">Get in Touch</CardTitle>
                    <p className="text-gray-600">Multiple ways to reach our team for immediate assistance.</p>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-mlgg-deep-blue/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-mlgg-deep-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-mlgg-deep-blue mb-1">Phone</h3>
                        <p className="text-gray-600">Call us for immediate assistance</p>
                        <p className="text-mlgg-deep-blue font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-mlgg-teal/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-mlgg-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-mlgg-deep-blue mb-1">Email</h3>
                        <p className="text-gray-600">Send us a detailed message</p>
                        <p className="text-mlgg-teal font-medium">info@mlgg.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-mlgg-gold/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-mlgg-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-mlgg-deep-blue mb-1">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-mlgg-deep-blue to-mlgg-teal text-white shadow-2xl border-0">
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
                          <CheckCircle className="h-5 w-5 text-mlgg-gold flex-shrink-0" />
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
