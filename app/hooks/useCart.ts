"use client";

import { CART_QUERY_KEY, CART_STORAGE_KEY } from "@/lib/constants";
import { type MiniCart } from "@/lib/db/cart";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export async function getMiniCart() {
  let cartId = localStorage.getItem(CART_STORAGE_KEY);
  if (cartId === null) cartId = "";
  const res = await axios.get<MiniCart>(`/api/cart?id=${cartId}`);
  localStorage.setItem(CART_STORAGE_KEY, res.data.id);
  return res.data;
}

/**
 * Hook to fetch MiniCart
 * @returns query result
 */
export default function useCart() {
  const query = useQuery({
    queryKey: [CART_QUERY_KEY],
    queryFn: getMiniCart,
  });

  return query;
}
