import React from 'react'

const Contact = () => {
  return (
      <>
          <div className="bg-black text-white mt-10 flex flex-col items-center px-4 min-h-[285px] justify-center py-10">
              <div className="max-w-6xl w-full gap-y-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Connect With Us */}
                  <div className="border border-[#857878] rounded-lg p-6 text-center order-2 md:order-1">
                      <h2 className="text-blue-400 mb-2">CONNECT WITH US</h2>
                      <h2 className="text-[#857878] flex justify-center items-center gap-3">
                          <i className="fas fa-phone text-yellow-500 text-lg"></i>
                          <span>+91 9567843340</span>
                      </h2>
                      <p className="text-[#857878] flex justify-center items-center gap-3 mt-2">
                          <i className="fas fa-envelope text-yellow-500 text-lg"></i>
                          <span>info@deepnetsoft.com</span>
                      </p>
                  </div>

                  {/* Logo & Socials */}
                  <div className="border border-[#857878] rounded-lg p-2 text-center relative order-1 md:order-2">
                      <div className="flex justify-center">
                          <img
                              src="./dns-logo.png"
                              className="bg-black top-[-40px] h-[66px] md:h-[76px] md:w-[86px] absolute"
                              alt="dns-logo"
                          />
                      </div>
                      <h2 className="text-[30px] md:text-[35px] font-bold mt-8">
                          <span className="text-blue-400">DEEP</span>{" "}
                          <span className="text-white">NET</span>{" "}
                          <span className="text-[#857878]">SOFT</span>
                      </h2>

                      <div className="flex justify-center text-sm space-x-4 mt-4 pb-3 text-[#857878]">
                          <i className="fab fa-facebook cursor-pointer hover:text-blue-500"></i>
                          <i className="fab fa-twitter cursor-pointer hover:text-blue-400"></i>
                          <i className="fab fa-youtube cursor-pointer hover:text-red-500"></i>
                          <i className="fab fa-instagram cursor-pointer hover:text-pink-500"></i>
                      </div>
                  </div>

                  {/* Find Us */}
                  <div className="border-1  border-[#857878] rounded-lg p-6 text-center text-[16px] order-3">
                      <h2 className="text-blue-400 mb-2">FIND US</h2>
                      <div className="text-[#857878] text-[16px] flex justify-center items-center gap-3">
                          <i className="fas fa-map-marker-alt text-yellow-500 text-lg"></i>
                          <h2>
                              First floor, Geo Infopark,
                              <br /> Infopark EXPY, Kakkanad
                          </h2>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Contact