import Link from "next/link";
import {
  Twitter,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Erick's Barber Shop</h3>
            <p className="text-gray-600 mb-4">
              Professional barber services with a focus on quality, style, and
              customer satisfaction.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Haircuts
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Beard Trims
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Hot Towel Shaves
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Hair Styling
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#booking"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#promotions"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Promotions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span className="text-gray-600">
                  5129 Aldine Mail Route Rd, Unit 77039, Houston, TX 77039,
                  United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-600">(832) 208-0757</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <div className="text-gray-600">
                  <p>Mon-Fri: 8am - 7pm</p>
                  <p>Sat: 8am - 6pm</p>
                  <p>Sun: Call for appointment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Erick's Barber Shop. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
