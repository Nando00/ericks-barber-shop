import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BookingSection from "@/components/booking-section";
import { createClient } from "../../supabase/server";
import {
  ArrowUpRight,
  Scissors,
  Clock,
  Sparkles,
  Camera,
  Star,
} from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Services data
  const services = [
    {
      title: "Classic Haircut",
      price: "$30",
      duration: "30 min",
      description: "Traditional haircut with clippers, scissors, and line up",
    },
    {
      title: "Beard Line Up / Shave with Hot Towel",
      price: "$30",
      duration: "20 min",
      description: "Beard line up with hot towel and straight razor shave",
    },
    {
      title: "Haircut & Beard",
      price: "$50",
      duration: "35 min",
      description: "Grooming package for hair and beard",
    },
    {
      title: "Haircut & Beard & Enhancements",
      price: "$60",
      duration: "45 min",
      description: "Complete grooming package for hair and beard with dye",
    },

    {
      title: "Kids Haircut",
      price: "$35",
      duration: "30 min",
      description: "Haircuts for children 9 and under",
    },
  ];

  // Gallery images
  const galleryImages = [
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Booking Section */}
      <BookingSection />

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional haircuts and grooming services for the modern
              gentleman.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <span className="text-xl font-bold text-blue-600">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at our work and shop atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={image}
                  alt={`Barber shop gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Michael T.",
                quote:
                  "Best haircut I've ever had. The hot towel treatment is amazing!",
              },
              {
                name: "David R.",
                quote:
                  "Professional, friendly, and always on time. My go-to barber shop for years.",
              },
              {
                name: "James L.",
                quote:
                  "Love the online booking system. Makes it so easy to schedule appointments.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Take advantage of our limited-time promotions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-blue-200 mb-4">
                <Scissors className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                First-Time Client Special
              </h3>
              <p className="text-blue-100 mb-4">
                20% off your first haircut when you book online.
              </p>
              <a
                href="#booking"
                className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Book Now
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-blue-200 mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Father & Son Package
              </h3>
              <p className="text-blue-100 mb-4">
                Book a haircut for you and your son and save 15%.
              </p>
              <a
                href="#booking"
                className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Book Now
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Fresh Look?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Appointment
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
