import React from 'react';
import news1 from '../../assets/News/world-trade.jpg'; // Add your news images
import fleet from '../../assets/News/fleet.jpg'; // Add your news images
import AI from '../../assets/News/AI.jpg'; // Add your news images
import EV from '../../assets/News/EV.jpg'; // Add your news images
import JAP from '../../assets/News/JAP.jpg'; // Add your news images
import HAP from '../../assets/News/happy.jpg'; // Add your news images

const Press = () => {
  const newsItems = [
    {
      image: news1,
      title: "CarWise Expands Operations to Three New Countries",
      date: "November 20, 2025",
      excerpt: "Breaking into European and Asian markets with new partnerships...",
      source: "Auto Trade Journal"
    },
    {
      image: fleet,
      title: "Record-Breaking Year: 10,000+ Vehicles Delivered",
      date: "November 15, 2025",
      excerpt: "Celebrating our biggest year yet with unprecedented growth...",
      source: "Business Daily"
    },
    {
      image: AI,
      title: "CarWise Launches AI-Powered Vehicle Sourcing",
      date: "November 10, 2025",
      excerpt: "New technology platform makes importing cars easier than ever...",
      source: "Tech Automotive"
    },
    {
      image: EV,
      title: "Sustainability Initiative: Going Carbon Neutral by 2026",
      date: "October 28, 2025",
      excerpt: "Our commitment to environmental responsibility and green logistics...",
      source: "Green Business News"
    },
    {
      image: JAP,
      title: "Partnership with Major Japanese Dealers Announced",
      date: "October 15, 2025",
      excerpt: "Exclusive access to JDM vehicles for our customers...",
      source: "Import Car Magazine"
    },
    {
      image: HAP,
      title: "Customer Satisfaction Rate Hits 98%",
      date: "October 5, 2025",
      excerpt: "Independent survey ranks CarWise as top automotive importer...",
      source: "Consumer Reports"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary">
          PRESS & MEDIA
        </h1>
        <p className="text-xl text-neutral max-w-2xl mx-auto">
          Latest news, press releases, and media coverage about CarWise
        </p>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg  overflow-hidden cursor-pointer"
          >
            {/* Image Area */}
            <div className="h-48 overflow-hidden bg-neutral-light">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Area */}
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-sm text-neutral">
                <span className="font-semibold text-accent">{item.source}</span>
                <span>{item.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-primary ">
                {item.title}
              </h3>
              
              <p className="text-neutral leading-relaxed line-clamp-2">
                {item.excerpt}
              </p>

              <button className="text-accent font-semibold hover:underline flex items-center gap-2 group">
                Read More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* All Press Releases Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all transform hover:scale-105">
          View All Press Releases
        </button>
      </div>

      {/* Media Contact Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-white text-center mt-16">
        <h3 className="text-3xl font-bold mb-4">Media Inquiries</h3>
        <p className="text-lg text-neutral-light mb-6 max-w-2xl mx-auto">
          For press inquiries, interviews, or media kits, please contact our communications team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:press@carwise.com" className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg">
            press@carwise.com
          </a>
          <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:scale-105 transition-transform shadow-lg">
            Download Media Kit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Press;