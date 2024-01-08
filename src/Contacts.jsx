import React from 'react'

export const Contacts = () => {
  return (
<>
    
<section
        id="contact"
        className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500y py-16 p-4 sm:p-10 text-white"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>

          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-tr from-blue-400 to-pink-500 hover:from-blue-800 hover:to-pink-800 transition-all duration-300 text-white py-3 px-6 rounded-full w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
