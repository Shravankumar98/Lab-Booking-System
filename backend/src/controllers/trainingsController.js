import { trainings, bookings } from "../db.js";

const getTrainings = (req, res) => {
  res.json(trainings);
};

const fetchTraining = (req, res) => {
  const trainingId = parseInt(req.params.id);
  const training = trainings.find((t) => t.id === trainingId);

  if (!training) {
    return res.status(404).json({ message: "Training Not Found" });
  }

  res.status(200).json(training);
};

const BookTraining = (req, res) => {
  const trainingId = parseInt(req.params.id);
  const { userId } = req.body;

  const training = trainings.find((t) => t.id === trainingId);
  if (!training) {
    return res.status(404).json({ message: "Training Not Found" });
  }

  if (!bookings[userId]) {
    bookings[userId] = [];
  }

  if (bookings[userId].includes(trainingId)) {
    return res
      .status(400)
      .json({ message: "Already Booked, Try Refreshing the Page." });
  }

  if (training.booked >= training.seats) {
    return res.status(400).json({ message: "No Seats Available" });
  }

  bookings[userId].push(trainingId);

  training.booked += 1;

  return res
    .status(201)
    .json({ message: "Booking Successful", training, bookings });
};

export { getTrainings, fetchTraining, BookTraining };
