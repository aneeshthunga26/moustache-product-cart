"use client";

//TODO: Implement fucntionality
export default function MiniCartButton() {
  return (
    <div className="dropdown-end dropdown foc">
      <span tabIndex={0} className="text-gray-500 font-normal text-sm">
        My cart
      </span>
      <div
        tabIndex={0}
        className="card border-gray-600 dropdown-content mt-2 card-compact bg-white z-30 w-52"
      >
        <div className="card-body">Cart Items</div>
      </div>
    </div>
  );
}
