import React from "react";
import { NavLink } from "react-router-dom";
function OwnerDashboard() {
  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/46/22/motorcycle-logo-for-rent-vector-25604622.jpg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Bike Fleet
          </span>

          <div className="flex md:order-2">
            <img
              class="w-10 h-10 rounded"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="Default avatar"
            />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/owner/riders"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  All Riders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/owner/myriders"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My Riders
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div class="lg:flex items-center justify-between">
          <div class="lg:w-1/3">
            <h1 class="text-4xl font-semibold leading-9 text-gray-800 dark:text-black">
              Turn your motorcycles into a business
            </h1>
            <p class="text-base leading-6 mt-4 text-l-600 dark:text-black">
              List your motorcycle for free and make an average of $100 per
              booking. We strive to turn only the safest riders into renters by
              using technology. .
            </p>
            <button
              role="button"
              aria-label="view catalogue"
              class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 dark:text-black flex items-center hover:underline"
            >
              <NavLink to="/owner/new-bike">List Your Motorcycle Today</NavLink>
              <svg
                class="ml-2 mt-1 dark:text-white"
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
          <div class="lg:w-7/12 lg:mt-10 mt-8">
            <div class="w-full h-full bg-red-200">
              <img
                src="https://rare-gallery.com/uploads/posts/373251-4k-wallpaper.jpg"
                alt="apartment design"
                class="w-full sm:block hidden"
              />
              <img
                src="https://rare-gallery.com/uploads/posts/373251-4k-wallpaper.jpg"
                alt="apartment design"
                class="sm:hidden block w-full"
              />
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
              <img
                src="https://badasshelmetstore.com/wp-content/uploads/2020/08/1707849-scaled.jpg"
                class="w-full"
                alt="Red Bike"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGs8I6iOFqRi7bEGm6QqcJZeREVV0SExZng&usqp=CAU"
                class="w-full"
                alt="Bike"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerDashboard;
