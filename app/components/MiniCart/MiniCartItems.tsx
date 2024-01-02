import { type CartItem } from "@prisma/client";
import Image from "next/image";

interface MiniCartItemsProps {
  items: CartItem[];
}

//displays cart items grouped by product size
export default function MiniCartItems({ items }: MiniCartItemsProps) {
  return (
    <>
      {items
        .sort((a, b) => a.id - b.id)
        .map((item) => (
          <div
            className="flex items-start justify-start p-6 gap-10"
            key={item.id}
          >
            <Image
              src={item.imageUrl}
              alt={item.productTitle}
              width={100}
              height={350}
            />
            <div>
              <h3 className="mb-4">{item.productTitle}</h3>
              <span>
                {`${item.quantity}x `}
                <label className="font-semibold">{`\$${item.productPrice.toFixed(
                  2,
                )}`}</label>
              </span>
              <p className="mt-4">{`Size: ${item.productSize}`}</p>
            </div>
          </div>
        ))}
    </>
  );
}
