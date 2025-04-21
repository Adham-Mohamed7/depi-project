import { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ProductsOverview = () => { 
  const [productOverview, setProductOverview] = useState([]);

  const getProductOver = () => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProductOverview(data.products);  
      });
  };

  useEffect(() => {
    getProductOver();
  }, []);

  return (
    <div className=''>
      <h1 className="text-5xl font-bold m-10 text-neutral-900">PRODUCTS OVERVIEW</h1>
      <div className="grid md:grid-cols-4 gap-8 m-12  ">
        {productOverview.map(({title, price, image }, index) => (
          <Card className=" " key={index}>
            <CardHeader color="blue-gray" className="relative  h-full">
              <img src={image}/>
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="">
                {title}
              </Typography>
              <Typography>${price}</Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ProductsOverview
