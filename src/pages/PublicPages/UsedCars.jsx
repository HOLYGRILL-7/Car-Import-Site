import React from "react";
import { Link } from "react-router-dom";
// import ComingSoon from "../../components/ComingSoon";
import audi_silver from "../../assets/New Arrivals/Audi-silver.jpg";
import audi_white from "../../assets/New Arrivals/Audi-white.jpg";
import audi_dark from "../../assets/New Arrivals/audi-dark.jpg";
import benz_black from "../../assets/New Arrivals/benz-black.jpg";
import bmw_white from "../../assets/New Arrivals/bmw-white.jpg";
import ram_black from "../../assets/New Arrivals/Ram-black.jpg";
import romeo_black from "../../assets/New Arrivals/romeo-black.jpg";
import rover_black from "../../assets/New Arrivals/rover-black.jpg";
import range_silver from "../../assets/New Arrivals/range-silver.jpg";
// import redCar_front from "../../assets/redCar-fronside.png";
// import redCar_rear from "../../assets/redCar-rearside.png";


const NewArrival = () => {

  const newCars = [
      {
        id: 1,
        image: audi_silver,
        name: "Audi A8",
        price: "$85,000",
        year: "2024",
        mileage: "5,000 km",
        description: "Luxury sedan with premium leather interior, advanced driver assistance, and powerful V6 engine. Experience ultimate comfort and performance."
      },
      {
        id: 2,
        image: audi_white,
        name: "Audi Q7",
        price: "$72,000",
        year: "2024",
        mileage: "3,200 km",
        description: "Spacious 7-seater SUV with Quattro all-wheel drive, panoramic sunroof, and cutting-edge technology. Perfect for families seeking luxury."
      },
      {
        id: 3,
        image: benz_black,
        name: "Mercedes-Benz S-Class",
        price: "$95,000",
        year: "2024",
        mileage: "2,800 km",
        description: "The pinnacle of automotive luxury. Features massage seats, ambient lighting, and a sophisticated hybrid powertrain for effortless driving."
      },
      {
        id: 4,
        image: bmw_white,
        name: "BMW X5",
        price: "$78,000",
        year: "2024",
        mileage: "4,500 km",
        description: "Dynamic SUV combining sporty handling with premium comfort. Equipped with xDrive, gesture control, and adaptive suspension."
      },
      {
        id: 5,
        image: audi_dark,
        name: "Audi A6",
        price: "$68,000",
        year: "2024",
        mileage: "6,200 km",
        description: "Executive sedan with sleek design, virtual cockpit, and mild-hybrid technology. Refined performance meets exceptional efficiency."
      },
      {
        id: 6,
        image: ram_black,
        name: "RAM 1500 Limited",
        price: "$72,000",
        year: "2024",
        mileage: "7,800 km",
        description: "Premium full-size pickup with best-in-class towing capacity, luxurious cabin, and advanced air suspension for smooth rides."
      },
      {
        id: 7,
        image: romeo_black,
        name: "Alfa Romeo Giulia",
        price: "$65,000",
        year: "2024",
        mileage: "3,500 km",
        description: "Italian sports sedan delivering thrilling performance with rear-wheel drive, turbocharged engine, and race-inspired handling dynamics."
      },
      {
        id: 8,
        image: rover_black,
        name: "Range Rover Sport",
        price: "$98,000",
        year: "2024",
        mileage: "2,100 km",
        description: "Luxury performance SUV with terrain response system, premium Meridian audio, and commanding presence on any road."
      },
      {
        id: 9,
        image: range_silver,
        name: "Range Rover Evoque",
        price: "$82,000",
        year: "2024",
        mileage: "4,800 km",
        description: "Compact luxury SUV with distinctive design, innovative ClearSight technology, and efficient mild-hybrid powertrain."
      },
    ];
  return (
    <div className="main-container bg-neutral-light">

    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="inner-div ">
        <div className="hero-section w-full space-y-7 p-20 bg-linear-to-b from bg-neutral-dark via-neutral to-bg-neutral-light h-[390px] shadow-2xl rounded-2xl px-14 flex flex-col justify-center items-center">
          <h1 className="font-bold text-8xl text-neutral-cream">USED CAR DEALS</h1>
          <p className="text-2xl font-bold">Approved by our experts, zero-faults.</p>
        </div>
        {/* <div className=" front redCar absolute right-8 top-0 z-10">
          <img src={redCar_front} alt="" width={450} />
          
        </div> */}
        {/* <div className="rear redCar absolute left-0 top-32">
          <img src={redCar_rear} alt="" width={450} />
        </div> */}
      </div>

      <div className="cars-container">
        <div className="inner-container">
          <ul>
            {newCars.map((car) => (
              <li key={car.id}>
                <Link to="/carDetails">
                  <div className="car-Card w-full grid grid-cols-2 h-96 my-5 bg-neutral-cream shadow-2xl rounded-2xl overflow-hidden">
                    <div className="image-section p-6">
                      <img src={car.image} alt={car.name} className="max-w-sm w-full h-[350px] object-cover rounded-lg" />
                    </div>
                    <div className="text-btn-alignment flex flex-col justify-between py-8 pr-8">
                        <div className="text-section space-y-4">
                      <h1 className="text-3xl font-bold text-primary">{car.name}</h1>
                      <p className="text-neutral text-base leading-relaxed">{car.description}</p>
                      <div className="flex items-center gap-4 text-sm text-neutral">
                        <span className="font-semibold">Year: {car.year}</span>
                        <span>•</span>
                        <span className="font-semibold">{car.mileage}</span>
                      </div>
                      <p className="text-4xl font-bold text-accent">{car.price}</p>
                    </div>

                    <div className="button-sec flex justify-center items-center">
                      <button type="button" className="bg-primary-light hover:bg-primary text-white font-semibold max-w-sm w-full mx-auto h-14 rounded-2xl transition-colors">Order {car.name}</button>
                    </div>
                    </div>
                  
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NewArrival;