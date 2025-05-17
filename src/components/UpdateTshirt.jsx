import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UpdateTshirt = () => {

    const id = useParams();
    const cloth = useLoaderData();

    const updateCloth = cloth.find(c => c._id.toString() == id.id);

    const {_id, color, photo, price, quantity, quality} = updateCloth;

    const handleUpdateTshirt = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const clothUpdate = Object.fromEntries(formData.entries());
        console.log(clothUpdate);

        fetch(`http://localhost:3000/tshirts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(clothUpdate)
        })
            .then(res => res.json())
            .then(data =>{
                if(data.modifiedCount) {
                    alert('Tshirt updated successfully');
                }
            })
    }


    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl mt-24">
      <div className="card-body">
        <h1 className="text-3xl mb-7 text-center font-bold">update T-shirt here</h1>
        <form onSubmit={handleUpdateTshirt} className="fieldset">

          <label className="label">color</label>
          <input type="text" className="input" defaultValue={color} name="color" placeholder="color" />
          <label className="label">quantity</label>
          <input type="text" className="input" defaultValue={quantity} name="quantity" placeholder="quantity" />
          <label className="label">price</label>
          <input type="text" className="input" defaultValue={price} name="price" placeholder="price" />
          <label className="label">quality</label>
          <input type="text" className="input" defaultValue={quality} name="quality" placeholder="quality" />
          <label className="label">photo</label>
          <input type="text" className="input" defaultValue={photo} name="photo" placeholder="photo" />
          
          <button className="btn  btn-neutral mt-4">update T-shirt</button>

        </form>
      </div>
    </div>
    );
};

export default UpdateTshirt;