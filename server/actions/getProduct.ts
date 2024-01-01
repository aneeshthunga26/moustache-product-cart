"use server";

import { env } from "@/lib/env";
import { type Product } from "@/lib/typedef";
import axios from "axios";

const productAPIEndpoint = env.PRODUCT_API_ENDPOINT;

/**
 * server action to fetch product information
 * @returns Product
 */
export async function getProduct(): Promise<Product> {
  try {
    const res = await axios.get<Product>(productAPIEndpoint);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch product information");
  }
}
