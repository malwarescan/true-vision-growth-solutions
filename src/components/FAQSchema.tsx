import React from 'react';
export const FAQSchema = () => {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: 'What is the company culture like at True Vision Growth Solutions Inc?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'True Vision Growth Solutions Inc. offers an innovative, results-driven culture with a collaborative team environment. We focus on measurable growth and provide opportunities for professional advancement based on performance.'
      }
    }, {
      '@type': 'Question',
      name: 'What benefits does True Vision Growth Solutions Inc. offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer competitive compensation packages including base salary plus performance incentives, comprehensive health benefits, professional development opportunities, and clear paths to advancement within the company.'
      }
    }, {
      '@type': 'Question',
      name: 'Why are True Vision Growth Solutions Inc. jobs considered among the best in South Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Our positions are highly regarded due to our data-driven approach, opportunities for professional growth, competitive compensation, and innovative work environment. We're recognized for delivering measurable results for both our clients and our team members."
      }
    }, {
      '@type': 'Question',
      name: 'Do I need prior experience to work at True Vision Growth Solutions Inc?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While experience is valuable for many of our positions, we also consider candidates with strong analytical abilities, growth mindsets, and the drive to succeed. We provide comprehensive training and mentoring to help you develop professionally.'
      }
    }, {
      '@type': 'Question',
      name: 'Where is True Vision Growth Solutions Inc. located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our office is conveniently located in South Florida, in the heart of the business district.'
      }
    }]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqData)
  }} />;
};