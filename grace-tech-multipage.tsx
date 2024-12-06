import React, { useState } from 'react';
import { Menu, X, ChevronRight, Shield, Users, Phone, Mail } from 'lucide-react';

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <img
        src="/logo.png" // Your actual logo path
        alt="Grace Technologies Logo"
        className="h-16 w-auto" // Increased size for better visibility
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold">The Grace Technologies LLC</span>
        <span className="text-sm text-gray-200">Vision - Mission - Values</span>
      </div>
    </div>
  );

  const NavLink = ({ page, children }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`hover:text-gray-200 ${currentPage === page ? 'font-semibold' : ''}`}
    >
      {children}
    </button>
  );

  return (
    <header className="fixed w-full bg-gradient-to-r from-purple-700 to-blue-500 text-white">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-24"> {/* Increased height for logo */}
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center"
            >
              <Logo />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink page="home">Home</NavLink>
            <NavLink page="services">Services</NavLink>
            <NavLink page="about">About</NavLink>
            <NavLink page="contact">Contact</NavLink>
            <NavLink page="blog">Blog</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => { setCurrentPage('home'); setIsOpen(false); }} 
                className="block w-full text-left px-3 py-2 hover:bg-blue-500 rounded-md">
                Home
              </button>
              <button onClick={() => { setCurrentPage('services'); setIsOpen(false); }}
                className="block w-full text-left px-3 py-2 hover:bg-blue-500 rounded-md">
                Services
              </button>
              <button onClick={() => { setCurrentPage('about'); setIsOpen(false); }}
                className="block w-full text-left px-3 py-2 hover:bg-blue-500 rounded-md">
                About
              </button>
              <button onClick={() => { setCurrentPage('contact'); setIsOpen(false); }}
                className="block w-full text-left px-3 py-2 hover:bg-blue-500 rounded-md">
                Contact
              </button>
              <button onClick={() => { setCurrentPage('blog'); setIsOpen(false); }}
                className="block w-full text-left px-3 py-2 hover:bg-blue-500 rounded-md">
                Blog
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }) => (
  <footer className="bg-purple-700 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">The Grace Technologies</h3>
          <p className="text-sm">Secured with Grace</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><button onClick={() => setCurrentPage('services')}>Services</button></li>
            <li><button onClick={() => setCurrentPage('about')}>About Us</button></li>
            <li><button onClick={() => setCurrentPage('contact')}>Contact</button></li>
            <li><button onClick={() => setCurrentPage('blog')}>Blog</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>Strategic Security</li>
            <li>Threat Management</li>
            <li>Cloud Security</li>
            <li>Compliance Services</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-2">
            <p className="flex items-center"><Phone size={16} className="mr-2" /> +1 (555) 123-4567</p>
            <p className="flex items-center"><Mail size={16} className="mr-2" /> contact@gracetech.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-600 text-center">
        <p>&copy; 2024 The Grace Technologies. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Global",
      content: "The Grace Technologies transformed our security infrastructure. Their expertise in AI-driven security solutions has been invaluable.",
      company: "TechCorp Global",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Michael Chen",
      role: "CISO, FinanceStream",
      content: "Their strategic security leadership program helped us achieve compliance across multiple regulatory frameworks.",
      company: "FinanceStream",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of IT, Healthcare Solutions",
      content: "The incident response team at Grace Technologies has consistently demonstrated excellence in threat management.",
      company: "Healthcare Solutions",
      image: "/api/placeholder/64/64"
    }
  ];

  const stats = [
    { 
      label: "Years of Experience", 
      value: "15+",
      description: "Leading cybersecurity innovation"
    },
    { 
      label: "Satisfied Clients", 
      value: "500+",
      description: "Across diverse industries"
    },
    { 
      label: "Security Experts", 
      value: "100+",
      description: "Certified professionals"
    },
    { 
      label: "Success Rate", 
      value: "99.9%",
      description: "In threat prevention"
    }
  ];

  const features = [
    {
      id: 1,
      title: "Strategic Leadership",
      description: "Expert guidance in cybersecurity strategy and execution",
      details: [
        "Virtual CISO Services",
        "Security Program Development",
        "Risk Management",
        "Compliance Oversight"
      ]
    },
    {
      id: 2,
      title: "Advanced Protection",
      description: "Cutting-edge security solutions for modern threats",
      details: [
        "AI-Powered Security",
        "Threat Detection & Response",
        "Cloud Security",
        "Zero Trust Architecture"
      ]
    },
    {
      id: 3,
      title: "Industry Recognition",
      description: "Acclaimed expertise and certified excellence",
      details: [
        "ISO 27001 Certified",
        "NIST Framework Aligned",
        "Industry Awards",
        "Technology Partnerships"
      ]
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥" },
    { name: "Finance", icon: "🏦" },
    { name: "Technology", icon: "💻" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Government", icon: "🏛️" },
    { name: "Retail", icon: "🏪" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 bg-gradient-to-br from-purple-700 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium">Leading Cybersecurity Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Secured with Grace
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Elevating enterprise cybersecurity through innovation, expertise, and unwavering commitment to digital resilience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                Get Started <ChevronRight className="ml-2" />
              </button>
              <button
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-purple-700 transition-colors"
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Grace Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise, advanced technology, and proven methodologies to deliver comprehensive cybersecurity solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="bg-gray-50 p-8 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setSelectedFeature(feature.id)}
                onMouseLeave={() => setSelectedFeature(null)}
              >
                <Shield className={`w-16 h-16 mb-6 text-purple-700 transition-transform duration-300 ${selectedFeature === feature.id ? 'scale-110' : ''}`} />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className={`space-y-3 transition-all duration-300 ${selectedFeature === feature.id ? 'opacity-100' : 'opacity-0 h-0'}`}>
                  {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-700 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored cybersecurity solutions for diverse industry requirements
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="font-medium text-gray-800">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Security Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protecting your digital assets with cutting-edge technology and expert guidance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-16 h-16 text-purple-700 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Strategic Security</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive security leadership and strategic planning tailored to your organization's unique needs.
              </p>
              <button 
                onClick={() => setCurrentPage('services')}
                className="text-purple-700 font-medium hover:text-purple-800 flex items-center"
              >
                Learn More <ChevronRight className="ml-1" />
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-16 h-16 text-purple-700 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Threat Management</h3>
              <p className="text-gray-600 mb-6">
                24/7 monitoring and rapid response to protect your systems from evolving cyber threats.
              </p>
              <button 
                onClick={() => setCurrentPage('services')}
                className="text-purple-700 font-medium hover:text-purple-800 flex items-center"
              >
                Learn More <ChevronRight className="ml-1" />
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-16 h-16 text-purple-700 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Compliance & Risk</h3>
              <p className="text-gray-600 mb-6">
                Expert guidance to achieve and maintain compliance with industry regulations and standards.
              </p>
              <button 
                onClick={() => setCurrentPage('services')}
                className="text-purple-700 font-medium hover:text-purple-800 flex items-center"
              >
                Learn More <ChevronRight className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering measurable results in cybersecurity excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-purple-700 mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div className="flex items-center text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how The Grace Technologies can transform your security posture
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-purple-700 transition-colors"
          >
            Schedule a Consultation <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

// Services Page Component
const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      id: 'strategic',
      title: 'Strategic Security Leadership',
      icon: <Shield className="w-12 h-12" />,
      description: 'Comprehensive security strategy and leadership solutions.',
      details: [
        {
          title: 'Virtual CISO (vCISO) Services',
          items: [
            'Security strategy development and execution',
            'Board and executive advisory services',
            'Security roadmap development',
            'Budget planning and optimization',
            'Security team development and mentoring'
          ]
        },
        {
          title: 'Program Management',
          items: [
            'Security program development',
            'Policy and procedure framework',
            'Risk management program',
            'Metrics and reporting framework',
            'Vendor security management'
          ]
        },
        {
          title: 'Compliance Oversight',
          items: [
            'Regulatory compliance management',
            'Audit preparation and management',
            'Standards implementation (ISO 27001, NIST)',
            'Industry-specific compliance (HIPAA, PCI DSS)',
            'Privacy program management'
          ]
        }
      ]
    },
    {
      id: 'operational',
      title: 'Operational Security Services',
      icon: <Shield className="w-12 h-12" />,
      description: 'Comprehensive threat management and incident response solutions.',
      details: [
        {
          title: 'Incident Response',
          items: [
            '24/7 incident response',
            'Breach management and containment',
            'Crisis communication',
            'Recovery planning',
            'Post-incident analysis'
          ]
        },
        {
          title: 'Forensic Services',
          items: [
            'Digital forensics investigation',
            'Evidence collection and preservation',
            'Chain of custody management',
            'Root cause analysis',
            'Malware analysis'
          ]
        },
        {
          title: 'Security Assessment',
          items: [
            'Vulnerability assessments',
            'Penetration testing',
            'Red team exercises',
            'Configuration reviews',
            'Social engineering assessments'
          ]
        }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Technology Services',
      icon: <Shield className="w-12 h-12" />,
      description: 'Cutting-edge security solutions powered by AI and modern architecture.',
      details: [
        {
          title: 'AI Security Services',
          items: [
            'AI security framework development',
            'Machine learning for security',
            'AI-powered threat detection',
            'Automated response systems',
            'Predictive security analytics'
          ]
        },
        {
          title: 'Enterprise Architecture',
          items: [
            'Security architecture design',
            'Zero trust implementation',
            'Cloud security architecture',
            'IAM architecture',
            'Data security architecture'
          ]
        }
      ]
    },
    {
      id: 'compliance',
      title: 'Compliance & Risk Management',
      icon: <Shield className="w-12 h-12" />,
      description: 'Comprehensive compliance and risk management solutions.',
      details: [
        {
          title: 'Framework Implementation',
          items: [
            'ISO 27001 implementation',
            'NIST framework alignment',
            'Industry-specific standards',
            'Privacy regulations (GDPR, CCPA)',
            'Custom framework development'
          ]
        },
        {
          title: 'Risk Management',
          items: [
            'Enterprise risk assessment',
            'Risk treatment planning',
            'Business impact analysis',
            'Continuity planning',
            'Third-party risk management'
          ]
        }
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-700 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive cybersecurity solutions designed to protect your organization
            in an ever-evolving threat landscape.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-purple-700 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <div className={`transform transition-transform ${activeService === service.id ? 'rotate-180' : ''}`}>
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                </div>

                {/* Expandable Content */}
                <div className={`mt-4 space-y-6 ${activeService === service.id ? 'block' : 'hidden'}`}>
                  {service.details.map((detail, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold mb-3 text-purple-700">{detail.title}</h4>
                      <ul className="space-y-2">
                        {detail.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-3"></div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how our comprehensive security services can help protect your organization.
          </p>
          <button 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 transition-colors"
          >
            Schedule a Consultation <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const company = {
    founded: "2009",
    headquarters: "Boston, Massachusetts",
    globalPresence: "15+ countries",
    employees: "100+ cybersecurity experts"
  };

  const timeline = [
    {
      year: "2009",
      title: "Foundation",
      description: "Established with a vision to revolutionize cybersecurity"
    },
    {
      year: "2012",
      title: "Global Expansion",
      description: "Expanded operations to Europe and Asia"
    },
    {
      year: "2015",
      title: "AI Integration",
      description: "Pioneered AI-driven security solutions"
    },
    {
      year: "2018",
      title: "Industry Recognition",
      description: "Named Leader in Cybersecurity Services"
    },
    {
      year: "2021",
      title: "Innovation Hub",
      description: "Launched Advanced Security Research Center"
    },
    {
      year: "2024",
      title: "Next Generation",
      description: "Introducing quantum-safe security solutions"
    }
  ];

  const leadership = [
    {
      name: "David Chen",
      role: "Chief Executive Officer",
      description: "20+ years in cybersecurity leadership",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Sarah Williams",
      role: "Chief Technology Officer",
      description: "Former NSA cybersecurity expert",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Security Officer",
      description: "Leading security strategist",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Emily Thompson",
      role: "Head of Research",
      description: "PhD in Computer Science",
      image: "/api/placeholder/200/200"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries in cybersecurity technology",
      icon: "🔬"
    },
    {
      title: "Excellence",
      description: "Delivering superior security solutions",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "Maintaining highest ethical standards",
      icon: "🤝"
    },
    {
      title: "Collaboration",
      description: "Building strong partnerships",
      icon: "🤲"
    }
  ];

  const certifications = [
    "ISO 27001 Certified",
    "NIST Framework Aligned",
    "SOC 2 Type II Compliant",
    "CMMC Level 3 Certified"
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Grace Technologies</h1>
            <p className="text-xl mb-8">
              Pioneering the future of cybersecurity with innovation, expertise, and unwavering commitment to excellence
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {['mission', 'journey', 'leadership', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-purple-700 text-purple-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Mission Section */}
        <div className={activeTab === 'mission' ? 'block' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Grace Technologies, we're on a mission to revolutionize cybersecurity through innovation and excellence. 
                We believe in creating a secure digital future where organizations can thrive without fear of cyber threats.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Company Overview</h3>
                <div className="space-y-3">
                  <p className="flex justify-between">
                    <span className="text-gray-600">Founded:</span>
                    <span className="font-medium">{company.founded}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Headquarters:</span>
                    <span className="font-medium">{company.headquarters}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Global Presence:</span>
                    <span className="font-medium">{company.globalPresence}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Team:</span>
                    <span className="font-medium">{company.employees}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className={activeTab === 'journey' ? 'block' : 'hidden'}>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-center gap-8">
                <div className="w-32 text-right">
                  <div className="text-2xl font-bold text-purple-700">{event.year}</div>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-purple-700"></div>
                  <div className="absolute top-0 left-2 h-full w-0.5 bg-purple-200"></div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className={activeTab === 'leadership' ? 'block' : 'hidden'}>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-purple-700 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className={activeTab === 'values' ? 'block' : 'hidden'}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Values & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Core Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{value.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Strategic Security Leadership',
    'Threat Management & Response',
    'Advanced Technology Services',
    'Compliance & Risk Management',
    'Cloud Security Solutions',
    'Other Services'
  ];

  const offices = [
    {
      city: 'Muscat',
      country: 'Sultanate of Oman',
      address: 'Muthra , Muscat Governorate',
      phone: '+968 7814 5416',
      email: 'info@thegrace.company'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('success');
    // Handle form submission logic here
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl">
              Ready to enhance your security posture? Our team of experts is here to help.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition-colors"
                >
                  Send Message
                </button>
              </form>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
                  Thank you for your message. We'll get back to you soon!
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-purple-700" />
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-gray-600">+968 7814-5416</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-purple-700" />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-gray-600">vishak@thegrace.company</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Offices */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <h3 className="text-lg font-semibold mb-2">
                      {office.city}, {office.country}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>{office.address}</p>
                      <p>Phone: {office.phone}</p>
                      <p>Email: {office.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Support */}
            <div className="bg-purple-50 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">24/7 Emergency Support</h2>
              <p className="text-gray-600 mb-4">
                For urgent security incidents and emergency response:
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="text-xl font-bold text-purple-700">
                  +1 (800) 999-9999
                </div>
                <div className="text-sm text-gray-600">
                  Available 24 hours, 7 days a week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog Page Component
const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'security-insights', name: 'Security Insights' },
    { id: 'industry-news', name: 'Industry News' },
    { id: 'best-practices', name: 'Best Practices' },
    { id: 'thought-leadership', name: 'Thought Leadership' },
    { id: 'case-studies', name: 'Case Studies' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Cybersecurity: Trends and Predictions",
      category: "security-insights",
      author: "David Chen",
      role: "Chief Executive Officer",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/800/400",
      excerpt: "Explore how artificial intelligence is revolutionizing the cybersecurity landscape and what organizations can expect in the coming years.",
      tags: ["AI", "Machine Learning", "Security Trends"]
    },
    {
      id: 2,
      title: "Implementing Zero Trust Architecture: A Comprehensive Guide",
      category: "best-practices",
      author: "Sarah Williams",
      role: "Chief Technology Officer",
      date: "March 10, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/800/400",
      excerpt: "Learn the essential steps and best practices for implementing a zero trust architecture in your organization.",
      tags: ["Zero Trust", "Security Architecture", "Implementation"]
    },
    {
      id: 3,
      title: "Case Study: Financial Institution's Security Transformation",
      category: "case-studies",
      author: "Michael Rodriguez",
      role: "Chief Security Officer",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/800/400",
      excerpt: "How a leading financial institution strengthened its security posture and achieved compliance goals.",
      tags: ["Finance", "Case Study", "Compliance"]
    },
    {
      id: 4,
      title: "Emerging Threats in Cloud Security: What You Need to Know",
      category: "industry-news",
      author: "Emily Thompson",
      role: "Head of Research",
      date: "March 1, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/800/400",
      excerpt: "An analysis of the latest threats targeting cloud infrastructure and strategies for protection.",
      tags: ["Cloud Security", "Threats", "Risk Management"]
    }
  ];

  const featuredPost = {
    id: 0,
    title: "2024 Cybersecurity Landscape: Navigating New Challenges",
    category: "thought-leadership",
    author: "David Chen",
    role: "Chief Executive Officer",
    date: "March 20, 2024",
    readTime: "10 min read",
    image: "/api/placeholder/1200/600",
    excerpt: "A comprehensive analysis of the evolving cybersecurity landscape and strategic approaches for organizations to stay ahead of threats.",
    tags: ["Cybersecurity", "Strategy", "Innovation"]
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Insights & Updates</h1>
            <p className="text-xl">
              Expert perspectives on cybersecurity trends, best practices, and industry insights
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="h-64 md:h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="uppercase tracking-wide text-sm text-purple-700 font-semibold mb-2">
                Featured Article
              </div>
              <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center mb-4">
                <div className="text-sm">
                  <p className="font-medium">{featuredPost.author}</p>
                  <p className="text-gray-500">{featuredPost.date} · {featuredPost.readTime}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-700 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="uppercase tracking-wide text-sm text-purple-700 font-semibold mb-2">
                  {categories.find(cat => cat.id === post.category)?.name}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <p className="font-medium">{post.author}</p>
                    <p className="text-gray-500">{post.date} · {post.readTime}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'blog':
        return <BlogPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;