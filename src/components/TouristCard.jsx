// import { data } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TouristCard = ({ spot, spots, setSpots }) => {

  if (!spot) {
    return <p>Loading...</p>;
  }

  const {
    _id,
    image,
    tourists_spot_name,
    location,
    average_cost
  } = spot;
const handleDelete = _id =>{
console.log(_id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   
    // console.log('delete confirmed')
fetch(`https://explore-bangladesh-tourism.onrender.com/spots/${_id}`,
    {
        method: 'DELETE'
    }
)
.then(res => res.json ())
.then(data => {
    console.log(data);
    if (data.deletedCount > 0){
 Swal.fire({
      title: "Deleted!",
      text: "TouristCard deleted.",
      icon: "success"
    });
    const remaining = spots.filter(spot => spot._id !== _id);
    setSpots(remaining);
    }
})
  }
});

}

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={tourists_spot_name} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{tourists_spot_name}</h2>
        <p>{location}</p>
        <p>Cost: {average_cost}</p>
      </div>
       <div className="card-actions justify-end">

        <Link to={`/updateSpot/${_id}`}>
         <button className="btn btn-primary">
              Update Spot
           </button>
          </Link>
                <Link to={`/spotDetails/${_id}`}>
          <button className="btn btn-primary">
            View Details
          </button>
       </Link>

        </div>
      <div className="justify-center">
        <button onClick={() => handleDelete(_id)}
         className="btn bg-orange-500">Delete card</button>
      </div>
    </div>
  );
};

export default TouristCard;


// import { Link } from "react-router-dom";

// const TouristCard = ({ spot }) => {
//   if (!spot) {
//     return <p>Loading...</p>;
//   }
//   const {
//     _id,
//     image,
//     tourists_spot_name,
//     location,
//     average_cost,
//     seasonality,
//     travel_time
//   } = spot;

//   return (

//     <div className="card bg-base-100 shadow-xl">

//       <figure>
//         <img
//           src={image}
//           alt={tourists_spot_name}
//           className="h-48 w-full object-cover"
//         />
//       </figure>

//       <div className="card-body">

//         <h2 className="card-title">
//           {tourists_spot_name}
//         </h2>

//         <p><strong>Location:</strong> {location}</p>

//         <p><strong>Cost:</strong> {average_cost}</p>

//         <p><strong>Season:</strong> {seasonality}</p>

//         <p><strong>Travel Time:</strong> {travel_time}</p>

//         <div className="card-actions justify-end">

//           <Link to={`/spotDetails/${_id}`}>
//             <button className="btn btn-primary">
//               View Details
//             </button>
//           </Link>

//         </div>

//       </div>

//     </div>

//   );

// };

// export default TouristCard;
