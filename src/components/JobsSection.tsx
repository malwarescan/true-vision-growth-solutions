import React from 'react';
import { jobs } from '../data/jobs';
import { Button } from './Button';
import { BriefcaseIcon, CheckIcon, ChevronRightIcon } from 'lucide-react';
import { FAQSchema } from './FAQSchema';
export const JobsSection = () => {
  return <section id="careers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-4">
            Careers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-red-800">Vision</span> for Growth
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We're building a team of exceptional talent to shape the future of
            growth analytics. If you're passionate about innovation and
            data-driven solutions, we want to meet you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jobs.map(job => <div key={job.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-red-100">
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-red-50 rounded-lg mr-3">
                    <BriefcaseIcon className="h-5 w-5 text-red-800" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {job.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{job.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What You'll Need:
                  </h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{req}</span>
                      </li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What We Offer:
                  </h4>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-red-800 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Button className="w-full group">
                  Apply Now
                  <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>)}
        </div>
        <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Don't see the perfect role?
              </h3>
              <p className="text-red-100">
                We're always looking for exceptional talent to join our team.
                Send us your resume and we'll be in touch.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button variant="secondary" className="w-full md:w-auto whitespace-nowrap">
                Send Open Application
              </Button>
            </div>
          </div>
        </div>
        <FAQSchema />
      </div>
    </section>;
};