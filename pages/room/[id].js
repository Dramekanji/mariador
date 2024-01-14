import React, { useState, useEffect } from "react";
import { roomData } from "@/RoomData";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import CheckIn from "@/components/CheckIn";
import CheckOut from "@/components/CheckOut";
import AdultsDropdown from "@/components/AdultsDropdown";
import KidsDropdown from "@/components/KidsDropdown";
import { SpinnerDotted } from "spinners-react";

const RoomDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading with a setTimeout
    const loadingTimeout = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 2000); // Adjust the delay time as needed

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

  const room = roomData.find((room) => room.id === Number(id));

  // Check if the room is found before accessing its properties
  const name = room ? room.name : "";
  const description = room ? room.description : "Description Not Found";
  const imageLg = room ? room.imageLg : "Image not found";
  const facilities = room ? room.facilities : [];
  const price = room ? room.price : "Price Not Available";

  return (
    <section>
      {/* overlay & spinner */}
      {loading && (
        <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center">
          <SpinnerDotted color="white" />
        </div>
      )}
      {/* banner */}
      <div className="bg-center bg-room bg-cover h-[560px] relative flex justify-center items-center">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* title */}
        <h1 className="text-6xl z-10 font-primary text-center">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full lg:w-[60%] px-6 bg-yellow-300">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            {imageLg && (
              <Image
                src={imageLg.src}
                alt={`${name} Image`}
                width={imageLg.width}
                height={imageLg.height}
              />
            )}
            {facilities.length > 0 && (
              <div className="mt-12">
                <h3 className="h3 mb-3">Room Facilities</h3>
                <p className="mb-12">
                  {/* eslint-disable react/no-unescaped-entities */}
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  placeat eos sed voluptas unde veniam eligendi a. Quaerat
                  molestiae hic omnis temporibus quos consequuntur nam
                  voluptatum ea accusamus, corrupti nostrum eum placeat
                  quibusdam quis beatae quae labore earum architecto aliquid
                  debitis."
                  {/* eslint-enable react/no-unescaped-entities */}
                </p>
                {/* grid */}
                <div className="grid grid-cols-3 gap-3 mb-12">
                  {facilities.map((item, index) => {
                    const { name, icon } = item;
                    return (
                      <div
                        className="flex items-center gap-x-3 flex-1"
                        key={index}
                      >
                        <div className="text-3xl text-accent">{icon}</div>
                        <div className="text-base text-accent">{name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          {/* right */}
          <div className="w-full h-full lg:w-[40%]">
            {/* reservation */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3>Your Reservation</h3>
                <div className="h-[60px]">
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
                <button className="btn btn-lg btn-primary w-full">
                  Book Now for ${price}
                </button>
              </div>
            </div>
            {/* rules */}
            <div>
              <h3 className="h3 ml-2">Maf Village rules</h3>
              <p className="mb-6 ml-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                placeat eos sed voluptas unde veniam eligendi a.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-out: 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
