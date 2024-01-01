import { CART_QUERY_KEY, CART_STORAGE_KEY } from "@/lib/constants";
import { type MiniCartItem, type MiniCart } from "@/lib/db/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

async function updateMiniCart(cartItem: MiniCartItem) {
  let cartId = localStorage.getItem(CART_STORAGE_KEY);
  if (cartId === null) cartId = "";
  const res = await axios.post<MiniCart>(`/api/cart?id=${cartId}`, cartItem);
  localStorage.setItem(CART_STORAGE_KEY, res.data.id);
  return res.data;
}

/**
 * Hook to update MiniCart
 * @returns react query mutation
 */
export default function useUpdateCart() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: [CART_QUERY_KEY],
    mutationFn: updateMiniCart,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [CART_QUERY_KEY] });
    },
  });
  return mutation;
}
