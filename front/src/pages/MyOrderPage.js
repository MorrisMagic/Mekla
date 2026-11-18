import { MapPin, MessageCircle, PhoneCall } from "lucide-react";
import React from "react";

function MyOrderPage() {
  return (
    <div className="grid grid-cols-2 h-screen p-20">
      <div>
        <h1 className="font-bold text-3xl">Order #OR-2041</h1>
        <div className="border bg-white p-7 rounded-3xl flex  flex-col gap-5 mt-9">
          <p className="bg-green-100 text-green-900 w-[100px] text-center p-[4px] font-medium rounded-3xl text-sm px-1">
            Confirmed
          </p>
          <p className="font-semibold text-3xl">Order confirmed</p>
          <p className="text-gray-500">
            Estimated arrival 8:16 PM. The kitchen has your packet.
          </p>
        </div>
        <div className="border bg-white p-7  rounded-3xl flex mt-5  flex-col gap-2 ">
          <p className="font-semibold text-xl">Your courier</p>
          <div className="flex flex-row gap-5 p-2 items-center">
            <div className="bg-red-300 rounded-full w-[50px] p-[12px] text-center">
              M
            </div>

            <div className="flex flex-col">
              <p className="font-semibold">Courier name</p>
              <p className="text-gray-500 text-sm">Scooter · Plate number</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-2 justify-start items-center">
            <div className="flex flex-row hover:cursor-pointer gap-3 border-2 p-3 px-[92px] border-black rounded-2xl">
              <PhoneCall />
              <button>Call</button>
            </div>
            <div className="flex flex-row hover:cursor-pointer gap-3 border-2 p-3 px-[80px] border-black rounded-2xl">
              <MessageCircle />
              <button>Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-20">
        <div className="border bg-white p-7 w-[500px] rounded-3xl flex  flex-col gap-5 ">
          <p className="font-semibold text-xl">Your courier</p>
          <p>
            A courier is assigned as soon as your packet is ready for pickup.
          </p>
        </div>
        <div className="border bg-white p-7 w-[500px] rounded-3xl flex mt-5  flex-col gap-5 ">
          <p className="font-semibold text-xl">Delivery address</p>
          <div>
            <div className="flex flex-row gap-2">
              <MapPin color="green" />
              <p className="font-semibold">Home</p>
            </div>
            <p className="text-gray-500 pl-8">
              {" "}
              Street address, floor and door code appear here
            </p>
          </div>
        </div>
        <div className="border bg-white p-7 w-[500px] rounded-3xl flex mt-5  flex-col gap-5 ">
          <p className="font-semibold text-xl">Order summary</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center text-sm">
              <p>1 × Smash Burger Box, Duo</p>
              <p>$22.90</p>
            </div>
            <div className="flex flex-row justify-between items-center text-sm">
              <p>Loaded fries upgrade</p>
              <p>$3.50</p>
            </div>
            <div className="flex flex-row justify-between items-center text-sm text-gray-500">
              <p>Delivery</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between font-medium items-center">
              <p>Total paid</p>
              <p className="text-2xl">$26.40</p>
            </div>
          </div>
        </div>
        <div className="border bg-[#1E1815] p-7 w-[500px] rounded-3xl flex mt-5  flex-col gap-2 ">
          <p className="text-white font-semibold text-xl">
            Something not right?
          </p>
          <p className="text-gray-300">
            Missing item, late order or a question for the kitchen.
          </p>
          <button className="bg-white p-3 mt-1 rounded-2xl font-semibold">
            Get help with this order
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyOrderPage;
