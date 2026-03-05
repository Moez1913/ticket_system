import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
     <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* 1st Column */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              CS — Ticket System
            </h2>
            <p className="text-sm leading-6">
              A modern and efficient ticket management system designed to help
              teams track, manage, and resolve tasks seamlessly.
            </p>
          </div>

          {/* 2nd Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Mission</li>
              <li className="hover:text-white cursor-pointer">Contact Sales</li>
            </ul>
          </div>

          {/* 3rd Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Products & Services</li>
              <li className="hover:text-white cursor-pointer">Customer Stories</li>
              <li className="hover:text-white cursor-pointer">Download Apps</li>
            </ul>
          </div>

          {/* 4th Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Join Us</li>
            </ul>
          </div>

          {/* 5th Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Social Links</h3>

            <div className="space-y-3 text-sm">

              <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaFacebook/>
                <span>@CS — Ticket System</span>
              </div>

              <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaTwitter/>
                <span>@CS — Ticket System</span>
              </div>

              <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaInstagram/>
                <span>@CS — Ticket System</span>
              </div>

              <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaEnvelope />
                <span>support@cst.com</span>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © 2025 CS — Ticket System. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer