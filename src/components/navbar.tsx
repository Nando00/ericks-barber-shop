import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { Scissors, UserCircle } from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-xl font-bold flex items-center">
          <Scissors className="h-6 w-6 mr-2 text-blue-600" />
          <span>Erick's Barber Studio</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/#services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link href="/#gallery" className="text-gray-700 hover:text-blue-600">
            Gallery
          </Link>
          <Link
            href="/#promotions"
            className="text-gray-700 hover:text-blue-600"
          >
            Promotions
          </Link>
          <Link href="/#booking" className="text-gray-700 hover:text-blue-600">
            Book Now
          </Link>
        </div>

        {/* 
        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Button>Dashboard</Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
          */}
      </div>
    </nav>
  );
}
