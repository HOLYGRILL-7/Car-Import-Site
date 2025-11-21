import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Wrench } from "lucide-react";

const ComingSoon = ({
  pageName = "This Page",
  description = "We're working hard to bring you something amazing!",
  progress = 65,
  IconComponent = Wrench, // eslint-disable-line no-unused-vars
}) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center pt-20 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative bg-white rounded-full p-8 shadow-2xl">
              <IconComponent className="w-20 h-20 text-blue-600 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8">{description}</p>

        {/* Description */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            Our <span className="font-semibold text-blue-600">{pageName}</span>{" "}
            page is under construction. We're crafting the perfect experience to
            share with you.
          </p>
          <p className="text-sm text-gray-500">
            Check back soon for updates! 🚀
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-blue-600">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
