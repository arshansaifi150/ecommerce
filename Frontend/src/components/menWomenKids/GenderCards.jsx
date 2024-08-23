import React, { useState } from "react";
import { Button } from "../ui/button";

function GenderCards() {
  const Card = [
    {
      id: 1,
      name: "Male",
      description: "New Arrivals",
      style: {
        backgroundImage:
          "url('https://img.freepik.com/free-photo/young-man-sitting-small-stool-against-white-wall_231208-1168.jpg?t=st=1724156002~exp=1724159602~hmac=9e5933477bf19443da206d900db827a19e6428c5a88b9bcb1b7b637ccb79fa73&w=1060')",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      },
    },
    {
      id: 2,
      name: "Female",
      description: "Trending",
      style: {
        backgroundImage:
          "url('https://img.freepik.com/free-photo/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated_285396-476.jpg?t=st=1724155687~exp=1724159287~hmac=efdeed4b8087498720b2adcc9f2ded09a5f0de7da38b7cf3435d509e063b90af&w=826')",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      },
    },
    {
      id: 3,
      name: "Kid's",
      description: "Winter Collection",
      style: {
        backgroundImage:
          "url('https://img.freepik.com/free-photo/little-girl-with-winter-clothes-front-view_23-2148333059.jpg?t=st=1724158354~exp=1724161954~hmac=34b937814d91c18e12c6d221df9d184d05506252f5cf7fbdcf68de54e650332f&w=1060')",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
        
      },
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <div className="w-full mt-20 flex justify-center items-center">
        <div className="w-[80%] gap-2 xl:h-[20rem] flex justify-evenly flex-wrap">
          {Card?.map((card, index) => (
            <div
              key={card.id}
              style={card.style}
              className="h-fit w-[20rem] flex flex-col items-start justify-between border-2 border-gray-300 shadow-xl hover:bg-blend-overlay hover:bg-purple-400/70 
              hover:text-gray-800 text-slate-600 cursor-pointer relative overflow-hidden hover:scale-105 duration-300 ease-in-out"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mt-5 ml-5">
                <h2 className="text-2xl font-bold">{card.name}</h2>
                <p className="text-lg">{card.description}</p>
              </div>
              <div 
                className={` self-center  transition-transform duration-300 ease-in-out ${
                  hoveredCard === card.id ? 'translate-y-0 mb-5 ' : 'translate-y-full'
                }`}
              >
                <Button>
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GenderCards;