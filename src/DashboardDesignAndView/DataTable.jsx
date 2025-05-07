
import { Card, Typography, Avatar, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const TABLE_HEAD = ["Title", "Price", "Image", "Actions"];

export function DataTable({ products }) {
  return (
    <Card className="h-full w-full overflow-auto">
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="h6" color="blue-gray" className="font-bold leading-none">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, title, price, image }) => (
            <tr key={id}>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {title}
                </Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  ${price}
                </Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <Avatar src={image} alt={title} size="sm" />
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex justify-center gap-2">
                  <Link to={`/admin/view/${id}`} className="w-20">
                    <Button size="sm" fullWidth className="bg-[#967bb6] hover:bg-[#8360cb] text-white">
                      View
                    </Button>
                  </Link>
                  <Button color="gray" size="sm" className="w-20">
                    Delete
                  </Button>
                  <Button size="sm" className="w-20 bg-[#D3D3FF] hover:bg-[#C3C3EF] text-gray-900">
                    Edit
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
