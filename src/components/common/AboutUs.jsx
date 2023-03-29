import React from "react";
import Navigation from "./Navigation";
function AboutUs() {
  return (
    <>
    <Navigation/>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://pbs.twimg.com/media/Ew24reFXAAAV4IV.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Bike Fleet is an Up and Coming MotorCycle sharing community
              </h2>
              <p className="mt-6 text-gray-600">
                {" "}
                We connect riders and owners to create a better motorcycle
                rental alternative. On Bike Fleet, you can find the largest
                selection of bikes for rent in the country
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                Bike Fleet works to build a safe and friendly community of
                motorcycle riders. We are using advanced data to vet riders and
                ensure only the safest book your motorcycle. Our mission is to
                support the motorcycle community by making access to motorcycles
                more affordable. To fulfill this mission, everybody in our team
                is a motorcycle rider like you. We live and breathe motorcycles.
                We were tired of expensive and unreliable motorcycle rentals.
                When you use Bike Fleet, you get more than a superior
                experience. We have a plan to grow the motorcycle community as a
                whole by using the same techniques that Big Tech uses to glue
                you to a screen, to convince you to go outside and have fun. We
                wish for you to join this bad-ass community of safe riders.
                Come ride with us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
