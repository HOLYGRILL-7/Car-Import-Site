import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Heart, Share2, Phone, MessageSquare, MapPin, Gauge, Calendar, Fuel, Settings } from 'lucide-react';

const CarDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Sample car data - replace with actual data from API/props
  const car = {
    id: 1,
    name: "Toyota Tacoma TRD Pro",
    price: "$54,000",
    year: "2024",
    mileage: "6,800 km",
    location: "Accra, Ghana",
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Gasoline",
    bodyType: "Pickup Truck",
    color: "Supersonic Red",
    engineSize: "3.5L V6",
    horsepower: "278 HP",
    features: [
      "Apple CarPlay & Android Auto",
      "Leather Seats",
      "Backup Camera",
      "Bluetooth",
      "Navigation System",
      "Sunroof",
      "Heated Seats",
      "Parking Sensors"
    ],
    description: "This 2024 Toyota Tacoma TRD Pro is in excellent condition with low mileage. Perfect for both city driving and off-road adventures. Well-maintained with full service history.",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
    ],
    seller: {
      name: "AutoHub Motors",
      phone: "+233 24 123 4567",
      whatsapp: "+233 24 123 4567"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          to="/newArrivals" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Listings
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Images */}
          <div>
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg mb-4 h-96">
              <img 
                src={car.images[selectedImage]} 
                alt={car.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                {car.condition}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                    isFavorite 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/80 text-gray-700 hover:bg-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
                <button className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {car.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden h-24 transition-all ${
                    selectedImage === index 
                      ? 'ring-4 ring-blue-600 scale-105' 
                      : 'ring-2 ring-gray-200 hover:ring-gray-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${car.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              
              {/* Title & Price */}
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {car.name}
              </h1>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <MapPin className="w-4 h-4" />
                <span>{car.location}</span>
              </div>
              
              <div className="text-5xl font-bold text-blue-600 mb-8">
                {car.price}
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Gauge className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Mileage</p>
                    <p className="font-semibold text-gray-900">{car.mileage}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Year</p>
                    <p className="font-semibold text-gray-900">{car.year}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Fuel className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fuel Type</p>
                    <p className="font-semibold text-gray-900">{car.fuelType}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Settings className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Transmission</p>
                    <p className="font-semibold text-gray-900">{car.transmission}</p>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3 mb-8">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Seller
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp
                </button>
                <button className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 rounded-xl transition-colors">
                  Request Test Drive
                </button>
              </div>

              {/* Seller Info */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Sold by</p>
                <p className="font-semibold text-gray-900 text-lg">{car.seller.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          
          {/* Description */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {car.description}
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Body Type</span>
                <span className="font-semibold text-gray-900">{car.bodyType}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Color</span>
                <span className="font-semibold text-gray-900">{car.color}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Engine Size</span>
                <span className="font-semibold text-gray-900">{car.engineSize}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Horsepower</span>
                <span className="font-semibold text-gray-900">{car.horsepower}</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
            <div className="space-y-3">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;