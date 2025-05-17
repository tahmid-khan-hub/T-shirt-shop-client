import React from "react";
import { Link, useLoaderData } from "react-router";

const Tshirts = () => {
  const tShirts = useLoaderData();
  // console.log(tShirts._id);

  const handleDelete = () =>{

  }

  return (
    <>
      <h2 className="text-center text-2xl mt-5">
        Here , you can see our all T-shirts collection - {tShirts.length}
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 ">
          {tShirts.map((clothes, index) => (
            <div key={index} className="card bg-base-100 w-11/12 md:w-[500px] shadow-sm border-1">
              <figure>
                <img
                  className="h-[300px] object-cover"
                  src={clothes.photo}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{clothes.color}</h2>
                <p>
                  price: {clothes.price}
                </p>
                <p>Quantity: {clothes.quantity}</p>
                <div className="card-actions justify-end">
                  <Link to={`viewTshirt/${clothes._id}`}><button className="btn btn-primary">View</button></Link>
                  <button className="btn btn-primary">Edit</button>
                  <button onClick={handleDelete} className="btn btn-primary">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
};

export default Tshirts;
