import React from "react";

const AddTshirt = () => {

    const handleSubmit = e =>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);


        fetch('http://localhost:3000/tshirts', {
          method: 'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              alert('new Tshirt added successfully')
            }
          })

    }

  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl mt-24">
      <div className="card-body">
        <h1 className="text-3xl mb-7 text-center font-bold">Add T-shirt here</h1>
        <form onSubmit={handleSubmit} className="fieldset">

          <label className="label">color</label>
          <input type="text" className="input" name="color" placeholder="color" />
          <label className="label">quantity</label>
          <input type="text" className="input" name="quantity" placeholder="quantity" />
          <label className="label">price</label>
          <input type="text" className="input" name="price" placeholder="price" />
          <label className="label">quality</label>
          <input type="text" className="input" name="quality" placeholder="quality" />
          <label className="label">photo</label>
          <input type="text" className="input" name="photo" placeholder="photo" />
          
          <button className="btn  btn-neutral mt-4">Add T-shirt</button>

        </form>
      </div>
    </div>
  );
};

export default AddTshirt;
