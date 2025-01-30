import React, { useState } from "react";
import DestinationItem from "./DestinationItem"; 

function DestinationList({ destinations, setDestinations }) {
  const [destinationData, setDestinationData] = useState({
    name: "",
    location: "",
  });

  
  function handleChange(e) {
    const { name, value } = e.target;
    setDestinationData({
      ...destinationData,
      [name]: value,
    });
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    const newDestination = { ...destinationData, id: Date.now() }; 
    setDestinations([...destinations, newDestination]);
    setDestinationData({ name: "", location: "" }); 
  }

  
  function handleDelete(id) {
    setDestinations(destinations.filter((destination) => destination.id !== id));
  }

  return (
    <div>
      <h2>Destinations</h2>
      {destinations.map((destination) => (
        <DestinationItem
          key={destination.id}
          name={destination.name}
          location={destination.location}
          id={destination.id}
          onDelete={handleDelete}
        />
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Destination Name"
          value={destinationData.name}
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={destinationData.location}
          required
          onChange={handleChange}
        />
        <button type="submit">Add Destination</button>
      </form>
    </div>
  );
}

export default DestinationList;

