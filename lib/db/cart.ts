"use server";

import { type CartItem, type Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type CartWithItems = Prisma.CartGetPayload<{
  include: { items: true };
}>;

export type MiniCart = CartWithItems & {
  size: number;
};

export type MiniCartItem = Omit<CartItem, "id" | "cartId">;

/**
 * Create a new cart in db
 * @returns returns a new MiniCart
 */
export async function createCart(): Promise<MiniCart> {
  const cart = await prisma.cart.create({
    data: {},
  });

  return {
    ...cart,
    items: [],
    size: 0,
  };
}

/**
 * get an exisiting cart from db using cart id
 * @param id the db id of the cart
 * @returns MiniCart populated with size and CartItems
 */
export async function getCart(id: number | null): Promise<MiniCart | null> {
  if (!id) return null;

  const cart = await prisma.cart.findUnique({
    where: { id },
    include: { items: true },
  });

  if (cart === null) {
    return cart;
  }

  return {
    ...cart,
    size: cart.items.reduce((acc, items) => acc + items.quantity, 0),
  };
}

/**
 * Update an exisiting cart with the given cart item
 * @param cartId The db id of the cart
 * @param cartItem cart item to be updated or created in the database
 */
export async function updateCartWithItem(
  cartId: number,
  cartItem: MiniCartItem,
): Promise<MiniCart> {
  const cart = (await getCart(cartId)) ?? (await createCart());

  const itemInCart = cart.items.find(
    (item) => item.productSize === cartItem.productSize,
  );

  if (itemInCart) {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          update: {
            where: { id: itemInCart.id },
            data: { quantity: { increment: 1 } },
          },
        },
      },
    });
  } else {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          create: {
            ...cartItem,
          },
        },
      },
    });
  }
  return {
    ...cart,
    size: cart.items.reduce((acc, items) => acc + items.quantity, 0),
  };
}
