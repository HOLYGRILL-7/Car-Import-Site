import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero from "../../components/Hero";
import audi_silver from "../../assets/New Arrivals/Audi-silver.jpg";
import audi_white from "../../assets/New Arrivals/Audi-white.jpg";
import audi_dark from "../../assets/New Arrivals/audi-dark.jpg";
import benz_black from "../../assets/New Arrivals/benz-black.jpg";
import bmw_white from "../../assets/New Arrivals/bmw-white.jpg";
import ram_black from "../../assets/New Arrivals/Ram-black.jpg";
import romeo_black from "../../assets/New Arrivals/romeo-black.jpg";
import rover_black from "../../assets/New Arrivals/rover-black.jpg";
import range_silver from "../../assets/New Arrivals/range-silver.jpg";
import fire_flame from "../../assets/fire-flame.png";

//import car types
import suv from "../../assets/CarTypes/suv1.png";
import hatch from "../../assets/CarTypes/hatch.png";
import saloon from "../../assets/CarTypes/saloon-hand.png";
import mini_truck from "../../assets/CarTypes/mini-truck.png";
import big_truck from "../../assets/CarTypes/big-truck.png";

//import car logos
import Toyota from "../../assets/CarLogo/toyota.png"
import Kia from "../../assets/CarLogo/KIA.png"
import Nissan from "../../assets/CarLogo/Nissan.png"
import Daewoo from "../../assets/CarLogo/Daewoo.png"
import Chev from "../../assets/CarLogo/chev.png"

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

  // Sample car data
  const newArrivals = [
    {
      id: 1,
      image: audi_silver,
      name: "Audi A8",
      price: "$85,000",
      year: "2024",
      mileage: "5,000 km",
    },
    {
      id: 2,
      image: audi_white,
      name: "Audi Q7",
      price: "$72,000",
      year: "2024",
      mileage: "3,200 km",
    },
    {
      id: 3,
      image: benz_black,
      name: "Mercedes-Benz S-Class",
      price: "$95,000",
      year: "2024",
      mileage: "2,800 km",
    },
    {
      id: 4,
      image: bmw_white,
      name: "BMW X5",
      price: "$78,000",
      year: "2024",
      mileage: "4,500 km",
    },
    {
      id: 5,
      image: audi_dark,
      name: "Audi A6",
      price: "$68,000",
      year: "2024",
      mileage: "6,200 km",
    },
    {
      id: 6,
      image: ram_black,
      name: "RAM 1500 Limited",
      price: "$72,000",
      year: "2024",
      mileage: "7,800 km",
    },
    {
      id: 7,
      image: romeo_black,
      name: "Alfa Romeo Giulia",
      price: "$65,000",
      year: "2024",
      mileage: "3,500 km",
    },
    {
      id: 8,
      image: rover_black,
      name: "Range Rover Sport",
      price: "$98,000",
      year: "2024",
      mileage: "2,100 km",
    },
    {
      id: 9,
      image: range_silver,
      name: "Range Rover Evoque",
      price: "$82,000",
      year: "2024",
      mileage: "4,800 km",
    },
  ];

  const carBrands = [
    { id: 1, logo: Toyota, name: "Toyota" },
    { id: 2, logo: Kia, name: "Kia" },
    { id: 3, logo: Daewoo, name: "Daewoo" },
    { id: 4, logo: Nissan, name: "Nissan" },
    { id: 5, logo: Chev, name: "Chevrolet" },
  ];
  
  const popularUsedBrands = [
    { id: 1, name: "Used Toyota Corolla" },
    { id: 2, name: "Used Kia Sportage" },
    { id: 3, name: "Used Honda Civic" },
    { id: 4, name: "Used Nissan Rogue" },
    { id: 5, name: "Used Chevrolet Equinox" },
    { id: 6, name: "Used Toyota RAV4" },
    { id: 7, name: "Used Honda CR-V" },
    { id: 8, name: "Used Ford F-150" },
    { id: 9, name: "Used Toyota Camry" },
    { id: 10, name: "Used Mazda CX-5" },
    { id: 11, name: "Used Hyundai Tucson" },
    { id: 12, name: "Used Nissan Altima" },
    { id: 13, name: "Used Subaru Outback" },
    { id: 14, name: "Used Kia Sorento" },
    { id: 15, name: "Used Jeep Wrangler" },
    { id: 16, name: "Used BMW 3 Series" },
    { id: 17, name: "Used Mercedes-Benz C-Class" },
    { id: 18, name: "Used Audi Q5" },
    { id: 19, name: "Used Tesla Model 3" },
    { id: 20, name: "Used Chevrolet Silverado" },
  ];

  return (
    <div className="">
      <Hero />

      {/* New Arrivals Section */}
      <div className="py-14 mt-15 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                <img src={fire_flame} alt="" />
              </span>
              <div className="text space-y-1 text-lg">
                <h2 className="text-4xl font-bold text-primary">
                  New Arrivals
                </h2>
                <p className="text-neutral">Say hello to the hottest deals on the market</p>
              </div>
            </div>
            <Link
              to="/newArrivals"
              className="text-accent hover:text-accent-light font-semibold flex items-center gap-2 transition-colors"
            >
              View All
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={slideBackward}
              disabled={currentSlide === 0}
              className="absolute left-0 shadow-xl top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-accent hover:bg-accent-light rounded-full p-3 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Slider Wrapper */}
            <div className="overflow-hidden">
              <ul
                ref={slider}
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ width: `${newArrivals.length * 33.33}%` }}
              >
                {newArrivals.map((car) => (
                  <li
                    key={car.id}
                    className="shrink-0"
                    style={{ width: `${100 / newArrivals.length}%` }}
                  >
                    <Link to="/carDetails" className="block group"> 
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        {/* Image */}
                        <div className="relative overflow-hidden h-64 p-4">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                            NEW
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                            {car.name}
                          </h3>

                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-accent">
                              {car.price}
                            </span>
                            <span className="text-neutral text-sm">
                              {car.year}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-sm text-neutral pt-4 border-t border-neutral-light">
                            <span className="flex items-center gap-1">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                              {car.mileage}
                            </span>
                            <span className="text-accent font-semibold group-hover:gap-2 flex items-center transition-all">
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
              className="absolute right-0 top-1/2 -translate-y-1/2 shadow-xl translate-x-4 z-10 bg-accent hover:bg-accent-light rounded-full p-3 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
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
                    ? "bg-accent w-8"
                    : "bg-neutral hover:bg-neutral-dark"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Explore Cars */}
      <div className="explore py-14 bg-white">
        <div className="inner-div max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="Explore-Cars flex items-center justify-between mb-10">
            <div className="">
              <h1 className="header text-4xl font-bold text-primary">
                Explore Cars
              </h1>
              <p className="text-neutral">Browse by Car type</p>
            </div>
          </div>

          <div className="car-types flex gap-6">
            <button className="suv-container w-full h-30 cursor-pointer bg-neutral-light hover:bg-neutral-cream shadow-lg rounded-2xl flex flex-col items-center justify-center transition-all hover:shadow-xl transform hover:-translate-y-1">
              <Link></Link>
              <img src={suv} alt="" width={175} />
              <span className="font-semibold text-primary">SUVs</span>
            </button>
            <button className="Hatchback-container w-full cursor-pointer h-30 bg-neutral-light hover:bg-neutral-cream shadow-lg rounded-2xl flex flex-col items-center justify-center transition-all hover:shadow-xl transform hover:-translate-y-1">
              <Link></Link>
              <img src={hatch} alt="" width={177} className="" />
              <p className="font-semibold text-primary">Hatchback</p>
            </button>
            <button className="saloon-container w-full cursor-pointer h-30 bg-neutral-light hover:bg-neutral-cream shadow-lg rounded-2xl flex flex-col items-center justify-center transition-all hover:shadow-xl transform hover:-translate-y-1">
              <Link></Link>
              <img src={saloon} alt="" width={220} />
              <p className="font-semibold text-primary">Saloon</p>
            </button>
            <button className="MinTruck-container w-full cursor-pointer h-30 bg-neutral-light hover:bg-neutral-cream shadow-lg rounded-2xl flex flex-col items-center justify-center transition-all hover:shadow-xl transform hover:-translate-y-1">
              <Link></Link>
              <img src={mini_truck} alt="" width={160} />
              <p className="font-semibold text-primary">Mini Truck</p>
            </button>
            <button className="BigTruck-container w-full cursor-pointer h-30 bg-neutral-light hover:bg-neutral-cream shadow-lg rounded-2xl flex flex-col items-center justify-center transition-all hover:shadow-xl transform hover:-translate-y-1">
              <Link></Link>
              <img src={big_truck} alt="" width={140} />
              <p className="font-semibold text-primary">Big Truck</p>
            </button>
          </div>
        </div>
      </div>

      {/* Browse by Manufacturer */}
      <div className="py-14 bg-neutral-light">
        <div className="inner-div max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="header text-4xl font-bold text-primary mb-2">
            Browse by car manufacturer
          </h1>
          <p className="text-neutral text-lg mb-8">Explore vehicles from top brands</p>
        </div>

        <div className="py-10">
          <ul className="flex flex-row justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {carBrands.map((brand) => (
              <li key={brand.id} className="group cursor-pointer">
                <div className="flex flex-row items-center justify-center space-x-5 opacity-60 hover:opacity-100 transition-opacity">
                  <img src={brand.logo} alt={brand.name} className="" width={35} />
                  <h4 className="text text-primary text-xl font-bold group-hover:text-accent transition-colors">{brand.name}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Popular Used Cars */}
      <div className="py-14 bg-white">
        <div className="inner-div max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="header text-4xl font-bold text-primary mb-2">
            Popular Used Car Models
          </h1>
          <p className="text-neutral text-lg mb-8">Find the best deals on pre-owned vehicles</p>
        </div>

        <div className="py-10">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {popularUsedBrands.map((used) => (
              <li key={used.id} className="">
                <div>
                  <button className="opacity-60 hover:opacity-100 hover:underline font-bold text-xl transition-all text-left w-full group">
                    <h4 className="text text-primary text-xl font-bold group-hover:text-accent">{used.name}</h4>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;