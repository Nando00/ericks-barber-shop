"use client";

import { Calendar } from "lucide-react";
import { useEffect } from "react";

export default function BookingSection() {
  useEffect(() => {
    // Load Acuity Scheduling scripts
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href =
      "https://embed.acuityscheduling.com/embed/button/35873857.css";
    linkElement.id = "acuity-button-styles";
    document.head.appendChild(linkElement);

    const scriptElement = document.createElement("script");
    scriptElement.src =
      "https://embed.acuityscheduling.com/embed/button/35873857.js";
    scriptElement.async = true;
    document.body.appendChild(scriptElement);

    return () => {
      // Clean up on unmount
      document.head.removeChild(linkElement);
      document.body.removeChild(scriptElement);
    };
  }, []);

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Book Your Appointment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule your visit online and skip the wait. Choose your preferred
            service, stylist, and time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-sm">
          {/* Acuity Scheduling Embed Placeholder */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <Calendar className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Scheduling</h3>
            <p className="text-gray-600 mb-6">
              Select your service, choose your stylist, and pick a time that
              works for you.
            </p>
            <a
              href="https://app.acuityscheduling.com/schedule.php?owner=35873857&ref=booking_button"
              target="_blank"
              className="acuity-embed-button"
              style={{
                background: "#3b82f6",
                color: "#fff",
                padding: "8px 12px",
                border: 0,
                WebkitBoxShadow: "0 -2px 0 rgba(0,0,0,0.15) inset",
                MozBoxShadow: "0 -2px 0 rgba(0,0,0,0.15) inset",
                boxShadow: "0 -2px 0 rgba(0,0,0,0.15) inset",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Schedule Appointment
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Powered by Acuity Scheduling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
