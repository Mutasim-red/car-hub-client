import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import ManageProductsTable from "./ManageProductTable";

function ManageProducts() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        {/* Manage vehicle*/}
        <div className="text-center mt-10">
          <p className="text-orange-500 font-bold">Manage Vehicles</p>
          <h2 className="text-2xl font-bold">
            You can update or delete any vehicle here
          </h2>
        </div>
        <ManageProductsTable></ManageProductsTable>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ManageProducts;
