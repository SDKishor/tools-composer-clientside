import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

export default function ManageProduct() {
  const {
    isLoading,
    data: tools,
    refetch,
  } = useQuery("users", () => {
    return fetch("http://localhost:5000/tools").then((res) => res.json());
  });

  const handleDelete = (id) => {
    const url = `http://localhost:5000/tools/${id}`;
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
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tools?.map((tool, index) => (
              <tr key={tool._id}>
                <th>{index + 1}</th>
                <td>{tool.name}</td>
                <td>{tool.Stock}</td>
                <td>{tool.price}</td>
                <td>
                  {
                    <button
                      onClick={() => handleDelete(tool._id)}
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
  );
}
