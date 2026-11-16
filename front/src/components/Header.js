import { Locate, MapPin, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="bg-white  flex flex-row justify-between border-b-[1px] p-5 items-center">
      <div className="flex flex-row gap-10 items-center font-medium">
        <p className="font-bold text-2xl">Mekla</p>
        <NavLink to={"/"} className={({ isActive }) => `text-[#C2381B]`}>
          <p className="hover:cursor-pointer">Home</p>
        </NavLink>
        <p className="hover:cursor-pointer">Packets</p>
        <p className="hover:cursor-pointer">My orders</p>
      </div>
      <div className="flex flex-row gap-2 items-center bg-[#FFF8F1] border p-3 px-5 text-sm rounded-3xl">
        <MapPin className="text-[#C2381B]" />
        <p className="hover:cursor-pointer">Deliver to: Add address</p>
      </div>
      <div className="flex flex-row gap-10 items-center">
        <div className="text-white flex hover:cursor-pointer flex-row gap-2 bg-black p-[10px] px-6 font-semibold rounded-3xl">
          <ShoppingCart />
          <p>Cart</p>
        </div>
        <p className="font-medium hover:cursor-pointer">Log in </p>
        <p className="bg-[#C2381B] hover:cursor-pointer text-base p-[10px] px-4 rounded-3xl text-white font-medium">
          Sign up
        </p>
      </div>
    </div>
  );
}

export default Header;
