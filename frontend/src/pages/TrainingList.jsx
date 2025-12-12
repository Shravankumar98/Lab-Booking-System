import React, { useEffect, useState } from "react";
import { fetchTrainings } from "../api";
import Card from "../components/Card";
import "./styles.css";

const TrainingList = () => {
  const [trainingList, setTrainingsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrainingList = async () => {
      try {
        const result = await fetchTrainings();

        if (!result || result.length === 0) {
          setTrainingsList([]);
        } else {
          setTrainingsList(result);
        }
      } catch (err) {
        console.error("Error: ", err);

        setError("Failed to load trainings.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrainingList();
  }, []);

  return (
    <div className="main">
      <h1>Trainings</h1>

      <div className="training-container">
        {loading ? (
          <p>⏳ Loading trainings...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : trainingList.length === 0 ? (
          <p>No trainings available.</p>
        ) : (
          trainingList.map((training) => (
            <Card
              key={training.id}
              id={training.id}
              title={training.title}
              seats={training.seats}
              booked={training.booked}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TrainingList;
