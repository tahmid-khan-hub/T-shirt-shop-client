import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Tshirts = () => {
  const initialTShirts = useLoaderData();
  const [tShirts, setTShirts] = useState(initialTShirts);

  const handleDelete = (id) => {
    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {


          fetch(`http://localhost:3000/tshirts/${id}`, {
            method: 'DELETE',
            
          })
            .then(res => res.json())
            .then(data => {
              if(data.deletedCount){


                const remainingTshirts = tShirts.filter(t => t._id !== id);
                setTShirts(remainingTshirts);

                swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                });
              }
            })

          // TODO: Add logic to delete item from backend/database here
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <>
      <h2 className="text-center text-2xl mt-5">
        Here , you can see our all T-shirts collection - {tShirts.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 ">
        {tShirts.map((clothes, index) => (
          <div
            key={index}
            className="card bg-base-100 w-11/12 md:w-[500px] shadow-sm border-1"
          >
            <figure>
              <img
                className="h-[300px] object-cover"
                src={clothes.photo}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{clothes.color}</h2>
              <p>price: {clothes.price}</p>
              <p>Quantity: {clothes.quantity}</p>
              <div className="card-actions justify-end">
                <Link to={`viewTshirt/${clothes._id}`}>
                  <button className="btn btn-primary">View</button>
                </Link>
                <Link to={`updateTshirt/${clothes._id}`}>
                  <button className="btn btn-primary">Edit</button>
                </Link>
                <button
                  onClick={() => handleDelete(clothes._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tshirts;
