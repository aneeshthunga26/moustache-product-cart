import { type Product } from "@/lib/typedef";
import Image from "next/image";
import ProductForm from "./ProductForm";

interface ProductDisplayProps {
  product: Product;
}

export default function ProductDisplay({ product }: ProductDisplayProps) {
  return (
    <div className="flex items-start justify-start gap-40 mt-4">
      <Image
        src={product.imageURL}
        alt={product.title}
        width={500}
        height={800}
      />
      <div>
        <h1 className="text-2xl font-normal">{product.title}</h1>
        <div className="divider mt-5 h-[1px] bg-gray-100" />
        <h2 className="text-lg mt-1 font-semibold">{`\$${product.price.toFixed(
          2,
        )}`}</h2>
        <div className="divider mt-2 h-[1px] bg-gray-100" />
        <p className="mt-5 mb-8 prose text-gray-500">{product.description}</p>
        <ProductForm sizeOptions={product.sizeOptions} />
      </div>
    </div>
  );
}
