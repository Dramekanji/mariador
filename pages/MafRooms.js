import React, { useContext } from "react";
import { RoomContext } from "@/context/RoomContext";
import Room from "@/components/Room";
import BookForm from "@/components/BookForm";

const MafRooms = () => {
  const { roomData } = useContext(RoomContext);

  return (
    <section>
      {/* Banner */}
      <div className="bg-rooms bg-center bg-maf-rooms-banner bg-cover h-[560px] relative flex justify-center items-center">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* Title */}
        <h1 className="text-6xl z-10 font-primary text-center text-white">
          Nos Chambres
        </h1>
      </div>
      <div className="container mx-auto p-6">
        <BookForm className="mb-10" />
        {/* grid */}
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {roomData.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MafRooms;
