import axios from "axios";
import { Locate, MapPin, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header({ user }) {
  const navigation = useNavigate();
  console.log(user.user);
  const logout = async () => {
    await axios
      .get("http://localhost:8080/logout")
      .then(() => window.location.reload());
  };
  return (
    <div className="bg-white  flex flex-row justify-between border-b-[1px] p-5 items-center">
      <div className="flex flex-row gap-10 items-center font-medium">
        <p className="font-bold text-2xl">Mekla</p>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `hover:cursor-pointer ${isActive ? `text-[#C2381B]` : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/packets"}
          className={({ isActive }) =>
            `hover:cursor-pointer ${isActive ? `text-[#C2381B]` : ""}`
          }
        >
          Packets
        </NavLink>
        <NavLink
          to={"/myorder"}
          className={({ isActive }) =>
            `hover:cursor-pointer ${isActive ? `text-[#C2381B]` : ""}`
          }
        >
          <p className="hover:cursor-pointer">My orders</p>
        </NavLink>
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
        {user ? (
          <>
            <p
              onClick={() => logout()}
              className="font-medium hover:cursor-pointer"
            >
              Log out{" "}
            </p>
          </>
        ) : (
          <>
            <p
              onClick={() => navigation("/login")}
              className="font-medium hover:cursor-pointer"
            >
              Log in{" "}
            </p>
            <p
              onClick={() => navigation("/signup")}
              className="bg-[#C2381B] hover:cursor-pointer text-base p-[10px] px-4 rounded-3xl text-white font-medium"
            >
              Sign up
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
