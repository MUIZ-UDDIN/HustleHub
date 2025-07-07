// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import "../index.css";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import DotGrid from "../Components/DotGrid";
import AOS from "aos";
import MingKhorImg from "../assets/MingKhorImg.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import SpotlightCard from "../Components/SpotlightCard";
import Footer from "../Components/Footer";
import { link } from "fontawesome";

const stats = [
  { number: 12, postfix: "+", label: "Services Providers", icon: "fa-users" },
  {
    number: 30,
    postfix: "+",
    label: "Completed Projects",
    icon: "fa-check-circle",
  },
  {
    number: 20,
    postfix: "+",
    label: "Countries Represented",
    icon: "fa-globe-americas",
  },
  {
    number: 10,
    suffix: "$",
    postfix: "K+",
    label: "Total Earnings",
    icon: "fa-dollar-sign",
  },
];
const handleScrollToBottom = () => {};
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgScale, setBgScale] = useState(1);
  const heroRef = useRef();
  const targetScaleRef = useRef(1);
  const animationFrameRef = useRef();

  useEffect(() => {
    AOS.init({ once: false, duration: 1000, mirror: true });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        let progress = 1 - Math.max(0, Math.min(1, rect.bottom / windowHeight));
        // Set the target scale, don't set bgScale directly
        targetScaleRef.current = 1 + progress * 0.15;
      }
      console.log("Scroll fired", targetScaleRef.current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // <-- Add this to set initial scale
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth animation effect
  useEffect(() => {
    const animate = () => {
      setBgScale((prev) => {
        const target = targetScaleRef.current;
        const lerped = prev + (target - prev) * 0.25;
        return lerped;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden pt-28"
      >
        <div
          className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-900 to-purple-800"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20modern%20workspace%20with%20a%20sleek%20desk%20setup%2C%20soft%20ambient%20lighting%2C%20digital%20devices%2C%20and%20creative%20elements.%20The%20scene%20has%20a%20professional%20yet%20inspiring%20atmosphere%20with%20a%20gradient%20background%20transitioning%20from%20deep%20indigo%20to%20purple%2C%20creating%20a%20tech-forward%20and%20creative%20environment&width=1440&height=800&seq=hero-bg-1&orientation=landscape')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
            transform: `scale(${bgScale})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 to-blue-600/60"></div>
        </div>
        <div className="container mx-auto px-6 flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              HustleHub <br />
              <span className="text-indigo-300">
                Where Talent Meets Opportunity
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Connect with top freelance talent from around the world or
              showcase your skills to thousands of clients looking for expertise
              just like yours.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to={"/services#Services-Providers"}>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                  <i className="fas fa-user-tie mr-2"></i>Hire Talent
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div
            className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-200 shadow-lg rounded-full flex items-center justify-center cursor-pointer"
            onClick={() =>
              window.scrollTo({
                top: document.documentElement.scrollHeight, // Scrolls to the full height of the document
                behavior: "smooth", // Provides a smooth scrolling animation
              })
            }
          >
            <i className="fas fa-chevron-down text-blue-950"></i>
          </div>
        </div>
      </section>
      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Explore Popular Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect match for your project needs or discover
              opportunities that align with your skills
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Full-Stack Developer",
                icon: "fa-code",
                color: "bg-blue-100 text-blue-600",
                description:
                  "Build fast, secure, and responsive websites tailored to your business",
                image:
                  "https://readdy.ai/api/search-image?query=Modern%20web%20development%20concept%20with%20clean%20code%20on%20screen%2C%20programming%20languages%20symbols%2C%20and%20digital%20interface%20elements.%20The%20image%20has%20a%20soft%20blue%20gradient%20background%20with%20tech-inspired%20design%20elements&width=300&height=200&seq=web-dev-1&orientation=landscape",
              },
              {
                title: "Accounting Bookkeeping",
                icon: "fa-paint-brush",
                color: "bg-pink-100 text-pink-600",
                description:
                  "Reliable financial management for individuals and businesses at one click away",
                image:
                  "https://readdy.ai/api/search-image?query=Creative%20graphic%20design%20workspace%20with%20digital%20tablet%2C%20color%20palettes%2C%20design%20elements%2C%20and%20artistic%20tools.%20The%20scene%20has%20a%20soft%20pink%20gradient%20background%20with%20artistic%20and%20creative%20visual%20elements&width=300&height=200&seq=graphic-design-1&orientation=landscape",
              },
              {
                title: "Data Science AI",
                icon: "fa-bullhorn",
                color: "bg-green-100 text-green-600",
                description:
                  "Turn data into actionable insights using advanced analytics and machine learning",
                image:
                  "https://readdy.ai/api/search-image?query=Digital%20marketing%20concept%20with%20analytics%20graphs%2C%20social%20media%20icons%2C%20and%20marketing%20strategy%20elements.%20The%20image%20has%20a%20soft%20green%20gradient%20background%20with%20business%20and%20growth%20visual%20elements&width=300&height=200&seq=marketing-1&orientation=landscape",
              },
              {
                title: "AI Automation",
                icon: "fa-pen-fancy",
                color: "bg-purple-100 text-purple-600",
                description:
                  "Streamline workflows for you business with intelligent automation tools",
                image:
                  "https://readdy.ai/api/search-image?query=Content%20writing%20workspace%20with%20notebook%2C%20laptop%2C%20coffee%20cup%2C%20and%20writing%20tools.%20The%20scene%20has%20a%20soft%20purple%20gradient%20background%20with%20literary%20and%20creative%20writing%20visual%20elements&width=300&height=200&seq=writing-1&orientation=landscape",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mb-4`}
                  >
                    <i className={`fas ${category.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services#Services-category">
              <button className="px-6 py-3 bg-blue-950 text-white font-medium rounded-button hover:bg-blue-900 transition-colors duration-300 cursor-pointer whitespace-nowrap">
                View Pricing <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How HustleHub Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our simple, client-focused process ensures high-quality results
              with transparency and speed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Share Your Project",
                description:
                  "Tell us what you need, web development to AI automation and we’ll get aligned on goals",
                icon: "fa-share-alt",
              },
              {
                step: "02",
                title: "We Build & Collaborate",
                description:
                  "Our experts work closely with you to deliver tailored solutions with regular updates",
                icon: "fa-handshake",
              },
              {
                step: "03",
                title: "Deliver & Support",
                description:
                  "Receive your completed project, pay securely, and get ongoing support if needed",
                icon: "fa-shield-alt",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-950 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 text-blue-950 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${item.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="py-16 bg-blue-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const { ref, inView } = useInView({
                triggerOnce: false,
                threshold: 0.5,
              });
              return (
                <div
                  key={index}
                  ref={ref}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-mirror="false"
                  data-aos-duration="1000"
                  data-aos-delay={index * 10}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i
                      className={`fas ${stat.icon} text-2xl text-indigo-300`}
                    ></i>
                  </div>
                  <h3 className="text-4xl font-bold mb-2">
                    {stat.suffix || ""}
                    <CountUp
                      start={inView ? 0 : undefined}
                      end={inView ? stat.number : 0}
                      duration={2}
                      redraw={true}
                    />
                    {stat.postfix || "+"}
                  </h3>
                  <p className="text-indigo-200">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our community of clients all over the world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Florencia Barrera",
                role: "Financial Management",
                company: "Self-employed",
                image:
                  "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20businesswoman%20with%20a%20warm%20smile%2C%20well-dressed%20in%20business%20attire.%20The%20image%20has%20a%20clean%2C%20neutral%20background%20with%20soft%20professional%20lighting&width=100&height=100&seq=testimonial-1&orientation=squarish",
                quote:
                  "Thanks to HustleHub, we connected with Amjad—an exceptional talent who tackled our complex revenue spreadsheets with ease. His attention to detail and professionalism stood out, and we're thrilled to continue working with him at a higher rate.",
              },
              {
                name: "Ming Khor",
                role: "Bookkeeper",
                company: "Self-employed",
                image: MingKhorImg,
                quote:
                  "Hustle Hub has been my go-to team for both bookkeeping and technical solutions. From day one, their professionalism, responsiveness, and attention to detail stood out. They helped streamline my financial processes and handled technical tasks with impressive efficiency",
              },
              {
                name: "Yazan Shannek",
                role: "Python project",
                company: "Parasites Games",
                image:
                  "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20friendly%20male%20developer%20with%20glasses%2C%20casual%20professional%20attire.%20The%20image%20has%20a%20clean%2C%20neutral%20background%20with%20soft%20professional%20lighting&width=100&height=100&seq=testimonial-2&orientation=squarish",
                quote:
                  "Working with Muiz through HustleHub was a fantastic experience. He’s an amazing, cooperative, and highly skilled professional. His dedication, knowledge, and punctuality stood out throughout the project. I look forward to collaborating with him again.",
              },
            ].map((testimonial, index) => (
              <SpotlightCard
                key={index}
                className="p-0 rounded-lg shadow-md transition-shadow duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  <div className="mt-4 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </motion.div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-medium text-gray-600">
              Trusted by leading freelance platforms
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { name: "Upwork", icon: "fab fa-upwork" },
              {
                name: "Fiver",
                link: "https://img.icons8.com/?size=100&id=14h574ySQ7kG&format=png&color=99a1af",
              },
              { name: "LinkedIn", icon: "fab fa-linkedin" },
              { name: "Slack", icon: "fab fa-slack" },
            ].map((company, index) => (
              <div key={index} className="text-center">
                {company.icon ? (
                  <i
                    className={`${company.icon} text-4xl text-gray-400 hover:text-gray-700 transition-colors duration-300`}
                  ></i>
                ) : (
                  <img
                    src={company.link}
                    alt={company.name}
                    className="w-10 h-10 mx-auto hover:brightness-72 transition duration-300"
                    style={{ objectFit: "contain" }}
                  />
                )}
                <p className="mt-2 text-sm text-gray-500">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* DotGrid animated background */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{
            background: "linear-gradient(135deg, #162556 0%, #a21caf 100%)",
          }}
        >
          <DotGrid
            dotSize={12}
            gap={18}
            baseColor="#1e3a8a"
            activeColor="#a21caf"
            proximity={140}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers and businesses using HustleHub to
            connect, create, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to={"/services#Services-Providers"}>
              <button className="px-8 py-3 bg-white border-2 border-white text-blue-950 font-medium rounded-full hover:bg-indigo-50 transition-colors duration-300 cursor-pointer whitespace-nowrap shadow">
                <i className="fas fa-user-tie mr-2"></i>Hire Talent
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default App;
