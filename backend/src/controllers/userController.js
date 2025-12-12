import { bookings, trainings } from "../db.js";

const getBookingsById = (req, res) => {
  const userId = req.params.id;
  if (bookings[userId].length) {
    const bookingsForId = trainings.filter((training) =>
      bookings[userId].includes(training.id)
    );

    res.status(200).json(bookingsForId);
  } else {
    res.status(404).json({ message: "No Bookings Found" });
  }
};

export { getBookingsById };
