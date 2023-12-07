function AboutUs() {
  const style = {
    border: "none",
    height: "1px",
    color: "333",
    backgroundColor: "333",
  };
  return (
    <div className="hero min-h-max">
      <div className="hero-content flex-col lg:flex-row">
        <img 
          src="https://img.freepik.com/premium-photo/two-handsome-young-male-businessmen-suits-hold-laptop-folder-with-documents-discuss-working-project-have-video-call-against-background-urban-office-buildings_1429-8949.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699574400&semt=ais"
          className="max-w-sm rounded-lg shadow-2xl object-cover h-100 w-54"
        />
        <div>
          <p className="text-lg font-semibold">About Company</p>
          <h1 className="text-xl font-bold">
            You start the engine <br />
            and your journey <br />
            Begin{" "}
          </h1>

          <p className="py-6">
            At Car Hub Rental, we take pride in delivering top-notch services
            tailored to your travel requirements. With a commitment to
            excellence, we strive to make every journey with us a memorable and
            reliable experience.
          </p>
          <hr style={style} />
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col gap-y-2">
              <h1>Car Types</h1>
              <div className="flex">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDkxkg63dU70QQhVQWYPLMglwlY-vti6QhA&usqp=CAU"
                  alt=""
                  width="40"
                />
                <h1 className="text-3xl">15</h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1>Rental Outlets</h1>
              <div className="flex">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2389/2389215.png"
                  alt=""
                  width="40"
                />
                <h1 className="text-3xl">15</h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1>Repair Shop</h1>
              <div className="flex">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGfiTAgdqVJGQzSeC2Lpzu7SoydjxeaDNdlu6SbnS6AAhICE50WE_Gg49PKdWBc34dYI&usqp=CAU"
                  alt=""
                  width="40"
                />
                <h1 className="text-3xl">15</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
