import {
  type MiniCartItem,
  createCart,
  getCart,
  updateCartWithItem,
} from "@/lib/db/cart";

//get method to fetch cart. Creates a new cart if there is no cart id passed to it
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cartId = searchParams.get("id");
  const miniCart = (await getCart(cartId)) ?? (await createCart());
  return Response.json(miniCart);
}

//post method to update cart items
export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const cartId = searchParams.get("id");
  const cartItem = (await req.json()) as MiniCartItem;
  const miniCart = await updateCartWithItem(cartId, cartItem);
  return Response.json(miniCart);
}
