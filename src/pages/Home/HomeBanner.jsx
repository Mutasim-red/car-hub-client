function HomeBanner(){
    return (
    <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col md:flex-row-reverse">
    <img src="https://img.freepik.com/premium-photo/car-isolated-white-background-bmw-1-series-m-coupe-white-car-blank-clean-white-white-black_655090-605759.jpg" className="md:w-1/2" />
    <div className="md:w-1/2">
        <p className="text-sm font-bold">Plan your trip now</p>
      <h1 className="text-5xl font-semibold">Save <span className="text-orange-500">Big</span> With Our Car Rental</h1>
      <p className="py-6">Welcome to Car Hub Rental - your go-to destination for easy and efficient vehicle rentals online. Explore a fleet of quality cars, streamlined booking, and personalized service for a smooth journey.</p>
      <button className="btn btn-warning">Book Now</button>
    </div>
  </div>
</div>
    )
}
export default HomeBanner