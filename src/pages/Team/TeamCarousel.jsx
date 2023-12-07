import { useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function TeamCarousel() {
  const team = useLoaderData();
  console.log(team);
  return (
    <div>
      <Carousel autoPlay>
        {
            team?.map(singlePerson=>(
                <div key={singlePerson?._id} className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{singlePerson?.fullName} <br />{singlePerson?.position}</h2>
                  <p>{singlePerson?.message}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">{singlePerson?.email}</button>
                  </div>
                </div>
              </div> 
            ))
        }
        
      </Carousel>
    </div>
  );
}
export default TeamCarousel;
