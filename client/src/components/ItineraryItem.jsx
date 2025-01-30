import React from "react";
import "../App.css";

function ItineraryItem({ title, start_date, end_date, id, onDelete }) {
  const base_url = "http://127.0.0.1:5555/itineraries";

  function handleDelete() {
    fetch(`${base_url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        if (onDelete) {
          onDelete(id); 
        }
      })
      .catch((error) => console.error("Error deleting itinerary:", error));
  }

  return (
    <div className="itinerary-item">
      <h1>{title}</h1>
      <h2>{`Start Date: ${start_date}`}</h2>
      <h3>{`End Date: ${end_date}`}</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ItineraryItem;
