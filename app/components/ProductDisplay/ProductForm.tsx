"use client";
import { type Product, type ProductSizeOption } from "@/lib/typedef";
import { useState } from "react";
import LoadingIndicator from "../LoadingIndicator";
import useUpdateCart from "@/app/hooks/useUpdateCart";

interface ProductFormProps {
  product: Product;
}

//displays the size options and ADD TO CART button
export default function ProductForm({ product }: ProductFormProps) {
  const { mutate, isPending } = useUpdateCart();
  const [sizeOption, setSizeOption] = useState<ProductSizeOption>();
  const [showError, setShowError] = useState(false);

  const isSelected = (id: number) => id === sizeOption?.id;
  const sizeOptions = product.sizeOptions;

  return (
    <div className="flex flex-col items-start justify-center">
      <span>
        <label className="text-gray-500 text-md font-medium">SIZE</label>
        <label className="text-red-600">*</label>
        <label className="text-black ml-1">{sizeOption?.label}</label>
      </span>
      <span className="mt-3 flex gap-1">
        {sizeOptions.map((so) => (
          <button
            className={`btn-square border-solid ${
              isSelected(so.id)
                ? "border-black text-black border-2"
                : "border-gray-300 text-gray-500 border"
            }`}
            onClick={() => {
              setSizeOption(so);
            }}
            key={so.id}
          >
            {so.label}
          </button>
        ))}
      </span>
      {showError && (
        <label className="text-red-600">Please choose a size</label>
      )}
      <button
        className="mt-5 py-2 px-5 bg-white border-2 border-solid border-black text-lg font-semibold hover:text-white hover:bg-black"
        disabled={isPending}
        onClick={() => {
          if (!sizeOption) {
            setShowError(true);
            return;
          }
          mutate({
            productId: product.id,
            productSize: sizeOption.label,
            productTitle: product.title,
            productPrice: product.price,
            imageUrl: product.imageURL,
            quantity: 1,
          });
          setShowError(false);
        }}
      >
        {isPending && <LoadingIndicator />}
        ADD TO CART
      </button>
    </div>
  );
}
