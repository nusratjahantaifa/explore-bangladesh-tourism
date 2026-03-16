// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";

// const UpdateSpot = () => {
// const spots = useLoaderData();
//  const {
//     _id,
//     image,
//     tourists_spot_name,
//     country_Name,
//     location,
//     average_cost
//   } = spots;
//   const handleUpdateSpot = e => {
//     e.preventDefault();

//     const form = e.target;

//     const updatedSpot = {
//       image: form.image.value,
//       tourists_spot_name: form.tourists_spot_name.value,
//       country_Name: form.country_Name.value,
//       location: form.location.value,
//       short_description: form.short_description.value,
//       average_cost: form.average_cost.value,
//       seasonality: form.seasonality.value,
//       travel_time: form.travel_time.value,
//       totalVisitorsPerYear: form.totalVisitorsPerYear.value
//     };
   

//     // fetch("http://localhost:5000/spots", {
//     //method:"POST",
//     fetch(`http://localhost:5000/spots/${_id}`, {
//   method: "PUT",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(updatedSpot)
//     })
//       .then(res => res.json())
//       .then(data => {
//         // if (data.insertedId)
//         if (data.modifiedCount > 0)
//            {
//           Swal.fire({
//             title: "Success!",
//             text: "Tourist spot updated successfully",
//             icon: "success"
//           });
//           form.reset();
//         }
//       });
//   };

//   return (
  
//     <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg">
//     <div>
//                  <h2 className="text-3xl font-bold text-center mb-6">
//         Update Tourist Spot:{  tourists_spot_name}
//       </h2>
//     </div>

//       <form onSubmit={handleUpdateSpot} className="grid grid-cols-1 md:grid-cols-2 gap-4">

//         <input name='image' type="text" placeholder="Image URL"
//           className="input input-bordered w-full" required />

//         <input name="tourists_spot_name" type="text"
//           placeholder="Tourist Spot Name"
//           className="input input-bordered w-full" required />

//         <input name="country_Name" type="text"
//           placeholder="Country Name"
//           className="input input-bordered w-full" required />

//         <input name="location" type="text"
//           placeholder="Location"
//           className="input input-bordered w-full" required />

//         <input name="average_cost" type="text"
//           placeholder="Average Cost"
//           className="input input-bordered w-full" required />

//         <input name="seasonality" type="text"
//           placeholder="Seasonality (Summer/Winter)"
//           className="input input-bordered w-full" required />

//         <input name="travel_time" type="text"
//           placeholder="Travel Time (Example: 7 days)"
//           className="input input-bordered w-full" required />

//         <input name="totalVisitorsPerYear" type="text"
//           placeholder="Total Visitors Per Year"
//           className="input input-bordered w-full" required />

//         <textarea
//           name="short_description"
//           placeholder="Short Description"
//           className="textarea textarea-bordered md:col-span-2"
//           required
//         ></textarea>

//         <button className="btn btn-primary md:col-span-2">
//           Update Tourist Spot
//         </button>

//       </form>
//     </div>
//   );
// };

// export default UpdateSpot;
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {

const spots = useLoaderData();

const {
  _id,
  image,
  tourists_spot_name,
  country_Name,
  location,
  short_description,
  average_cost,
  seasonality,
  travel_time,
  totalVisitorsPerYear
} = spots;


const handleUpdateSpot = e => {
  e.preventDefault();

  const form = e.target;

  const updatedSpot = {
    image: form.image.value,
    tourists_spot_name: form.tourists_spot_name.value,
    country_Name: form.country_Name.value,
    location: form.location.value,
    short_description: form.short_description.value,
    average_cost: form.average_cost.value,
    seasonality: form.seasonality.value,
    travel_time: form.travel_time.value,
    totalVisitorsPerYear: form.totalVisitorsPerYear.value
  };

  fetch(`http://localhost:5000/spots/${spots._id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(updatedSpot)
  })
    .then(res => res.json())
    .then(data => {

      if (data.modifiedCount > 0) {

        Swal.fire({
          title: "Success!",
          text: "Tourist spot updated successfully",
          icon: "success"
        });

      }
    });
};

return (

<div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg">

<h2 className="text-3xl font-bold text-center mb-6">
Update Tourist Spot
</h2>

<form onSubmit={handleUpdateSpot} className="grid grid-cols-1 md:grid-cols-2 gap-4">

<input
name="image"
defaultValue={spots.image}
type="text"
className="input input-bordered w-full"
/>

<input
name="tourists_spot_name"
defaultValue={spots.tourists_spot_name}
type="text"
className="input input-bordered w-full"
/>

<input
name="country_Name"
defaultValue={spots.country_Name}
type="text"
className="input input-bordered w-full"
/>

<input
name="location"
defaultValue={spots.location}
type="text"
className="input input-bordered w-full"
/>

<input
name="average_cost"
defaultValue={spots.average_cost}
type="text"
className="input input-bordered w-full"
/>

<input
name="seasonality"
defaultValue={spots.seasonality}
type="text"
className="input input-bordered w-full"
/>

<input
name="travel_time"
defaultValue={spots.travel_time}
type="text"
className="input input-bordered w-full"
/>

<input
name="totalVisitorsPerYear"
defaultValue={spots.totalVisitorsPerYear}
type="text"
className="input input-bordered w-full"
/>

<textarea
name="short_description"
defaultValue={spots.short_description}
className="textarea textarea-bordered md:col-span-2"
></textarea>

<button className="btn btn-primary md:col-span-2">
Update Spot
</button>

</form>
</div>

);
};

export default UpdateSpot;