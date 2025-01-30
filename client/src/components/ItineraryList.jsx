import React, { useState } from "react";
import ItineraryItem from "./ItineraryItem"; 

function ItineraryList({ itineraries, setItineraries }) {
  const [itineraryData, setItineraryData] = useState({
    title: "",
    start_date: "",
    end_date: "",
  });

  
  function handleChange(e) {
    const { name, value } = e.target;
    setItineraryData({
      ...itineraryData,
      [name]: value,
    });
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    const newItinerary = { ...itineraryData, id: Date.now() }; 
    setItineraries([...itineraries, newItinerary]);
    setItineraryData({ title: "", start_date: "", end_date: "" }); 
  }

  
  function handleDelete(id) {
    setItineraries(itineraries.filter((itinerary) => itinerary.id !== id));
  }

  return (
    <div>
      <h2>Itineraries</h2>
      {itineraries.map((itinerary) => (
        <ItineraryItem
          key={itinerary.id}
          title={itinerary.title}
          start_date={itinerary.start_date}
          end_date={itinerary.end_date}
          id={itinerary.id}
          onDelete={handleDelete}
        />
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Itinerary Title"
          value={itineraryData.title}
          required
          onChange={handleChange}
        />
        <input
          type="date"
          name="start_date"
          value={itineraryData.start_date}
          required
          onChange={handleChange}
        />
        <input
          type="date"
          name="end_date"
          value={itineraryData.end_date}
          required
          onChange={handleChange}
        />
        <button type="submit">Add Itinerary</button>
      </form>
    </div>
  );
}

export default ItineraryList;

