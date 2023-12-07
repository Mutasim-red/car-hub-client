import { useLoaderData, useNavigate } from "react-router-dom";

function UpdateProductForm(){
    const vehicle =useLoaderData();
    const navigate = useNavigate();
    function handleUpdateVehicle(event){
    event.preventDefault();
    const make = event.target.make.value;
    const model = event.target.model.value;
    const image = event.target.image.value;
    const rent = event.target.rent.value;
    const Description = event.target.Description.value;
    const updatedvehicle = {
      make: make,
      model: model,
      image: image,
      rent: rent,
      Description: Description,
    };
    //Now make a PUT request to the server from updating this vehicleobject
    console.log(updatedvehicle);
    fetch(`http://localhost:3000/update-by-id/${vehicle._id}`,{
    method:"PUT",
    Headers:{
        "Content-type": "application/json"
    },
    body: JSON.stringify(updatedvehicle)
})
.then(res=> res.json())
.then(data=> {
    if(data.modifiedCount==1){
        navigate(`/manage-products`)
    }
}) 
}
    return(
<form
         onSubmit={handleUpdateVehicle}
        className="my-10 flex flex-col gap-y-4"
      >
        <input
          type="text"
          placeholder="Car Company"
          defaultValue={vehicle?.make}
          name="make"
          className="input w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Car model"
          defaultValue={vehicle?.model}
          name="model"
          className="input w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Car image"
          defaultValue={vehicle?.image}
          name="image"
          className="input w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Car rent($ per hour)"
          name="rent"
          defaultValue={vehicle?.rent}
          className="input w-full input-bordered"
        />
        <textarea
          className="textarea textarea-bordered w-full"
          name="Description"
          defaultValue={vehicle?.Description}
          placeholder="Vehicle Description"
        ></textarea>
        <div className="flex justify-center">
          <input type="submit" className="btn btn-primary"></input>
        </div>
      </form>
    )
}
export default UpdateProductForm;