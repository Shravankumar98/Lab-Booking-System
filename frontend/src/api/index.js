import axios from "axios";

const url = "http://localhost:3000/api/";
const TrainingsRoute = "trainings";
const userRoute = "users";
localStorage.setItem("userId", 101);

const fetchTrainings = async () => {
  try {
    const response = await axios.get(url + TrainingsRoute);
    const result = response.data;
    return result;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
const fetchTraining = async (id) => {
  try {
    const response = await axios.get(`${url}${TrainingsRoute}/${id}`);
    const result = response.data;
    return result;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

const getMyBookings = async () => {
  try {
    const response = await axios.get(
      `${url}${userRoute}/${localStorage.getItem("userId")}/bookings`
    );
    const result = response.data;
    return result;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

const BookTraining = async (id) => {
  try {
    const response = await axios.post(`${url}${TrainingsRoute}/${id}/book`, {
      userId: localStorage.getItem("userId"),
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export { fetchTrainings,fetchTraining, getMyBookings, BookTraining };
