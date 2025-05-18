import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {

    const {newUser} = use(AuthContext);

  const handleNewUser = e =>{
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(
      formData.entries()
    );

    newUser(email, password)
        .then(res =>{
            console.log(res.user);

            const userProfile ={
                email,
                ...rest,
                creationTime: res.user?.metadata?.creationTime,
                lastSignInTime: res.user?.metadata?.lastSignInTime,
            }

            fetch('http://localhost:3000/users' ,{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(userProfile)
            })
                .then(res => res.json())
                .then(data =>{
                    if(data.insertedId){
                        alert('new user created');
                    }
                })

        })
        .catch(err =>{
            console.log(err);
        })


  }

  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl mt-24">
      <div className="card-body">
        <h1 className="text-3xl mb-7 text-center font-bold">
          Register
        </h1>
        <form onSubmit={handleNewUser} className="fieldset">
          <label className="label">name</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="name"
          />
          <label className="label">email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="email"
          />
          <label className="label">password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="password"
          />
          <label className="label">photo</label>
          <input
            type="text"
            className="input"
            name="photo"
            placeholder="photo"
          />

          <button className="btn  btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
