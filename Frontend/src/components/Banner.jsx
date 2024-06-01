import React from "react";
import banner from "../../public/Banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800">
              Welcome to Your Next Learning Adventure{" "}
              <span className="text-green-500">Every Day!</span>
            </h1>
            <p className="text-md md:text-lg text-gray-700">
              Discover a world of knowledge at your fingertips. Join us on a
              journey through fascinating topics and expand your horizons with
              each new day.
            </p>
          </div>
        
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2 flex justify-center items-center">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12 rounded-lg shadow-lg"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
