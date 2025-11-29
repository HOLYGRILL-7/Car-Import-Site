import React from 'react';
import CEO from '../../assets/Team/CEO.jpg';
import COO from '../../assets/Team/COO.jpg';
import LOG from '../../assets/Team/LOG.jpg';

const Team = () => {
  const leaders = [
    {
      name: "Bismark Jones Oduro",
      position: "CEO & Founder",
      image: CEO,
      description: "Promoted to CEO in 2023, Bismark brings over 15 years of experience in international automotive trade and logistics. His vision has transformed the company into a global leader."
    },
    {
      name: "Jr. Bismark Jones-Oduro",
      position: "Chief Operations Officer",
      image: COO,
      description: "Leading our day-to-day operations with excellence, ensuring seamless service delivery across all departments and maintaining our high standards."
    },
    {
      name: "Bernice Jones-Oduro",
      position: "Head of Logistics",
      image: LOG,
      description: "Manages our global shipping network and customs operations, ensuring vehicles and cargo reach clients on time, every time."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary">
          OUR TEAM
        </h1>
        <p className="text-xl text-neutral max-w-2xl mx-auto">
          Meet the passionate professionals driving our mission forward
        </p>
      </div>

      {/* Leadership Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-3">
            Leadership Team
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl  overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden bg-neutral-light">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full p-3 rounded-3xl object-cover "
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 ">
                    <div className="inline-block bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 border border-white/30 shadow-lg">
                        <h3 className="text-xl font-bold text-white drop-shadow-lg leading-tight">{leader.name}</h3>
                        <p className=" text-sm text-accent font-bold drop-shadow-md">{leader.position}</p>
                    </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-6">
                <p className="text-neutral leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Team CTA */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center text-white mt-16">
        <h3 className="text-3xl font-bold mb-4">Want to Join Our Team?</h3>
        <p className="text-lg text-neutral-light mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals who are passionate about excellence and innovation.
        </p>
        <button className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg">
          View Open Positions
        </button>
      </div>
    </div>
  );
};

export default Team;