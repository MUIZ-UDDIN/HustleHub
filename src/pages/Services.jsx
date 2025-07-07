// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import "../index.css";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { useState, useEffect } from "react";
import RollingGallery from "../Components/RollingGallery";
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("fixed");
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Scroll to section if hash is present in URL
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "end" });
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20service%20concept%20with%20abstract%20shapes%20and%20elements%20representing%20different%20service%20categories%20like%20web%20development%2C%20design%2C%20marketing%2C%20and%20content%20creation.%20The%20image%20has%20a%20gradient%20background%20from%20deep%20indigo%20to%20purple%20with%20soft%20lighting%20and%20modern%20professional%20atmosphere&width=1440&height=800&seq=services-hero-bg&orientation=landscape')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70"></div>
        </div>
        <div className="container mx-auto px-6 pt-23 flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Services
              <span className="block text-indigo-300 text-3xl md:text-4xl mt-2">
                Tailored Solutions for Every Need
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Discover our comprehensive range of professional services designed
              to help businesses and individuals achieve their goals. From web
              development to content creation, we've got you covered.
            </p>
            <button
              className="px-8 py-3 bg-white text-blue-950 font-medium rounded-button hover:bg-gray-100 transition-colors duration-300 cursor-pointer whitespace-nowrap"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("Services-category")
                    .offsetHeight,
                  behavior: "smooth",
                })
              }
            >
              <i className="fas fa-search mr-2"></i>Find Services
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div
            className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-200 shadow-lg rounded-full flex items-center justify-center cursor-pointer"
            onClick={() =>
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            <i className="fas fa-chevron-down text-blue-950"></i>
          </div>
        </div>
      </section>
      {/* Service Categories Grid */}
      <section id="Services-category" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect service to meet your business needs or personal
              projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Full-Stack Developer",
                icon: "fa-code",
                color: "bg-blue-100 text-blue-600",
                description:
                  "Build fast, secure, and responsive websites tailored to your business",
                professionals: "5",
                startingPrice: "$50",
                image:
                  "https://readdy.ai/api/search-image?query=Modern%20web%20development%20concept%20with%20clean%20code%20on%20screen%2C%20programming%20languages%20symbols%2C%20and%20digital%20interface%20elements.%20The%20image%20has%20a%20soft%20blue%20gradient%20background%20with%20tech-inspired%20design%20elements%2C%20showing%20professional%20web%20development%20environment%20with%20clean%20minimalist%20style&width=300&height=200&seq=web-dev-service&orientation=landscape",
              },
              {
                title: "Accounting Bookkeeping",
                icon: "fa-paint-brush",
                color: "bg-pink-100 text-pink-600",
                description:
                  "Reliable financial management for individuals and businesses at one click away",
                professionals: "11",
                startingPrice: "$20",
                image:
                  "https://readdy.ai/api/search-image?query=Creative%20graphic%20design%20workspace%20with%20digital%20tablet%2C%20color%20palettes%2C%20design%20elements%2C%20and%20artistic%20tools.%20The%20scene%20has%20a%20soft%20pink%20gradient%20background%20with%20artistic%20and%20creative%20visual%20elements%2C%20showing%20professional%20design%20environment%20with%20clean%20minimalist%20style&width=300&height=200&seq=graphic-design-service&orientation=landscape",
              },
              {
                title: "Data Science AI",
                icon: "fa-bullhorn",
                color: "bg-green-100 text-green-600",
                description:
                  "Turn data into actionable insights using advanced analytics and machine learning",
                professionals: "2",
                startingPrice: "$80",
                image:
                  "https://readdy.ai/api/search-image?query=Digital%20marketing%20concept%20with%20analytics%20graphs%2C%20social%20media%20icons%2C%20and%20marketing%20strategy%20elements.%20The%20image%20has%20a%20soft%20green%20gradient%20background%20with%20business%20and%20growth%20visual%20elements%2C%20showing%20professional%20marketing%20environment%20with%20clean%20minimalist%20style&width=300&height=200&seq=marketing-service&orientation=landscape",
              },
              {
                title: "AI Automation",
                icon: "fa-pen-fancy",
                color: "bg-purple-100 text-purple-600",
                description:
                  "Streamline workflows for you business with intelligent automation tools",
                professionals: "2",
                startingPrice: "$60",
                image:
                  "https://readdy.ai/api/search-image?query=Content%20writing%20workspace%20with%20notebook%2C%20laptop%2C%20coffee%20cup%2C%20and%20writing%20tools.%20The%20scene%20has%20a%20soft%20purple%20gradient%20background%20with%20literary%20and%20creative%20writing%20visual%20elements%2C%20showing%20professional%20writing%20environment%20with%20clean%20minimalist%20style&width=300&height=200&seq=writing-service&orientation=landscape",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <div
                    className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-4`}
                  >
                    <i className={`fas ${service.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-gray-500 text-sm">Starting at</span>
                      <p className="text-blue-900 font-bold">
                        {service.startingPrice}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">
                        Professionals
                      </span>
                      <p className="text-blue-900 font-bold">
                        {service.professionals}
                      </p>
                    </div>
                  </div>
                  <Link to={"/contact#"}>
                    <button className="w-full py-2 bg-blue-950 text-white font-medium rounded-button hover:bg-blue-900 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                      Contact Us <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service quality and
              client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Quality Assurance",
                description:
                  "All services undergo rigorous quality checks before delivery",
                icon: "fa-medal",
                color: "text-blue-600",
              },
              {
                title: "Secure Payments",
                description:
                  "Your transactions are protected with bank-level security",
                icon: "fa-lock",
                color: "text-green-600",
              },
              {
                title: "24/7 Support",
                description: "Our support team is available around the clock",
                icon: "fa-headset",
                color: "text-purple-600",
              },
              {
                title: "Money-back Guarantee",
                description: "Not satisfied? Get a full refund within 30 days",
                icon: "fa-undo",
                color: "text-red-600",
              },
              {
                title: "Client Protection",
                description:
                  "Your project and personal information remain confidential",
                icon: "fa-shield-alt",
                color: "text-indigo-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <i
                    className={`fas ${feature.icon} text-2xl ${feature.color}`}
                  ></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Flexible Pricing Models
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the pricing structure that works best for your project
              needs
            </p>
          </div>
          <div className="mb-8 flex justify-center">
            <div className="inline-flex p-1 bg-gray-200 rounded-lg">
              {["fixed", "hourly", "milestone"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-button text-sm font-medium whitespace-nowrap cursor-pointer ${
                    activeTab === tab
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  {tab === "fixed" && "Fixed Price"}
                  {tab === "hourly" && "Hourly Rate"}
                  {tab === "milestone" && "Milestone-based"}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {activeTab === "fixed" && (
              <div className="p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Fixed Price Projects
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Pay a predetermined amount for a clearly defined scope of
                      work. Perfect for projects with well-defined requirements
                      and deliverables.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Clear project scope and deliverables",
                        "Predictable budget with no surprises",
                        "Milestone-based payments for larger projects",
                        "Complete project ownership upon completion",
                        "Optional maintenance packages available",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Pricing Examples
                      </h4>
                      <p className="text-sm text-gray-500 mb-4">
                        Actual prices may vary based on project complexity and
                        requirements
                      </p>
                    </div>
                    <div className="space-y-4">
                      {[
                        {
                          service: "Full-Stack Web-Development",
                          price: "$100 - $1,000",
                          description:
                            "Price will vary based on complexity and features",
                        },
                        {
                          service: "Accounting/Bookkeping",
                          price: "$80 - $1,000",
                          description:
                            "It depends on required workload and complexity",
                        },
                        {
                          service: "Data Science AI",
                          price: "$100 - $1,200",
                          description:
                            "Price will differ based on requirements, development and integration",
                        },
                        {
                          service: "AI Automation",
                          price: "$80 - $1,000",
                          description:
                            "Price will vary based on workflow complexity and tools used",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between pb-2 border-b border-gray-200"
                        >
                          <div>
                            <p className="font-medium">{item.service}</p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                          <p className="font-bold text-indigo-600">
                            {item.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "hourly" && (
              <div className="p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Hourly Rate Projects
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Pay only for the time spent working on your project. Ideal
                      for ongoing work, maintenance, or projects with evolving
                      requirements.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Flexibility to adjust scope as needed",
                        "Transparent time tracking and reporting",
                        "Weekly billing cycles with detailed timesheets",
                        "No commitment to a fixed number of hours",
                        "Access to specialized expertise as needed",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Hourly Rate Examples
                      </h4>
                      <p className="text-sm text-gray-500 mb-4">
                        Rates vary based on expertise level and specialization
                      </p>
                    </div>
                    <div className="space-y-4">
                      {[
                        {
                          role: "Full-Stack Web-Development",
                          rate: "$20 - $60",
                          experience: "2-3 years experience",
                        },
                        {
                          role: "Accounting/Bookkeping",
                          rate: "$10 - $50",
                          experience: "8+ years experience",
                        },
                        {
                          role: "Data Science AI",
                          rate: "$20 - $60",
                          experience: "1 year plus experience",
                        },
                        {
                          role: "AI Automation",
                          rate: "$15 - $50",
                          experience: "1 year plus experience",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between pb-2 border-b border-gray-200"
                        >
                          <div>
                            <p className="font-medium">{item.role}</p>
                            <p className="text-sm text-gray-500">
                              {item.experience}
                            </p>
                          </div>
                          <p className="font-bold text-indigo-600">
                            {item.rate}/hr
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "milestone" && (
              <div className="p-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Milestone-based Projects
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Break your project into manageable phases with payments
                      tied to the completion of each milestone. Perfect for
                      complex, long-term projects.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Clear deliverables for each project phase",
                        "Pay as you approve completed milestones",
                        "Better cash flow management for large projects",
                        "Regular progress reviews and feedback opportunities",
                        "Ability to adjust future milestones based on results",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Milestone Structure Example
                      </h4>
                      <p className="text-sm text-gray-500 mb-4">
                        It will differ as per project complexity and
                        requirements
                      </p>
                    </div>
                    <div className="space-y-4">
                      {[
                        {
                          phase: "Full-Stack Web-Development",
                          payment: "20-500",
                          deliverable:
                            "It will differ based on project complexity",
                        },
                        {
                          phase: "Accounting/Bookkeping",
                          payment: "50-500",
                          deliverable:
                            "It will differ based on your requirements",
                        },
                        {
                          phase: "Data Science AI",
                          payment: "50-600",
                          deliverable:
                            "Depends on Model complexity, data requirements and integration",
                        },
                        {
                          phase: "AI Automation",
                          payment: "40-500",
                          deliverable:
                            "We differ based on workflow structure and tools used",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between pb-2 border-b border-gray-200"
                        >
                          <div>
                            <p className="font-medium">{item.phase}</p>
                            <p className="text-sm text-gray-500">
                              {item.deliverable}
                            </p>
                          </div>
                          <p className="font-bold text-indigo-600">
                            {item.payment}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Featured Service Providers */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Featured Service Providers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet some of our top-rated professionals ready to help with your
              projects
            </p>
          </div>
          <RollingGallery autoplay pauseOnHover />
        </div>
      </section>
      {/* Service Request Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Request a Service?
            </h2>
            <p className="text-xl text-indigo-200 mb-8">
              Our streamlined process makes it easy to find the right
              professional for your project
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  step: "1",
                  title: "Describe Your Project",
                  description:
                    "Tell us what you need, your budget, and timeline",
                  icon: "fa-edit",
                },
                {
                  step: "2",
                  title: "Review Proposals",
                  description: "Get proposals from qualified professionals",
                  icon: "fa-list-ul",
                },
                {
                  step: "3",
                  title: "Collaborate & Complete",
                  description: "Work together and get great results",
                  icon: "fa-handshake",
                },
              ].map((step, index) => (
                <div key={index} className="bg-indigo-800/50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i
                      className={`fas ${step.icon} text-xl text-indigo-300`}
                    ></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-indigo-200">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="px-8 py-3 bg-white text-indigo-700 font-medium rounded-button hover:bg-gray-100 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("Services-category")
                      .offsetHeight,
                    behavior: "smooth",
                  })
                }
              >
                <i className="fas fa-paper-plane mr-2"></i>Request a Service
              </button>
            </div>
            <p className="mt-8 text-indigo-200">
              Need help?{" "}
              <a
                href="../contact"
                className="text-white underline hover:text-indigo-300 transition-colors duration-300"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default App;
