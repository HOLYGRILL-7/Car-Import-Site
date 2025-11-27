import React, { useState } from 'react';
import { Car, Shield, Wrench, DollarSign, Package, Truck, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Car className="w-12 h-12" />,
      title: "Buy Your Dream Car",
      description: "Browse our extensive inventory of certified pre-owned and new vehicles. Every car undergoes rigorous inspection.",
      features: [
        "1000+ vehicles in stock",
        "Competitive pricing",
        "Quality guaranteed",
        "Virtual showroom tours"
      ],
      color: "from-bg-accent to bg-accent-light"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Sell Your Car Fast",
      description: "Get the best value for your vehicle with our instant valuation tool. Quick, transparent, and hassle-free.",
      features: [
        "Free instant valuation",
        "Same-day payment",
        "No hidden fees",
        "Pickup service available"
      ],
      color: "from-bg-secondary to bg-secondary-light"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Vehicle Sourcing & Import",
      description: "Can't find your dream car locally? We'll source and ship any vehicle from anywhere in the world directly to your doorstep.",
      features: [
        "Global vehicle sourcing",
        "International shipping handled",
        "Full import documentation",
        "Door-to-door delivery"
      ],
      color: "from-bg-primary-dark to bg-primary"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Service & Maintenance",
      description: "Keep your vehicle running like new with our state-of-the-art service center and certified technicians.",
      features: [
        "Certified technicians",
        "Genuine parts",
        "Flexible scheduling",
        "Loaner vehicles available"
      ],
      color: "from-bg-neutral to bg-neutral-dark"
    },
  {
      icon: <Package className="w-12 h-12" />,
      title: "General Cargo Shipping",
      description: "Beyond vehicles—we ship machinery, equipment, personal effects, and commercial goods worldwide with the same reliability.",
      features: [
        "Heavy machinery transport",
        "Container shipping options",
        "Customs clearance assistance",
        "Competitive freight rates"
      ],
      color: "from-bg-accent to bg-accent-dark"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Home Delivery",
      description: "Your dream car delivered to your doorstep. Enjoy contactless delivery and full support every step.",
      features: [
        "Free local delivery",
        "Contactless process",
        "Complete documentation",
        "Virtual handover available"
      ],
      color: "from-bg-secondary to bg-secondary-light"
    }
  ];

  const whyChooseUs = [
    { icon: <Award />, title: "20+ Years Experience", desc: "Industry-leading expertise" },
    { icon: <Shield />, title: "100% Certified Cars", desc: "Rigorous quality checks" },
    { icon: <Clock />, title: "24/7 Support", desc: "Always here to help" },
    { icon: <CheckCircle />, title: "Best Price Guarantee", desc: "Unbeatable value" }
  ];

  return (
    <div className="min-h-screen bg-(--color-neutral-light)">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-primary via-[#1e3a5f] to bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                PREMIUM SERVICES
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Everything You Need
              <br />
              <span className="bg-linear-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Under One Roof
              </span>
            </h1>
            <p className="text-xl text-neutral-cream max-w-2xl mx-auto">
              From buying to selling to maintenance, we have you covered with comprehensive automotive solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              onMouseEnter={() => setActiveService(index)}
            >
              <div className={`h-2 bg-linear-to-r ${service.color}`}></div>
              
              <div className="p-8 space-y-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-r ${service.color} text-white`}>
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#0a1f44] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, id) => (
                    <li key={id} className="flex items-center gap-3 text-[#0a1f44]">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl bg-linear-to-r ${service.color} text-white font-semibold flex items-center justify-center gap-2 group-hover:gap-4 transition-all`}>
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-neutral">
              Your trusted partner in every step of your automotive journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-2xl hover:bg-neutral-cream transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-[#f59e0b] to-[#fbbf24] text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-neutral">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-br from-[#0a1f44] to-[#1e3a5f] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-neutral-light">
            Experience the difference with our premium automotive services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/newArrivals">
              <button className="px-8 py-4 bg-linearto-r from-bg-accent to bg-accent-light text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg">
                Browse Inventory
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-primary rounded-xl hover:scale-105 transition-transform shadow-lg">
                Contact Us
              </button>            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;