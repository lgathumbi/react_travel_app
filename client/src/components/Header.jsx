import React from 'react'
import { Link } from 'react-router-dom' 

function Header () {
    return (
        <Header>
            <nav>
                <Link to ="/">Home</Link>
                <Link to = "/DestinationList">Destinations</Link>
                <Link to = "/ItineraryList">Itineraries</Link>
            </nav>
        </Header>
    )
}
export default Header;