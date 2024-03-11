"use client";
import { Button } from "antd";
import { useState } from "react";

const PricingCard = () => {
  const [isBusiness, setIsBusiness] = useState(false);

  return (
    <div className="p-0">
      <section className="py-8">
        <div className="px-4">
          <div className="mb-16 w-fit bg-gray-200 rounded-full mx-auto px-2 py-1">
            <Button
              className={`${!isBusiness && "bg-white"} mr-1`}
              size="large"
              type="text"
              shape="round"
              onClick={()=> setIsBusiness(false)}
            >
              Individual
            </Button>
            <Button
              className={`${isBusiness && "bg-white"}`}
              size="large"
              shape="round"
              type="text"
              onClick={()=> setIsBusiness(true)}
            >
              Business
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 -mx-4">
            <div className="flex w-full mb-8 border rounded-3xl lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded-2xl shadow sm:p-8 text-gray-900">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold Inter">Starter</h4>
                  <span className="text-6xl font-bold Inter">$35</span>
                </div>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="undefined Inter">
                      20 high-quality headshots
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="undefined Inter">
                      5 outfits and backgrounds
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="undefined Inter">
                      60 minute turnaround time
                    </span>
                  </li>
                </ul>
                <button
                  rel="noopener noreferrer"
                  className="inline-block w-full px-5 py-3 font-bold tracking-wider  text-center rounded-3xl bg-gray-900 text-white"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 border sm:p-8 bg-white  rounded-3xl">
                <div className="space-y-2 font-bold">
                  <h4 className="text-2xl  Inter">Basic</h4>
                  <span className="text-6xl Inter">$0</span>
                  <span className="text-sm tracking-wide Inter">/month</span>
                </div>
                <p className="mt-3 leading-relaxed text-gray-600 Inter">
                  A free plan that has what you need to get started with our
                  products.
                </p>
                <ul className="flex-1 space-y-2 mb-6 text-indigo-600">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-500 Inter">
                      5 Social Media Accounts
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-500 Inter">
                      Free Platform Access
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-500 Inter">
                      24/7 Customer Support
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded-3xl bg-indigo-600 text-gray-50"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded-3xl shadow border sm:p-8">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold Inter">Premium</h4>
                  <span className="text-6xl font-bold Inter">$12</span>
                  <span className="text-sm tracking-wide Inter">/month</span>
                </div>
                <p className="leading-relaxed Inter">
                  The plan for developers and startups, with lots of premium
                  features.
                </p>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="undefined Inter">
                      7 Social Media Accounts
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="undefined Inter">
                      Free Platform Access
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="undefined Inter">
                      24/7 Customer Support
                    </span>
                  </li>
                </ul>
                <button
                  rel="noopener noreferrer"
                  className="inline-block w-full px-5 py-3 font-bold tracking-wider    text-center rounded-3xl bg-gray-900 text-white"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingCard;
