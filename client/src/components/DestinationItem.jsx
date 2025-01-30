import React from "react";
import "../App.css";

function DestinationItem({ name, location, id, onDelete }) {
  const base_url = "http://127.0.0.1:5555/destination";

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
      .catch((error) => console.error("Error deleting destination:", error));
  }

  return (
    <div className="destination-item">
      <h1>{name}</h1>
      <h2>{`Location: ${location}`}</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DestinationItem;
