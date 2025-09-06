"use client";
import { BookCheck, Menu } from "lucide-react";

import Image from "next/image";
import profile from "@/public/profile.jpg";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between pt-4 pb-4 pl-10 pr-10 relative">
        <div className="flex items-center gap-5">
          <div>
            <Menu size={30} />
          </div>
          <div className="flex items-center gap-2">
            <BookCheck size={40} color="green" />
            <span className="text-xl font-bold">ZyraTasks</span>
          </div>
        </div>

        <Image
          src={profile}
          height={40}
          width={40}
          alt="User image"
          className="radius-full"
        />
      </nav>
    </div>
  );
};

export default Navbar;
