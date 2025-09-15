import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from 'lucide-react';
import { Button } from './Button';
import { Map } from './Map';
export const ContactSection = () => {
  return <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's <span className="text-red-800">Connect</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Have questions about our growth solutions or interested in joining
            our team? We'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input type="text" id="first-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input type="text" id="last-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 transition-colors" placeholder="How can we help you?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 transition-colors" placeholder="Tell us what you're looking for..."></textarea>
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  <SendIcon className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <MapPinIcon className="h-5 w-5 text-red-800" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Office Location</p>
                    <p className="text-gray-600">
                      1200 Brickell Avenue, Suite 800
                    </p>
                    <p className="text-gray-600">Miami, FL</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <PhoneIcon className="h-5 w-5 text-red-800" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Phone</p>
                    <p className="text-gray-600">(305) 555-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <MailIcon className="h-5 w-5 text-red-800" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Email</p>
                    <p className="text-gray-600">hello@truevisiongrowth.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-80 rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>;
};