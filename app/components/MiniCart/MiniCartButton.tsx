"use client";

import LoadingIndicator from "../LoadingIndicator";
import MiniCartItems from "./MiniCartItems";
import useCart from "@/app/hooks/useCart";

//displays the mini cart when clicked and total cart items
export default function MiniCartButton() {
  const { isError, isLoading, data } = useCart();
  const hasItems = data !== undefined && data.size > 0;

  return (
    <div className="dropdown-end dropdown">
      <button
        tabIndex={0}
        className="text-gray-500 px-2 font-normal text-sm relative z-50 focus:border-t focus:border-l focus:border-r focus:border-gray-300 foucs:border-solid focus:bg-white focus:h-8"
      >
        {`My cart ${hasItems ? `( ${data.size} )` : ""}`}
      </button>
      <div
        tabIndex={0}
        className="card border-gray-300 dropdown-content mt-[-1px] bg-white  w-96 border border-solid"
      >
        <div className="card-body">
          {isLoading && <LoadingIndicator />}
          {isError && <p>Failed to load the cart, try refreshing the page</p>}
          {!hasItems && <p>Cart has no items</p>}
          {data && <MiniCartItems items={data.items} />}
        </div>
      </div>
    </div>
  );
}
