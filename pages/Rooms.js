import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RoomContext } from "@/context/RoomContext";
import Room from "@/components/Room";
import BookForm from "@/components/BookForm";
import { SpinnerDotted } from "spinners-react";

function parseQueryParameter(roomsParam) {
  if (!roomsParam) return null;

  try {
    return JSON.parse(roomsParam);
  } catch (error) {
    console.error("Error parsing query parameter:", error);
    return null;
  }
}

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);

  const router = useRouter();

  const { rooms: queryRooms } = router.query;
  const [filteredRooms, setFilteredRooms] = useState([]); // Initialize with an empty array

  useEffect(() => {
    // Parse the rooms from the query parameter
    const parsedRooms = parseQueryParameter(queryRooms);

    // If valid rooms are parsed, set them to the state
    if (parsedRooms) {
      setFilteredRooms(parsedRooms);
    }
  }, [queryRooms]);

  return (
    <section className=" py-24">
      {/* overlay & spinner */}
      {loading && (
        <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center">
          <SpinnerDotted color="white" />
        </div>
      )}
      <div className="mt-20 custom-max-width mx-auto">
        <BookForm />
      </div>
      <div className="container mx-auto lg:px-0">
        {/* grid */}
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {filteredRooms.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
