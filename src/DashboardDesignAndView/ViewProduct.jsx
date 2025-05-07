import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Spinner,
  Alert
} from "@material-tailwind/react";

const ViewProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProductDetails = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/products/${productId}`);
      if (!data) throw new Error('Product not found');
      setProduct(data);
    } catch (err) {
      setError(err.message || 'Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [productId]);

  if (loading) return <Spinner className="h-12 w-12 mx-auto" />;
  if (error) return <Alert color="red">{error}</Alert>;

  return (
    <div className="flex justify-center p-8">
      <Card className="w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300";
            }}
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {product.title}
          </Typography>
          <Typography className="text-blue-600 font-bold text-lg">
            ${product.price}
          </Typography>
          <Typography className="mt-3">
            {product.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button 
            style={{ backgroundColor: '#9370db' }}
            onClick={() => navigate(-1)} 
            fullWidth
            className="hover:bg-[#8360cb] text-white"
          >
            Back to Dashboard
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ViewProduct;
