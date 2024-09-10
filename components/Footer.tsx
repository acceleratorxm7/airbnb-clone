import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-5">
      <section>
        <ul className="flex flex-col gap-2">
          <li className="font-bold text-sm md:mb-2">Support</li>
          <li className="text-sm">Help Center</li>
          <li className="text-sm">AirCover</li>
          <li className="text-sm">Anti-discrimination</li>
          <li className="text-sm">Disability support</li>
          <li className="text-sm">Cancellation options</li>
          <li className="text-sm">Report neighborhood concern</li>
        </ul>
      </section>
      <section>
        <ul className="flex flex-col gap-2">
          <li className="font-bold text-sm md:mb-2">Hosting</li>
          <li className="text-sm">Airbnb your home</li>
          <li className="text-sm">AirCover for Hosts</li>
          <li className="text-sm">Hosting resourcesf</li>
          <li className="text-sm">Community forum</li>
          <li className="text-sm">Hosting responsibly</li>
          <li className="text-sm">Airbnb-friendly apartments</li>
          <li className="text-sm">Join a free Hosting class</li>
        </ul>
      </section>
      <section>
        <ul className="flex flex-col gap-2">
          <li className="font-bold text-sm md:mb-2">Airbnb</li>
          <li className="text-sm">Newsroom</li>
          <li className="text-sm">New features</li>
          <li className="text-sm">Careers</li>
          <li className="text-sm">Investors</li>
          <li className="text-sm">Gift cards</li>
          <li className="text-sm">Airbnb.org emergency stays</li>
        </ul>
      </section>
    </footer>
  );
};
