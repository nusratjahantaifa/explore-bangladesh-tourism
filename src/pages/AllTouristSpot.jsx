            import { useEffect, useState } from "react";
import TouristSpotCard from "../components/TouristCard"

const AllTouristSpots = () => {

  const [spots, setSpots] = useState([]);

  useEffect(() => {

    fetch("https://localhost:5000/spots")
      .then(res => res.json())
      .then(data => setSpots(data));

  }, []);

  return (

    <div className="max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center my-6">
        All Tourist Spots
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {
          spots.map(spot => (
            <TouristSpotCard
              key={spot._id}
              spot={spot}
            />
          ))
        }

      </div>

    </div>

  );

};

export default AllTouristSpots;
