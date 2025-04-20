import { Route, Routes } from "react-router-dom";
import ViewProduct from "./ViewProduct";
import DashBoard from "./DashBoard";
import DashNavbar from "./DashNavbar";

const AdminLayout = ({ products }) => {
  return (
    <div className="space-y-10">
      <DashNavbar />
      <Routes>
        <Route index element={<DashBoard products={products} />} />
        <Route path="view/:productId" element={<ViewProduct />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;