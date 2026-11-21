import axios from "axios";
import { CarIcon, Search, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
function MainPage() {
  const [search, setSearch] = useState("");
  const [orders, setorder] = useState([]);

  const allmenu = async () => {
    const respone = await axios.get("http://localhost:8080/allmenu");
    setorder(respone.data);
  };
  useEffect(() => {
    allmenu();
  }, []);

  return (
    <div className="p-20 h-screen ">
      <div className="grid grid-cols-2 gap-7 items-center justify-center ">
        <div className="flex flex-col gap-5">
          <p className="font-medium text-[#1E6B54] text-lg uppercase ">
            Meal packets, delivered
          </p>
          <h1 className="font-medium text-6xl">What are you craving today?</h1>
          <h3 className="text-gray-700">
            Pick a packet from kitchens near you, pay once and follow your order
            live until it reaches your door.
          </h3>
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />

            <input
              className="w-full p-5 pl-12 border border-gray-500 rounded-2xl"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search burgers, ramen, falafel"
            />
            {search ? (
              <button
                onClick={() => setSearch("")}
                className="absolute right-36 top-1/2 -translate-y-1/2 text-blue-700 w-6 h-6"
              >
                x
              </button>
            ) : (
              ""
            )}

            <button className="absolute right-5 top-1/2 bg-[#C2381B] p-3 rounded-xl px-7 text-white -translate-y-1/2 text-base font-medium">
              Search
            </button>
          </div>
          <div className="flex flex-row justify-start gap-3 mt-1 items-center">
            <p className="text-gray-600">Popular:</p>
            <button
              onClick={() => setSearch("Burgers")}
              className="text-sm font-normal bg-white p-[8px] px-4 rounded-3xl border border-gray-300"
            >
              Burgers
            </button>
            <button
              onClick={() => setSearch("Ramen")}
              className="text-sm font-normal bg-white p-[8px] px-4 rounded-3xl border border-gray-300"
            >
              Ramen
            </button>
            <button
              onClick={() => setSearch("Falafel")}
              className="text-sm font-normal bg-white p-[8px] px-4 rounded-3xl border border-gray-300"
            >
              Falafel
            </button>
          </div>
        </div>
        <div className="bg-white flex flex-col p-10 gap-5 mt-16 ml-28 h-[250px] w-[450px] border rounded-3xl">
          <div className="flex flex-row justify-between items-center">
            <p className="bg-green-100 rounded-2xl p-[7.2px] font-medium text-green-900 text-xs w-[130px] text-center">
              Order in progress
            </p>
            <p className="text-sm text-gray-600">#OR-1</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-3xl">Arrving in 12 min</p>
            <p className="text-gray-600">Smash Burger Box . 1 item</p>
          </div>
          <button className="bg-black text-white p-3 font-bold rounded-2xl">
            Track Order
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-12 items-start">
        <div className="flex flex-row justify-start gap-3 items-center">
          <button className="text-sm bg-black text-white font-medium p-[10px] px-6 rounded-3xl border border-gray-300">
            All
          </button>
          <button className="text-sm font-normal bg-white p-[10px] px-9 rounded-3xl border border-gray-300">
            Ramen
          </button>
          <button className="text-sm font-normal bg-white p-[10px] px-9 rounded-3xl border border-gray-300">
            Falafel
          </button>
          <button className="text-sm font-normal bg-white p-[10px] px-9 rounded-3xl border border-gray-300">
            Pizza
          </button>
          <button className="text-sm font-normal bg-white p-[10px] px-9 rounded-3xl border border-gray-300">
            Desserts
          </button>
          <button className="text-sm font-normal bg-white p-[10px] px-9 rounded-3xl border border-gray-300">
            Asian
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between mt-10 bg-white border p-5 rounded-3xl border-gray-200 items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="font-medium">Filters</p>
            <button className="text-sm font-normal bg-white p-[10px] px-8 rounded-3xl border border-gray-300">
              Vegetarian
            </button>
            <button className="text-sm font-normal bg-white p-[10px] px-8 rounded-3xl border border-gray-300">
              Under 30 min
            </button>
            <button className="text-sm font-normal bg-white p-[10px] px-8 rounded-3xl border border-gray-300">
              Free delivery
            </button>
            <button className="text-sm font-normal bg-white p-[10px] px-8 rounded-3xl border border-gray-300">
              Rated 4.5+
            </button>
          </div>
          <div className="flex flex-row items-center gap-3">
            <p className="text-gray-500">Sort by</p>
            <select className="p-[10px] border rounded-xl px-5 bg-white text-sm">
              <option>Recommended</option>
              <option>Top rated</option>
              <option>Price: low to high</option>
              <option>Recommended</option>
            </select>
          </div>
        </div>
        <div className=" flex flex-row flex-wrap p-7 pt-1  gap-7 mt-14">
          {orders?.map((order, index) => (
            <div
              key={index}
              className="border bg-white w-[375px] h-[372px] rounded-2xl"
            >
              <div>
                <img
                  className="h-[200px] object-cover z-1 rounded-t-2xl"
                  src={`/assets/${order.Photo}`}
                  width={375}
                  alt="burger"
                />
              </div>
              <div className="p-4 flex flex-col gap-1">
                <p className="font-bold">{order.Title}</p>
                <p className="text-xs text-gray-500">
                  {order.Resturant} . {order.Type}
                </p>
                <div className="flex flex-row gap-1 items-center">
                  <Star width={17} />
                  <p className="text-base text-gray-700">{order.Rate}</p>
                  <div className="flex pl-4 flex-row gap-2">
                    <CarIcon width={18} color="gray" />
                    <p className="text-gray-600 text-sm">
                      {order.DeliveryType} delivery
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-row items-center justify-between">
                <p className="font-bold text-lg">${order.Price} TND</p>
                <button className="text-base font-medium text-white bg-red-700 p-[6px] px-4 rounded-2xl">
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
