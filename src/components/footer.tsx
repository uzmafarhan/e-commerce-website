import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Social icons
import { faArrowCircleRight, faCopyright } from '@fortawesome/free-solid-svg-icons'; // Social icons

export default function Footer() {
  return (
    <main className="bg-neutral-900 flex flex-col">
      <div className="w-full sm:h-auto lg:h-[350px] bg-neutral-900 flex justify-center items-center py-6">
        <div className="w-full sm:px-4 flex flex-col lg:flex-row justify-evenly text-white">
          <div className="w-full sm:w-full md:w-[250px] lg:w-[200px] mb-8 sm:mb-4">
            <h1 className="font-bold text-xl mb-4">Exclusive</h1>
            <ul>
              <li className="pt-2 cursor-pointer">Subscribe</li>
              <li className="pt-2 cursor-pointer">Get 10% off your first order</li>
              <li className="mt-3 cursor-pointer py-1 border flex justify-center">
                <input type="text" placeholder="Enter your Email" className="bg-gray-900 border-none text-white py-1 px-2 w-full" />
                <FontAwesomeIcon icon={faArrowCircleRight} className="text-xl sm:hidden md:block" />
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-full md:w-[250px] lg:w-[200px] mb-8 sm:mb-4">
            <h1 className="font-bold text-xl mb-4">Support</h1>
            <ul>
              <li className="pt-1 cursor-pointer">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li className="pt-1 cursor-pointer">exclusive@gmail.com</li>
              <li className="pt-1 cursor-pointer">+88015-88888-9999</li>
            </ul>
          </div>
          <div className="w-full sm:w-full md:w-[250px] lg:w-[200px] mb-8 sm:mb-4">
            <h1 className="font-bold text-xl mb-4">Account</h1>
            <ul>
              <li className="pt-1 cursor-pointer">My Account</li>
              <li className="pt-1 cursor-pointer">Login / Register</li>
              <li className="pt-1 cursor-pointer">Cart</li>
              <li className="pt-1 cursor-pointer">Wishlist</li>
              <li className="pt-1 cursor-pointer">Shop</li>
            </ul>
          </div>
          <div className="w-full sm:w-full md:w-[250px] lg:w-[200px] mb-8 sm:mb-4">
            <h1 className="font-bold text-xl mb-4">Quick Link</h1>
            <ul>
              <li className="pt-1 cursor-pointer">Privacy Policy</li>
              <li className="pt-1 cursor-pointer">Terms Of Use</li>
              <li className="pt-1 cursor-pointer">FAQ</li>
              <li className="pt-1 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="w-full sm:w-full md:w-[250px] lg:w-[200px] mb-8 sm:mb-4">
            <h1 className="font-bold text-xl pb-4">Social Links</h1>
            <ul className="list-none flex gap-x-3 justify-center sm:justify-start">
              <li>
                <Link href="https://www.youtube.com/@MsNIMRA" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="text-3xl mr-2 transition duration-200 ease-out hover:scale-105 hover:ease-in" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/nimra-talha-7691a21a3/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-3xl mr-2 transition duration-200 ease-out hover:scale-105 hover:ease-in" />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/NimraTalha123" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-3xl mr-2 transition duration-200 ease-out hover:scale-105 hover:ease-in" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-white text-center text-sm pb-4">
        <FontAwesomeIcon icon={faCopyright} className="text-lg mr-3" /> Copyright Rimel 2022. All rights reserved
      </p>
    </main>
  );
}
