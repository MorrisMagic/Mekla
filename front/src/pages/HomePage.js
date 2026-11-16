import React, { useState } from "react";
import { Box, MapPin, RotateCcw, Soup } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
function HomePage() {
  const [Show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-[#FFF8F1] flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3 mb-7">
          <h1 className="text-black text-5xl font-bold">Welcome back</h1>
          <p className="text-gray-500">
            Log in to reorder favourites and track your delivery.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Email</label>
          <input
            className="w-96 border-[#8F8176] border-[1px] p-3 rounded-xl"
            type="email"
            placeholder="you@example.com"
          />
          <div className="flex flex-row justify-between items-center">
            <label className="font-medium">Password</label>
            <p className="text-sm text-[#DA531B] underline">Forget password?</p>
          </div>
          <div className="relative w-96">
            <input
              className="w-full border-[#8F8176] border-[1px] p-3 pr-16 rounded-xl"
              type={Show ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
              onClick={() => setShow(!Show)}
              className="absolute right-3 top-1/2 text-sm font-medium -translate-y-1/2"
            >
              Show
            </button>
          </div>
          <div className="flex gap-2 justify-start items-center pt-5">
            <input type="checkbox" className="w-5 h-5" />
            <p className="font-normal text-sm accent-red-900">
              Keep me logged in on this device
            </p>
          </div>
          <button className="w-full bg-[#C2381B] p-3 rounded-xl mt-5 text-white font-semibold">
            Log in
          </button>
          <hr className="bg-gray-400 mt-5 mb-3" />
          <p className="text-gray-600 text-center">
            New to Mekla?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="underline text-[#DA531B] hover:cursor-pointer"
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
      <div className="bg-[#C2381B] flex flex-col justify-center items-center">
        <Soup className="text-white w-44 h-44 mb-7" />
        <div className=" relative w-3/5">
          <h1 className="text-white mt-5 text-5xl mb-5 font-semibold text-start">
            Hot food, tracked to your door.
          </h1>
        </div>
        <div className="flex flex-col text-white mt-9 text-lg justify-center items-start gap-8">
          <div className="flex flex-row gap-5">
            <MapPin />
            <p>Live tracking from kitchen to doorstep</p>
          </div>
          <div className="flex flex-row gap-5">
            <Box />
            <p>Meal packets sized for one, two or the whole table</p>
          </div>
          <div className="flex flex-row gap-5">
            <RotateCcw />
            <p>Reorder past favourites in one tap</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
