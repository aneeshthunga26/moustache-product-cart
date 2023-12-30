import { getProduct } from "@/server/actions/getProduct";
import ProductDisplay from "./components/ProductDisplay";

export default async function Home() {
  const product = await getProduct();
  return (
    <div className="bg-white">
      <ProductDisplay product={product} />
    </div>
  );
}
