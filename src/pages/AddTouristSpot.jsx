
// import { useState } from "react";
import Swal from "sweetalert2";

const AddTouristSpot = () => {

  const handleAddTouristSpot = e => {
    e.preventDefault();

    const form = e.target;

    const newSpot = {
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

    fetch("https://explore-bangladesh-tourism.onrender.com/addTouristSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newSpot)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourist spot added successfully",
            icon: "success"
          });
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">
        Add Tourist Spot
      </h2>

      <form onSubmit={handleAddTouristSpot} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input name="image" type="text" placeholder="Image URL"
          className="input input-bordered w-full" required />

        <input name="tourists_spot_name" type="text"
          placeholder="Tourist Spot Name"
          className="input input-bordered w-full" required />

        <input name="country_Name" type="text"
          placeholder="Country Name"
          className="input input-bordered w-full" required />

        <input name="location" type="text"
          placeholder="Location"
          className="input input-bordered w-full" required />

        <input name="average_cost" type="text"
          placeholder="Average Cost"
          className="input input-bordered w-full" required />

        <input name="seasonality" type="text"
          placeholder="Seasonality (Summer/Winter)"
          className="input input-bordered w-full" required />

        <input name="travel_time" type="text"
          placeholder="Travel Time (Example: 7 days)"
          className="input input-bordered w-full" required />

        <input name="totalVisitorsPerYear" type="text"
          placeholder="Total Visitors Per Year"
          className="input input-bordered w-full" required />

        <textarea
          name="short_description"
          placeholder="Short Description"
          className="textarea textarea-bordered md:col-span-2"
          required
        ></textarea>

        <button className="btn btn-primary md:col-span-2">
          Add Tourist Spot
        </button>

      </form>
    </div>
  );
};

export default AddTouristSpot;