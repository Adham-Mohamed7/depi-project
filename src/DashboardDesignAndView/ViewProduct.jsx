import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./DataTable";
import { Spinner, Alert } from "@material-tailwind/react";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://run.mocky.io/v3/695c748c-8be5-4603-9f05-5bcd465b6011"
      );

      if (data && Array.isArray(data.products)) {
        setProducts(data.products);
      } else {
        console.error("API response format is incorrect:", data);
        setError("Products data isn't correct");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message || "Error in Loading Data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Spinner className="h-12 w-12 mx-auto mt-10" />;
  if (error)
    return (
      <Alert color="red" className="mt-4">
        {error}
      </Alert>
    );

  console.log("Products data:", products);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Products menu</h1>
      {products.length > 0 ? (
        <DataTable products={products} />
      ) : (
        <Alert color="blue">No Product To Show</Alert>
      )}
    </div>
  );
};

export default ViewProduct;