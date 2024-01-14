import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    <div className="shadow-2xl bg-white min-h-[500px] group">
      {/* img */}
      <div className="overflow-hidden">
        <Image
          className="group-hover:scale-110 transition-all duration-300 w-full"
          src={image} // Make sure 'image' is the correct path to your image
          alt={name} // Provide alt text for accessibility
          width={500} // Specify the width of the image
          height={300} // Specify the height of the image
        />
      </div>
      {/* details */}
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 text-black flex justify-center items-center uppercase font-medium tracking-[1px] text-base">
        <div className="flex justify-between w-[80%]">
          {/* size */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div>size</div>
              <div>{size}m2</div>
            </div>
          </div>
          {/* room capacity */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsPeople className="text-[18px]" />
            </div>
            <div className="flex gap-x-1">
              <div>Max People</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
      {/* name & description */}
      <div className="text-center text-black">
        <Link href={`/room/${id}`}>
          <h3 className="h3 text-3xl">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>
      {/* button */}
      <Link
        className="text-black btn btn-secondary btn-sm max-w-[240px] mx-auto"
        href={`/room/${id}`}
        onClick={(e) => handleClick(e, id)}
      >
        Book now from ${price}
      </Link>
    </div>
  );
};

export default Room;
