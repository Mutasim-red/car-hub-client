import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import PostTeamForm from "./PostTeamForm";

function PostTeam() {
  return (
    <div>
      <div className="md:max-w-fit mx-auto">
        <Navbar></Navbar>
        <div className="text-center mt-10">
          <p className="text-orange-500 font-bold">Add Teammate</p>
          <h2 className="text-2xl font-bold">
            Fill up the form to a new member
          </h2>
        </div>
        <PostTeamForm></PostTeamForm>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default PostTeam;
