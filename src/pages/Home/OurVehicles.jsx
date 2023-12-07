import { useLoaderData } from "react-router-dom";
import SingleVehicleCard from "./SingleVehicleCard";

function OurVehicles() {
  //get all the vehicles
  const vehicles = useLoaderData();
  console.log(vehicles);

  return (
    <div className="my-10">
      {/* { our vehicles} */}
      <div className="text-center mb-8">
        <p className="font-bold">Vehicle Model</p>
        <h1 className="text-3xl font-bold">
          <span className="text-orange-500">Our</span> Vehicles
        </h1>
        <div>
          {/* cards of all available vehicles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {vehicles?.map((vehicle) => (
              <SingleVehicleCard
                key={vehicle._id}
                vehicle={vehicle}
              ></SingleVehicleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurVehicles;
