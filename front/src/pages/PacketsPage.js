import { MapPin, Star, TimerReset } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function PacketsPage() {
  const [Counter, setCounter] = useState(1);
  const [orders, setorder] = useState([
    {
      img: "/assets/burger.jpg",
      title: "Smash burger box",
      resturant: "Burger Foundry . Burgers",
      rate: "4.7",
      delivery: "free",
      price: "13",
    },
    {
      img: "/assets/burger.jpg",
      title: "Smash burger box",
      resturant: "Burger Foundry . Burgers",
      rate: "4.7",
      delivery: "free",
      price: "13",
    },
    {
      img: "/assets/burger.jpg",
      title: "Smash burger box",
      resturant: "Burger Foundry . Burgers",
      rate: "4.7",
      delivery: "free",
      price: "13",
    },
  ]);

  const slidePics = [
    {
      src: "b.jpg",
    },
    {
      src: "b.jpg",
    },
    {
      src: "b.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-2 h-screen p-20">
      <div>
        <img src="/assets/b.jpg" className="border rounded-2xl " width={600} />
        <div className="flex flex-row gap-2 mt-4 ">
          {slidePics.map((slide, index) => (
            <div key={index}>
              <img
                src={`/assets/${slide.src}`}
                className="border rounded-2xl"
                width={195}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mr-5">
        <div className="w-72 flex flex-row gap-3 items-center">
          <p className="font-medium bg-red-300 px-[20px] rounded-3xl text-red-950 text-xs p-[7px]">
            Bugers
          </p>
          <p className="font-medium bg-green-300 px-[20px] rounded-3xl text-green-950 text-xs p-[7px]">
            Free delivery
          </p>
        </div>
        <div className="mt-3">
          <h1 className="text-5xl font-medium">Smash Burger Box</h1>
          <p className="text-gray-500 pt-2">
            by{" "}
            <span className="text-black underline font-medium ">
              Burger Foundry
            </span>
          </p>
          <div className="flex flex-row gap-5 mt-3 text-gray-600">
            <div className="flex flex-row gap-2">
              <Star />
              <p>4.7 rating</p>
            </div>
            <div className="flex flex-row gap-2">
              <TimerReset /> 25 min
            </div>
            <div className="flex flex-row gap-2">
              <MapPin /> 2.4 km away
            </div>
          </div>
          <p className="text-gray-700 pt-5">
            Two smashed beef patties, melted cheddar, pickles and house sauce,
            packed hot with a portion of fries and a dipping sauce.
          </p>
          <div className="mt-5">
            <p className="font-medium">Add extras</p>
            <div className="mt-3">
              <div className="flex flex-row bg-white p-5 rounded-t-2xl justify-between border border-gray-200">
                <p className="flex gap-5">
                  <input type="checkbox" className="w-[20px]" />
                  Upgrade to loaded fries
                </p>
                <p className="font-medium">+$3.50</p>
              </div>
              <div className="flex flex-row bg-white p-5  justify-between border border-gray-200">
                <p className="flex gap-5">
                  <input type="checkbox" className="w-[20px]" />
                  Upgrade to loaded fries
                </p>
                <p className="font-medium">+$3.50</p>
              </div>
              <div className="flex flex-row bg-white p-5 rounded-b-2xl  justify-between border border-gray-200">
                <p className="flex gap-5">
                  <input type="checkbox" className="w-[20px]" />
                  Upgrade to loaded fries
                </p>
                <p className="font-medium">+$3.50</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="font-medium text-lg">
              Note for the kitchen{" "}
              <span className="text-gray-500 text-sm">(optional)</span>
            </p>
            <textarea
              className="mt-2 w-full border p-3 border-gray-400 rounded-xl"
              placeholder="No onions, extra napkins..."
            />
          </div>
          <div className="mt-5 bg-white flex flex-row border rounded-xl justify-between p-5">
            <div className="flex flex-row justify-between items-center border rounded-xl p-2 w-[100px]">
              <button
                className="w-[12px] font-medium"
                onClick={() =>
                  setCounter((prevCount) => {
                    if (prevCount <= 1) {
                      return 1;
                    } else {
                      return prevCount - 1;
                    }
                  })
                }
              >
                -
              </button>
              <p>{Counter}</p>
              <button
                className="w-[12px] font-medium"
                onClick={() => setCounter(Counter + 1)}
              >
                +
              </button>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total</p>
              <p className="font-medium text-xl">$12.90</p>
            </div>
            <div className="border-2 border-black font-medium text-base p-2 px-5 rounded-xl">
              <button>Add to chart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 bg-white border rounded-3xl h-[500px] w-[600px] p-9">
        <h1 className="font-medium text-2xl">What's inside</h1>
        <div className="p-5 flex flex-col text-[16px] gap-5 list-disc marker:text-orange-700">
          <li>Double smash burger with cheddar and pickles</li>
          <li>Skin-on fries, salted</li>
          <li>House sauce, 1 dipping pot</li>
          <li>Napkins and cutlery on request</li>
        </div>
        <p className="font-medium">Allergens</p>
        <div className="flex flex-row gap-3 mt-2 p-1">
          <p className="border p-1 px-4 rounded-3xl text-sm border-gray-500">
            Gluten
          </p>
          <p className="border p-1 px-4 rounded-3xl text-sm border-gray-500">
            Dairy
          </p>
          <p className="border p-1 px-4 rounded-3xl text-sm border-gray-500">
            Sesame
          </p>
          <p className="border p-1 px-4 rounded-3xl text-sm border-gray-500">
            Egg
          </p>
        </div>
      </div>
      <div className="mt-24 bg-white border rounded-3xl h-[500px] w-[600px] p-9">
        <h1 className="font-medium text-2xl">Ratings</h1>
        <div className="flex flex-row items-center  justify-between">
          <div className="mt-7">
            <p className="font-medium text-6xl">4.7</p>
            <p className="text-gray-500 text-sm mt-2">out of 5</p>
          </div>
          <div className="flex flex-col">
            <p className="flex felx-col font-medium text-sm items-center gap-2">
              5 <Star width={15} />{" "}
              <div className="w-[300px] h-2 bg-[#F0E6DC] rounded-full overflow-hidden">
                <div className="h-full bg-[#E0A21B] rounded-full w-[72%]"></div>
              </div>
              <p className="text-gray-500 pl-2">72%</p>
            </p>
            <pp className="flex felx-col font-medium text-sm items-center gap-2">
              4 <Star width={15} />{" "}
              <div className="w-[300px] h-2 bg-[#F0E6DC] rounded-full overflow-hidden">
                <div className="h-full bg-[#E0A21B] rounded-full w-[18%]"></div>
              </div>
              <p className="text-gray-500 pl-2">18%</p>
            </pp>
            <pp className="flex felx-col font-medium text-sm items-center gap-2">
              3 <Star width={15} />{" "}
              <div className="w-[300px] h-2 bg-[#F0E6DC] rounded-full overflow-hidden">
                <div className="h-full bg-[#E0A21B] rounded-full w-[6%]"></div>
              </div>
              <p className="text-gray-500 pl-2">6%</p>
            </pp>
            <pp className="flex felx-col font-medium text-sm items-center gap-2">
              2 <Star width={15} />{" "}
              <div className="w-[300px] h-2 bg-[#F0E6DC] rounded-full overflow-hidden">
                <div className="h-full bg-[#E0A21B] rounded-full w-[3%]"></div>
              </div>
              <p className="text-gray-500 pl-2">3%</p>
            </pp>
            <pp className="flex felx-col font-medium text-sm items-center gap-2">
              1 <Star width={15} />{" "}
              <div className="w-[300px] h-2 bg-[#F0E6DC] rounded-full overflow-hidden">
                <div className="h-full bg-[#E0A21B] rounded-full w-[1%]"></div>
              </div>
              <p className="text-gray-500 pl-2">1%</p>
            </pp>
          </div>
          <div></div>
        </div>
        <div>
          <div className="bg-[#FFF8F1] mt-7 p-5 rounded-2xl">
            <h1 className="font-medium mb-2"> Customer name</h1>
            <p className="text-gray-500">
              Review text appears here, up to three lines, with the date and the
              packet size ordered.
            </p>
          </div>
          <div className="bg-[#FFF8F1] mt-6 p-5 rounded-2xl">
            <h1 className="font-medium mb-2"> Customer name</h1>
            <p className="text-gray-500">
              Review text appears here, up to three lines, with the date and the
              packet size ordered.
            </p>
          </div>{" "}
        </div>
      </div>
      <div className="p-5 mt-10 w-[1300px] ">
        <h1 className="text-2xl font-bold">More from Burger Foundry</h1>
        <div className=" flex flex-row w-full flex-wrap p-2 mt-5 gap-6">
          {orders.map((order) => (
            <NavLink
              to={"/packets"}
              className="border bg-white w-[320px] hover:cursor-pointer h-[200px] rounded-2xl"
            >
              <div>
                <img
                  className="h-[140px] object-cover z-1 rounded-t-2xl"
                  src={order.img}
                  width={375}
                  alt="burger"
                />
              </div>
              <div className="p-3 flex flex-row justify-between ">
                <p className="font-bold">{order.title}</p>
                <p className="font-bold text-base">${order.price} TND</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PacketsPage;
