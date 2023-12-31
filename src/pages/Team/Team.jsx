import Navbar from "../../components/Shared/Navbar";
import TeamCarousel from "./Teamcarousel";

function Team() {
  return (
    <div>
      <div className="md:max-w-6xl mx-auto">
        <Navbar></Navbar>
        <div className="text-center mt-10">
          <p className="text-orange-500 font-bold">Meet Our Team</p>
          <h2 className="text-2xl font-bold">Read what our team says</h2>
        </div>
        <TeamCarousel></TeamCarousel>
      </div>
    </div>
  );
}
export default Team;
