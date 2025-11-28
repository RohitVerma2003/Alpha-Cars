
const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-2xl font-bold text-[#2e054e] mb-4">CarHub</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted platform for buying and selling pre-owned cars with
              confidence and transparency.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#2e054e] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-[#2e054e] transition-colors"
                >
                  Buy Cars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-[#2e054e] transition-colors"
                >
                  Sell Your Car
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-[#2e054e] transition-colors"
                >
                  Car Finance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-[#2e054e] transition-colors"
                >
                  Car Inspection
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#2e054e] mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-[#2e054e] transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-[#2e054e] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-[#2e054e] transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-[#2e054e] transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#2e054e] mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: support@carhub.com</li>
              <li>Phone: +91 9876543210</li>
              <li>Address: Sector-29, Gurgaon</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#2e054e] hover:text-white transition-colors"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#2e054e] hover:text-white transition-colors"
              >
                <span className="text-sm font-bold">tw</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#2e054e] hover:text-white transition-colors"
              >
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2024 CarHub. All rights reserved. | Privacy Policy | Cookie Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
