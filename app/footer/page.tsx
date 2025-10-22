
export function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

    <div>
      <h2 className="text-2xl font-bold mb-4">Clash Hub</h2>
      <p className="text-gray-400 text-sm">
        Play top trending games online for free. Discover arcade, horror, survival and more! No installation needed. Built for gamers.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">Games</a></li>
        <li><a href="#" className="hover:text-white">Trending</a></li>
        <li><a href="#" className="hover:text-white">Pricing</a></li>
        <li><a href="#" className="hover:text-white">About Us</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">Contact</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>Email: <a href="mailto:support@clashhub.com" className="hover:text-white">support@clashhub.com</a></li>
        <li>Phone: <a href="tel:+911234567890" className="hover:text-white">+91 12345 67890</a></li>
        <li>Location: Mumbai, India</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-sky-400"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-red-500"><i className="fab fa-youtube"></i></a>
        <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
    © 2025 Clash Hub. All rights reserved.
  </div>
</footer>

    )
}