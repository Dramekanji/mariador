import React, { useContext, createContext, useState } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook
import { roomData } from "@/RoomData";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [adults, setAdults] = useState("1 Adulte");
  const [kids, setKids] = useState("0 Enfant");
  const [loading, setLoading] = useState(false);

  const router = useRouter(); // Initialize the router

  const handleClick = (e, id) => {
    e.preventDefault();
    setLoading(true);

    // Filter the rooms based on total persons
    const total = parseInt(adults) + parseInt(kids);
    const newRooms = roomData.filter((room) => total <= room.maxPerson);

    setTimeout(() => {
      // Set the filtered rooms in the query parameter and redirect to the "Rooms" page
      router.push({
        pathname: "/Rooms",
        query: { rooms: JSON.stringify(newRooms) },
      });
      setLoading(false);
    }, 3000);
  };
  // console.log("roomData in RoomProvider:", roomData);
  return (
    <RoomContext.Provider
      value={{
        adults,
        setAdults,
        kids,
        setKids,
        handleClick,
        roomData,
        loading,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
