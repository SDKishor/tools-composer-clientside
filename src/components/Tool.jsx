import React from "react";

export default function Tool() {
  return (
    <div class="card w-96 bg-base-100 ">
      <figure class="px-10 pt-10 shadow-xl">
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

// https://images.unsplash.com/photo-1559647746-9b2f216d2dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80
