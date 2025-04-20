
import { DataTable } from "./DataTable";
import { Button } from "@material-tailwind/react";

const DashBoard = ({ products }) => {
  return (
    <div className="space-y-8 flex flex-col justify-center items-center px-[2em] py-8">
      <h1 className="text-3xl font-extrabold text-gray-800">DashBoard</h1>
      <Button
        className="mb-6 bg-[#9370db] hover:bg-[#8360cb] text-white"
        size="lg"
      >
        Add New Product
      </Button>
      <DataTable products={products} />
    </div>
  );
};

export default DashBoard;