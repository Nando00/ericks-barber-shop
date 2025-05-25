import Link from "next/link";
import { ArrowUpRight, Check, Scissors, Clock } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80")',
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-800 to-gray-950 opacity-60" />
      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
              Erick's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Barber Studio
              </span>
            </h1>

            <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Expert cuts, classic shaves, and modern styles. Book your
              appointment today and experience the difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#booking"
                className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Book Appointment
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
              >
                View Services
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <Scissors className="w-5 h-5 text-blue-400" />
                <span>Professional Stylists</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Online Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Open 7 Days a Week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
