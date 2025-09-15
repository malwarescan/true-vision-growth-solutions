export interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  benefits: string[];
}
export const jobs: Job[] = [{
  id: 'growth-consultant-1',
  title: 'Growth Strategist',
  description: '',
  requirements: ['Experience with growth frameworks and methodologies', 'Strong analytical skills and data interpretation abilities', 'Excellent communication and presentation skills', 'Background in tech, SaaS, or digital products preferred.'],
  benefits: ['Competitive salary with performance-based equity', 'Comprehensive health, dental, and vision coverage.', 'Flexible work arrangements and unlimited PTO', 'Professional development budget and mentorship program']
}, {
  id: 'data-scientist-1',
  title: 'Data Scientist',
  description: '',
  requirements: ['Degree in Computer Science, Statistics, or a related field.', 'Experience with Python, R, or similar data science tools.', 'Knowledge of machine learning algorithms and statistical methods', 'Strong problem-solving and critical thinking abilities'],
  benefits: ['Competitive salary with quarterly performance bonuses', 'Full health benefits and 401(k) matching', 'Remote-first work environment with co-working stipend', 'Cutting-edge tech stack and learning opportunities']
}, {
  id: 'product-manager-1',
  title: 'Product Growth Manager',
  description: '',
  requirements: ['Experience in product management or growth roles', 'Strong understanding of product analytics and metrics', 'Ability to run and analyze A/B tests and experiments', 'Excellent cross-functional collaboration skills'],
  benefits: ['Competitive base salary with equity compensation', 'Comprehensive benefits package including mental health support', 'Flexible work schedule and location', 'Regular team retreats and professional development opportunities']
}];