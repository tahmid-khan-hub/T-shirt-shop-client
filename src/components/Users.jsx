import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const userData = useLoaderData();
  console.log(userData);

  return (
    <div className="mt-12">
      {userData.map((user, index) => (
        <div key={index} className="overflow-x-auto border-1 border-gray-300 mb-2 rounded-xl">
          <table className="table">

            <tbody>
              {/* row  */}
              <tr>
                <td className="border-r-1 border-gray-300 w-[100px]">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                   
                  </div>
                </td>
                <td className="border-r-1 border-gray-300 text-center w-[300px]">
                 {user.name}
                  
                </td>
                <td className="border-r-1 border-gray-300 text-center w-[400px]">{user.email}</td>

                <td className="text-center">{user.lastSignInTime}</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Users;
