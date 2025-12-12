import React, { useEffect, useState } from "react";
import { getMyBookings } from "../api";
import Card from "../components/Card";
import "./styles.css";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    const fetchMyBookings = async () => {
      try {
        const result = await getMyBookings();

        if (!result || result.length === 0) {
          console.log("No Bookings found");
          return;
        }
        console.log(result);
        
        setMyBookings(result);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchMyBookings();
  }, []);
  return (
    <div className="main">
      <h1>Bookings</h1>
      <div className="myBookings-container">
        {myBookings.length === 0
          ? "...Loading Bookings"
          : myBookings.map((myBookings) => (
              <Card
                key={myBookings.id}
                id={myBookings.id}
                title={myBookings.title}
                seats={myBookings.seats}
                booked={myBookings.booked}
                handleOnclick={false}
              />
            ))}
      </div>
    </div>
  );
};

export default MyBookings;
