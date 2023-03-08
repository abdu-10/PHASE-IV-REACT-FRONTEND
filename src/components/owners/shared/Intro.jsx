import React from "react";
import { NavLink } from "react-router-dom";
function Intro (){
    return (
        <>
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-1/3">
            <h1 className="text-4xl font-semibold leading-9 text-gray-800 dark:text-black">
              Turn your motorcycles into a business
            </h1>
            <p className="text-base leading-6 mt-4 text-l-600 dark:text-black">
              List your motorcycle for free and make an average of $100 per
              booking. We strive to turn only the safest riders into renters by
              using technology. .
            </p>
            <button
              role="button"
              aria-label="view catalogue"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 dark:text-black flex items-center hover:underline"
            >
              <NavLink to="/owner/new-bike">List Your Motorcycle Today</NavLink>
              <svg
                className="ml-2 mt-1 dark:text-white"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33325 4H10.6666"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 6.66667L10.6667 4"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 1.33398L10.6667 4.00065"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="lg:w-7/12 lg:mt-10 mt-8">
            <div className="w-full h-full bg-red-200">
              <img
                src="https://rare-gallery.com/uploads/posts/373251-4k-wallpaper.jpg"
                alt="apartment design"
                className="w-full sm:block hidden"
              />
              <img
                src="https://rare-gallery.com/uploads/posts/373251-4k-wallpaper.jpg"
                alt="apartment design"
                className="sm:hidden block w-full"
              />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
              <img
                src="https://badasshelmetstore.com/wp-content/uploads/2020/08/1707849-scaled.jpg"
                className="w-full"
                alt="Red Bike"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGs8I6iOFqRi7bEGm6QqcJZeREVV0SExZng&usqp=CAU"
                className="w-full"
                alt="Bike"
              />
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Intro;