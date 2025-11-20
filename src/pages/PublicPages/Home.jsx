import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero from "../../components/Hero";
import audi_silver from "../../assets/New Arrivals/Audi-silver.jpg";
import audi_white from "../../assets/New Arrivals/Audi-white.jpg";
import benz_silver from "../../assets/New Arrivals/Benz-silver.jpg";
import chev_black from "../../assets/New Arrivals/chev-truck-black.jpg";
// import cybertruck from "../../assets/New Arrivals/cybertruck.jpg"
import honda_blue from "../../assets/New Arrivals/Honda-Civic-blue.jpg";
import masserrati_black from "../../assets/New Arrivals/masserrati-black.jpg";
import ram_brown from "../../assets/New Arrivals/Ram-brown.jpg"
// import romeo_silver from "../../assets/New Arrivals/Romeo-silver.jpg"
// import tacoma_brown from "../../assets/New Arrivals/Tacoma-Brown.jpg"
import tacoma_red from "../../assets/New Arrivals/Tacoma.jpg"
import fire_flame from '../../assets/fire-flame.png'

const Home = () => {
  const slider = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideForward = () => {
    if (currentSlide < 3) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      slider.current.style.transform = `translateX(-${newSlide * 25}%)`;
    }
  };

  const slideBackward = () => {
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      slider.current.style.transform = `translateX(-${newSlide * 25}%)`;
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    slider.current.style.transform = `translateX(-${index * 25}%)`;
  };

  // Sample car data - replace with your actual data
  const newArrivals = [
    {
      id: 1,
      image: audi_silver,
      name: "Audi A8",
      price: "$85,000",
      year: "2024",
      mileage: "5,000 km"
    },
    {
      id: 2,
      image: audi_white,
      name: "Audi Q7",
      price: "$72,000",
      year: "2024",
      mileage: "3,200 km"
    },
    {
      id: 3,
      image: benz_silver,
      name: "Mercedes-Benz S-Class",
      price: "$95,000",
      year: "2024",
      mileage: "2,800 km"
    },
    {
      id: 4,
      image: chev_black,
      name: "Chevrolet Silverado",
      price: "$65,000",
      year: "2024",
      mileage: "8,500 km"
    },
    {
      id: 5,
      image: honda_blue,
      name: "Honda Civic",
      price: "$28,000",
      year: "2024",
      mileage: "1,200 km"
    },
    {
      id: 6,
      image: masserrati_black,
      name: "Maserati Ghibli",
      price: "$120,000",
      year: "2024",
      mileage: "900 km"
    },
    {
    id: 7,
    image: ram_brown,
    name: "RAM 1500 Limited",
    price: "$68,000",
    year: "2024",
    mileage: "12,000 km"
  },
  {
  id: 8,
  image: tacoma_red,
  name: "Toyota Tacoma TRD Pro",
  price: "$54,000",
  year: "2024",
  mileage: "6,800 km"
}
  ];

  return (
    <div>
      <Hero />

      {/* New Arrivals Section */}
      <div className="py-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                <img src={fire_flame} alt="" />
              </span>
              <div className="text space-y-1 text-lg">
                <h2 className="text-4xl font-bold text-gray-900">New Arrivals</h2>
                <p>Say hello to the hottest deals on the market</p>
              </div>
            </div>
            <Link 
              to="/newArrivals" 
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors"
            >
              View All
              <ChevronRight className="w-5 h-5 " />
            </Link>
          </div>

          {/* Slider Container */}
          <div className="relative">
            
            {/* Previous Button */}
            <button
              onClick={slideBackward}
              disabled={currentSlide === 0}
              className="absolute right-[75em] shadow-4xl outline-1 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-blue-400 hover:bg-gray-100 rounded-full p-3  transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* Slider Wrapper */}
            <div className="overflow-hidden">
              <ul 
                ref={slider}
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ width: `${newArrivals.length * 33.33}%` }}
              >
                {newArrivals.map((car) => (
                  <li key={car.id} className="shrink-0" style={{ width: `${100 / newArrivals.length}%` }}>
                    <Link to="/carDetails" className="block group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        
                        {/* Image */}
                        <div className="relative overflow-hidden h-64 p-4 ">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            NEW
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {car.name}
                          </h3>
                          
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-blue-600">{car.price}</span>
                            <span className="text-gray-500 text-sm">{car.year}</span>
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-100">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              {car.mileage}
                            </span>
                            <span className="text-blue-600 font-semibold group-hover:gap-2 flex items-center transition-all">
                              View Details
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Button */}
            <button
              onClick={slideForward}
              disabled={currentSlide === 3}
              className="absolute left-[76em] top-1/2 -translate-y-1/2 shadow-4xl outline-1 translate-x-4 z-10 bg-blue-400 hover:bg-gray-100 rounded-full p-3 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-gray-800 " />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Additional Cards Section (if needed) */}
      <div className="newArrival-Cards">
        <div className="card-Container mx-20 w-full flex items-center justify-between">
          {/* <div className="card-1">
            <img src={ram_brown} alt="" />
            <div className="caption">
              <h1></h1>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="card-1">
            <img src={romeo_silver} alt="" />
            <div className="caption">
              <h1></h1>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="card-1">
            <img src={tacoma_red} alt="" />
            <div className="caption">
              <h1></h1>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;