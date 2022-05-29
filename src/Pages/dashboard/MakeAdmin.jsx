import React from "react";
import { toast } from "react-toastify";
import { UseUserData } from "../../hooks/UseUserData";

export default function MakeAdmin() {
  const [users, setUsers] = UseUserData();

  console.log(users);

  const makeAdmin = () => {};

  const handleDelete = (id) => {
    const url = `https://gentle-waters-15419.herokuapp.com/users/${id}`;
    const proceed = window.confirm("are you sure?");

    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
            toast("Item deleted");
          }
        });
    }
  };
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>{user.email}</td>
                  <td>
                    {user.role !== "admin" && (
                      <button
                        onClick={() => makeAdmin(user._id)}
                        className="btn bg-white text-red-500 font-bold text-2xl "
                      >
                        admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn bg-white text-red-500 font-bold text-2xl "
                    >
                      x
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
