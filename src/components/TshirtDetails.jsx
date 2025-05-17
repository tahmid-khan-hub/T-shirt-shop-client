import React from "react";
import { useLoaderData, useParams } from "react-router";

const TshirtDetails = () => {
  const id = useParams();
  const data = useLoaderData();

  // console.log(id, data);

  const cloth = data.find((c) => c._id.toString() == id.id);
  // console.log(cloth);

  return (
    <div className="max-w-sm mx-auto mt-16">
      <div className="card bg-base-100 w-11/12  shadow-sm border-1">
        <figure>
          <img className="h-[300px] object-cover" src={cloth.photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cloth.color}</h2>
          <p>price: {cloth.price}</p>
          <p>Quantity: {cloth.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default TshirtDetails;
