const trainings = [
  { id: 1, title: "AWS", seats: 2, booked: 1 },
  { id: 2, title: "Full Stack", seats: 5, booked: 2 },
  { id: 3, title: "Testing", seats: 3, booked: 1 },
];

const bookings = {
  101: [1, 2],
  102: [2, 3],
  // userId: [trainingIds]
};

export { trainings, bookings };
