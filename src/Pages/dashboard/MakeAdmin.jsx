import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

export default function MakeAdmin() {
  const {
    isLoading,
    data: users,
    refetch,
  } = useQuery("users", () => {
    return fetch("http://localhost:5000/users").then((res) => res.json());
  });

  const makeAdmin = (user) => {
    const email = user;
    const currentUser = { role: "admin" };

    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    refetch();
  };

  const handleDelete = (id) => {
    const url = `http://localhost:5000/users/${id}`;
    const proceed = window.confirm("are you sure?");

    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Item deleted");
          }
        });
    }
    refetch();
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => makeAdmin(user.email)}
                      className="btn btn-sm bg-white text-red-500 font-bold text-md "
                    >
                      admin
                    </button>
                  )}
                </td>
                <td>
                  {user.email !== "admin" && (
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn bg-white text-red-500 font-bold text-2xl "
                    >
                      x
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
