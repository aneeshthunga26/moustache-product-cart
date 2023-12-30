"use client";
import { type ProductSizeOption } from "@/lib/typedef";
import { useState } from "react";

interface ProductFormProps {
  sizeOptions: ProductSizeOption[];
}

export default function ProductForm({ sizeOptions }: ProductFormProps) {
  const [sizeOption, setSizeOption] = useState<ProductSizeOption>();
  const isSelected = (id: number) => id === sizeOption?.id;
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
            className={`btn-square border-2 border-solid ${
              isSelected(so.id)
                ? "border-black text-black"
                : "border-gray-300 text-gray-500"
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
      <button className="mt-5 py-2 px-5 bg-white border-2 border-solid border-black text-lg font-semibold hover:text-white hover:bg-black">
        ADD TO CART
      </button>
    </div>
  );
}
