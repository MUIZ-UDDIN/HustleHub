import "../index.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React from "react";

const App = () => (
  <div className="min-h-screen bg-white">
    <Navbar />

    {/* Hero Section */}
    <section className="relative h-[50vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20startup%20team%20collaborating%20in%20a%20creative%20workspace%20with%20a%20gradient%20background%20from%20deep%20indigo%20to%20blue&width=1440&height=800&seq=about-hero-bg&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-600/70"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About HustleHub
          </h1>
          <p className="text-lg md:text-xl mb-6 text-indigo-100">
            We are a passionate team delivering high-quality digital solutions for businesses and entrepreneurs. From web development to automation, we do the work—so you can focus on what matters most.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Values */}
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          To empower your business with reliable, modern, and efficient digital services—delivered by our in-house experts.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {[
            {
              icon: "fa-bolt",
              title: "Fast & Reliable",
              desc: "We deliver on time, every time—no outsourcing, no surprises.",
            },
            {
              icon: "fa-cogs",
              title: "Expert Execution",
              desc: "Our team handles your project from start to finish, ensuring quality at every step.",
            },
            {
              icon: "fa-heart",
              title: "Client-Focused",
              desc: "We listen, adapt, and build lasting relationships with every client.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex-1 bg-indigo-50 rounded-lg p-6 shadow-md flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${item.icon} text-indigo-600 text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section id="team" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            HustleHub is powered by a small, dedicated group of professionals committed to your success.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Founder & CEO",
              image:
                "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20female%20CEO%20in%20her%2040s%20with%20shoulder-length%20hair%2C%20wearing%20business%20attire%2C%20against%20a%20neutral%20background%20with%20soft%20professional%20lighting%2C%20looking%20approachable%20yet%20authoritative&width=200&height=200&seq=ceo-sarah&orientation=squarish",
            },
            {
              name: "Michael Chen",
              role: "CTO",
              image:
                "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Asian%20male%20tech%20executive%20in%20his%2030s%20wearing%20smart%20casual%20attire%2C%20against%20a%20neutral%20background%20with%20soft%20professional%20lighting%2C%20looking%20innovative%20and%20tech-savvy&width=200&height=200&seq=cto-michael&orientation=squarish",
            },
            {
              name: "Olivia Rodriguez",
              role: "Automation Lead",
              image:
                "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Latina%20female%20marketing%20executive%20in%20her%2030s%20with%20long%20dark%20hair%2C%20wearing%20professional%20attire%2C%20against%20a%20neutral%20background%20with%20soft%20professional%20lighting%2C%20looking%20creative%20and%20strategic&width=200&height=200&seq=cmo-olivia&orientation=squarish",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-64"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-indigo-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default App;