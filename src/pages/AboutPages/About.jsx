import React from 'react';
import { Users, TrendingUp, Globe, Award } from 'lucide-react';
import bendubLogo from "../../assets/LOGO'S/Bendub-noBg.png"

const About = () => {
  const investors = [
    {
      Image: bendubLogo,
    },
    {
      Image: bendubLogo,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-[#1e3a5f] to-primary-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              SOURCING AND IMPORTING HAS
              <br />
              <span className="text-accent">NEVER BEEN THIS EASY</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Our Story */}
        <section className="space-y-6  bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-4xl font-bold text-primary border-l-4 border-accent pl-6">
            OUR STORY
          </h3>
          <p className="text-lg text-neutral leading-relaxed pl-6">
            What started as a simple idea in a small garage has grown into a leading international automotive sourcing and logistics company. Founded by passionate car enthusiasts who struggled with the complexities of importing vehicles, we set out to revolutionize the industry. Today, we've helped thousands of clients find and import their dream vehicles from around the globe, making the impossible possible with our streamlined process and dedicated team.
          </p>
        </section>

        {/* CarWise Group */}
        <section className="space-y-6 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-4xl font-bold text-primary border-l-4 border-secondary pl-6">
            CARWISE GROUP
          </h3>
          <p className="text-lg text-neutral leading-relaxed pl-6">
            Our group has expanded beyond just vehicle imports. We now offer comprehensive automotive solutions including general cargo shipping, maintenance services, and logistics consulting. With operations spanning three continents and partnerships with over 500 dealers worldwide, CarWise Group has become a trusted name in international automotive trade. Our commitment to transparency, efficiency, and customer satisfaction drives everything we do.
          </p>
        </section>

        {/* Join Us */}
        <section className="space-y-6  bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-4xl font-bold text-primary border-l-4 border-accent pl-6">
            JOIN US
          </h3>
          <p className="text-lg text-neutral leading-relaxed pl-6">
            We have one of the most dynamic and passionate teams in the automotive industry. From sourcing specialists to logistics coordinators, customs experts to customer service representatives—every team member is dedicated to making your experience seamless. We're always looking for talented individuals who share our vision of making global automotive trade accessible to everyone. If you're passionate about cars and customer excellence, we'd love to hear from you.
          </p>
        </section>

        {/* Our Investors */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <h3 className="text-4xl font-bold text-primary">
              OUR INVESTORS
            </h3>
            <p className="text-lg text-neutral max-w-3xl mx-auto">
              Backed by leading venture capital firms and strategic partners who believe in our mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {investors.map((investor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl h-72 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center p-8"
              >
                <img src={investor.Image} alt="" className="max-w-full max-h-full object-" />
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* CTA Section */}
      {/* <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
          <p className="text-xl text-neutral-light">
            Let us help you source and import your dream vehicle today
          </p>
          <button className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default About;