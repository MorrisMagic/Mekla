import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [Show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-[#1E6B4F] flex flex-col justify-center items-center">
        <div className=" relative w-3/5">
          <h1 className="text-white mt-4 text-5xl mb-5 font-semibold text-start">
            Your first packet is three steps away.
          </h1>
        </div>
        <div className="flex flex-col text-white mt-9 text-lg justify-center items-start gap-8">
          <div className="flex flex-row gap-5 items-center justify-center">
            <div className="text-[#1E6B4F] flex  items-center justify-center shrink-0 border-white border-[1px] bg-white rounded-full w-10 h-10 ">
              <p className="font-bold">1</p>
            </div>
            <div>
              <p className="font-bold text-xl">Pick a packet</p>
              <p>Search by cuisine, diet or delivery time.</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center justify-center">
            <div className="text-[#1E6B4F] flex  items-center justify-center shrink-0 border-white border-[1px] bg-white rounded-full w-10 h-10 ">
              <p className="font-bold">2</p>
            </div>
            <div>
              <p className="font-bold text-xl">Customise and order</p>
              <p>Choose a size, add extras, leave a note.</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center justify-center">
            <div className="text-[#1E6B4F] flex  items-center justify-center shrink-0 border-white border-[1px] bg-white rounded-full w-10 h-10 ">
              <p className="font-bold">3</p>
            </div>
            <div>
              <p className="font-bold text-xl">Track it live</p>
              <p>Follow your courier on the map until the door.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF8F1] flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3 mb-5">
          <h1 className="text-black text-5xl font-bold">Create your account</h1>
          <p className="text-gray-500">It takes less than a minute.</p>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium">First name</label>
          <input
            className="w-96 border-[#8F8176] border-[1px] p-3 rounded-xl"
            type="email"
          />
          <label className="font-medium">Last name</label>
          <input
            className="w-96 border-[#8F8176] border-[1px] p-3 rounded-xl"
            type="email"
          />
          <label className="font-medium">Email</label>
          <input
            className="w-96 border-[#8F8176] border-[1px] p-3 rounded-xl"
            type="email"
            placeholder="you@example.com"
          />
          <label className="font-medium">Phone</label>
          <input
            className="w-96 border-[#8F8176] border-[1px] p-3 rounded-xl"
            type="email"
          />
          <div className="flex flex-row justify-between items-center">
            <label className="font-medium">Password</label>
            <p className="text-sm text-[#DA531B] underline">Forget password?</p>
          </div>
          <div className="relative w-96">
            <input
              className="w-full border-[#8F8176] border-[1px] p-3 pr-16 rounded-xl"
              type={Show ? "text" : "password"}
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
              I agree to the Terms of Service and Privacy Policy.
            </p>
          </div>
          <button className="w-full bg-[#C2381B] p-3 rounded-xl mt-5 text-white font-semibold">
            Create account
          </button>
          <hr className="bg-gray-400 mt-5 mb-3" />
          <p className="text-gray-600 text-center">
            Allready an account ?{" "}
            <span
              onClick={() => navigate("/login")}
              className="underline text-[#DA531B] hover:cursor-pointer"
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
