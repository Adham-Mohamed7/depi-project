
import React from 'react';
import { Navbar, Typography, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const DashNavbar = () => {
  return (
    <Navbar
      variant="gradient"
      color="deep-purple"
      className="mx-auto max-w-screen-xl from-deep-purple-900 to-purple-800 px-4 py-3 rounded-none"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white w-full">
        <Typography
          as={Link}
          to="/"
          variant="h5"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-bold"
        >
          Admin
        </Typography>
        <div className="ml-auto flex gap-4">
          <Button color="white" size="sm" variant="text" className="hover:bg-white/10">
            <Link to="/">Home</Link>
          </Button>
        </div>
      </div>
    </Navbar>
  );
};

export default DashNavbar;
