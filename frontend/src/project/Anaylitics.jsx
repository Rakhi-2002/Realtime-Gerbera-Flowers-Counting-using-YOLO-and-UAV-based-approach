import React from "react";
// import Laptop from "../../assets/images/laptop.jpg";
import v from "./gerbera-detect-final-video.mp4";
import farmer from "./farmer.jpeg";
const Analytics = () => {
  return (
    <div className="w-full py-16 px-4 bg-gray-100" id="demo">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div className="relative">
        <img
          className="w-full rounded-lg shadow-md"
          src={farmer}
          alt="Farmer"
        />
        <a
          href={v}
          target="_blank"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white px-6 py-2 rounded-md hover:bg-green transition-colors duration-300"style={{ backgroundColor: '#4CAF50'}}
        >
          Watch Video
        </a>
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-green-600 mb-4">
          <span className="text-4xl">Gerbera Flower Counting</span> System
        </h1>
        <p className="text-gray-800 font-semibold mb-2">
          <span className="font-bold">using Images captured by Drone</span>
        </p>
        <p className="text-gray-700 leading-relaxed">
          "Gerbera Flower Counting System using images captured by Drone"
          integrates computer vision and image processing to automate precise
          flower counting in floriculture, eliminating labor-intensive methods
          and enhancing production management. It provides accurate and
          efficient data analysis, helping growers optimize their operations
          and maximize yield. With our advanced technology, managing flower
          cultivation has never been easier.
        </p>
      </div>
    </div>
  </div>
  );
};
export default Analytics;
