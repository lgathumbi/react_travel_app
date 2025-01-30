import React, {useState, useEffect}from "react";
import ItineraryItem from "./ItineraryItem";
import DestinationItem from "./DestinationItem";

function Home () {
    const [itineraries, setItineraries] = useState([]);
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        // Fetch itineraries
        fetch("http://127.0.0.1:5555/itineraries")
          .then((res) => res.json())
          .then((data) => setItineraries(data))
          .catch((error) => console.error("Error fetching itineraries:", error));

          // Fetch destinations
          fetch("http://127.0.0.1:5555/destinations")
          .then((res) => res.json())
          .then((data) => setDestinations(data))
          .catch((error) => console.error("Error fetching destinations:", error));
      }, []);

      const handleDeleteItinerary = (id) => {
        setItineraries(itineraries.filter((itinerary) => itinerary.id !== id));
      };

      const handleDeleteDestination = (id) => {
        setDestinations(destinations.filter((destination) => destination.id !== id));
      };
      return (
        <div className="home">
          <h1>Travel Itinerary and Destinations</h1>
    
          <div className="itinerary-list">
            <h2>Itineraries</h2>
            {itineraries.length > 0 ? (
              itineraries.map((itinerary) => (
                <ItineraryItem
                  key={itinerary.id}
                  title={itinerary.title}
                  start_date={itinerary.start_date}
                  end_date={itinerary.end_date}
                  id={itinerary.id}
                  onDelete={handleDeleteItinerary}
                />
              ))
            ) : (
              <p>No itineraries available</p>
            )}
          </div>
    
          <div className="destination-list">
            <h2>Destinations</h2>
            {destinations.length > 0 ? (
              destinations.map((destination) => (
                <DestinationItem
                  key={destination.id}
                  name={destination.name}
                  location={destination.location}
                  id={destination.id}
                  onDelete={handleDeleteDestination}
                />
              ))
            ) : (
              <p>No destinations available</p>
            )}
          </div>
        </div>
      );
}
export default Home;