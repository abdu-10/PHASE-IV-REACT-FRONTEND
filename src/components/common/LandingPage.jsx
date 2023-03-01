import React from "react";


function LandingPage() {
  <div class="w-full">
    <div class="flex bg-white" style="height:600px;">
      <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
          <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
            Welcome to <span class="text-indigo-600">Bike Fleet</span>
          </h2>
          <p class="mt-2 text-sm text-gray-500 md:text-base">
          Cue your favorite biker anthem, grab a fistful of throttle and roll on out to a life-affirming adventure that will change you forever. 
          There are places on the paved side of this planet that can only truly be experienced by motorcycle, 
          where life in the wind heightens the senses and expands the spirit of every freedom seeking soul. 
          At BikeFleet, we provide motorcycles and design tours for men and women not meant for the average citizen. 
          Novice or expert, bikers are a breed apart, and so are our programs. 
          We are one of you, and understand the pure primal joy only motorcycling, above all else, offers.
          </p>
          <div class="flex justify-center lg:justify-start mt-6">
            <a
              class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
              href="#"
            >
              Owner
            </a>
            <a
              class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
              href="#"
            >
              Rider
            </a>
          </div>
        </div>
      </div>
      <div
        class="hidden lg:block lg:w-1/2"
        style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
      >
        <div
          class="h-full object-cover"
          style="background-image: url(https://cdn.vectorstock.com/i/1000x1000/16/77/motorbike-poster-vector-691677.webp)"
        >
          <div class="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  </div>;
}

export default LandingPage;
