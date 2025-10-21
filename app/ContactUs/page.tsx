import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Image */}
        <div className="relative">
          <Image
            src="/gaming-contact.png" // Add your image in public folder
            alt="Contact Gaming Support"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have questions, feedback, or want to partner with us?  
            Drop us a message and our team will get back to you soon.
          </p>

          {/* Contact Form */}
          <form className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Or Reach Us At:</h3>
            <p className="text-gray-600">
              📧 Email:{" "}
              <a
                href="mailto:yourgmail@gmail.com"
                className="text-purple-600 font-medium hover:underline"
              >
                yourgmail@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
