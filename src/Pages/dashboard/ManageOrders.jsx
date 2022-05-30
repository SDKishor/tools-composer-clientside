import React from "react";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ManageOrders() {
  const accesstoken = localStorage.getItem("accessToker");
  if (accesstoken == null) {
    Navigate("/login");
  }
  const {
    isLoading,
    data: orders,
    refetch,
  } = useQuery("users", () => {
    return fetch("https://gentle-waters-15419.herokuapp.com/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${accesstoken}`,
      },
    }).then((res) => res.json());
  });
  console.log(orders);
  const handleDelete = (id) => {
    const url = `https://gentle-waters-15419.herokuapp.com/orders/${id}`;
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
      <h1 className="text-3xl w-full pt-5 text-primary">ManageOrders</h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>number</th>
                <th>address</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.phoneNum}</td>
                  <td>{order.address}</td>
                  <td>
                    {
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="btn btn-sm bg-white text-red-500 font-bold text-lg "
                      >
                        x
                      </button>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
