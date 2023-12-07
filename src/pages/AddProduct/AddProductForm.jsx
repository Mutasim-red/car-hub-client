import { useNavigate } from "react-router-dom";

function AddProductForm() {
  const navigate = useNavigate();
  function handlePostVehicle(event) {
    event.preventDefault();
    const make = event.target.make.value;
    const model = event.target.model.value;
    const image = event.target.image.value;
    const rent = event.target.rent.value;
    const Description = event.target.Description.value;
    const vehicle = {
      make: make,
      model: model,
      image: image,
      rent: rent,
      Description: Description,
    };
    console.log(vehicle);
    fetch("http://localhost:3000/add-a-vehicle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehicle),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate(`/`);
        }
      });
  }
  return (
    <div className="min-h-fit">
      <div className="text-center mt-10">
        <p className="text-orange-500 font-bold">Add Vehicles</p>
        <h2 className="text-2xl font-bold">
          Fill up the form to a new vehicle
        </h2>
      </div>
      <form
        onSubmit={handlePostVehicle}
        className="my-10 flex flex-col gap-y-4"
      >
        <input
          type="text"
          placeholder="Car Company"
          name="make"
          className="input w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Car model"
          name="model"
          className="input w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Car image"
          name="image"
          className="input w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Car rent($ per hour)"
          name="rent"
          className="input w-full input-bordered"
        />
        <textarea
          className="textarea textarea-bordered w-full"
          name="Description"
          placeholder="Vehicle Description"
        ></textarea>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default AddProductForm;
