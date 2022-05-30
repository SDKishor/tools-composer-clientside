import React, { useRef } from "react";

export default function AddProduct() {
  const nameRef = useRef("");
  const priceRef = useRef("");
  const descriptionRef = useRef("");
  const stockRef = useRef("");
  const minimumQRef = useRef("");
  const imageRef = useRef("");

  const addproduct = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const minimum_quantity = minimumQRef.current.value;
    const description = descriptionRef.current.value;
    const Stock = stockRef.current.value;
    const image = imageRef.current.value;

    const productData = {
      name: name,
      price: `$${price}`,
      minimum_quantity,
      description,
      Stock,
      image,
    };

    fetch("https://gentle-waters-15419.herokuapp.com/additems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form onSubmit={addproduct} className="mt-6">
        <div>
          <label className="block text-sm text-gray-800 ml-2">
            Product Name
          </label>
          <input
            required
            ref={nameRef}
            type="text"
            className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm text-gray-800 ml-2">Price</label>
          <input
            required
            ref={priceRef}
            type="number"
            className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm text-gray-800 ml-2">
            description
          </label>
          <input
            required
            ref={descriptionRef}
            type="textarea"
            className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm text-gray-800 ml-2">Stock</label>
          <input
            required
            ref={stockRef}
            type="number"
            className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm text-gray-800 ml-2">
            Minimum quantity
          </label>
          <input
            required
            ref={minimumQRef}
            type="number"
            className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm text-gray-800 ml-2">
            Product image
          </label>
          <input
            required
            ref={imageRef}
            placeholder="Please enter an url"
            type="url"
            className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 mb-2 "
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md  focus:outline-none focus:bg-secondary">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
