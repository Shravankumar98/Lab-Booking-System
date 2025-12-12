import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTraining, BookTraining, getMyBookings } from "../api";

const TrainingDetails = () => {
  const { id } = useParams();
  const [training, setTraining] = useState(null);
  const [bookings, setBookings] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      setLoading(true);
      try {
        const [trainingRes, bookingsRes] = await Promise.all([
          fetchTraining(id),
          getMyBookings(),
        ]);
        console.log(trainingRes);

        setTraining(trainingRes || null);
        if (bookingsRes?.length) {
          setBookings(bookingsRes.map((booking) => booking.id) || []);
        }
      } catch (err) {
        console.error("Error:", err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  const handleClick = async (id) => {
    try {
      setLoading(true);
      await BookTraining(id);

      setTraining((prev) => ({
        ...prev,
        booked: prev.booked + 1,
      }));

      setBookings((prev) => [...prev, id]);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const hasBooked = useMemo(
    () => bookings?.length && bookings.includes(training.id),
    [bookings, training]
  );

  if (loading) return <p>Loading training...</p>;
  if (!training) return <p>Training not found.</p>;

  return (
    <div className="main">
      <h1>{training.title}</h1>
      <hr />
      <div className="sub-header">
        <div className="stats">
          <span>Seats - </span>
          <span className="value">{training.seats}</span>
        </div>

        <div className="stats">
          <span>Booked - </span>
          <span className="value">{training.booked}</span>
        </div>

        {hasBooked ? (
          "You Have Booked This Training"
        ) : (
          <button onClick={() => handleClick(training.id)}>Book</button>
        )}
      </div>
    </div>
  );
};

export default TrainingDetails;
