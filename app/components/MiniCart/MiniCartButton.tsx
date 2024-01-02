"use client";

import LoadingIndicator from "../LoadingIndicator";
import MiniCartItems from "./MiniCartItems";
import useCart from "@/app/hooks/useCart";

//displays the mini cart when clicked and total cart items
export default function MiniCartButton() {
  const { isError, isLoading, data } = useCart();
  const hasItems = data !== undefined && data.size > 0;

  const CartStatus = () => {
    if (isLoading) {
      return (
        <span>
          <LoadingIndicator /> ...Loading
        </span>
      );
    }
    if (isError) {
      return <p>Failed to load the cart, try refreshing the page</p>;
    }
    if (!hasItems) {
      return <p>Cart has no items</p>;
    }
    return null;
  };

  return (
    <div className="dropdown-end dropdown">
      <button
        tabIndex={0}
        className="text-gray-500 px-2 h-8 font-normal text-sm relative z-50 hover:text-black focus:text-black focus:border-t focus:border-l focus:border-r focus:border-gray-300 foucs:border-solid focus:bg-white focus:h-8"
      >
        {`My cart ${hasItems ? `( ${data.size} )` : ""}`}
      </button>
      <div
        tabIndex={0}
        className="card border-gray-300 dropdown-content mt-[-1px] bg-white  w-96 border border-solid"
      >
        <div className="card-body">
          <CartStatus />
          {data && <MiniCartItems items={data.items} />}
        </div>
      </div>
    </div>
  );
}
