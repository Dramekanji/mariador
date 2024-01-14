import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);

  return (
    <div className="relative flex items-center justify-end h-full">
      {/* icon */}
      <div className="absolute z-5 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <ReactDatePicker
        className="w-full h-full text-black"
        selected={startDate}
        placeholderText="Check In"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
