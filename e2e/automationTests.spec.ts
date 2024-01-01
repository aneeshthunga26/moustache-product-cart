import { test, expect } from "@playwright/test";

test("expect cart to be empty before adding items", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "My cart " }).click();
  await expect(page.getByText("Cart has no items")).toBeVisible();
});

test("show error prompt if add to cart is clicked without choosing size", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "ADD TO CART" }).click();
  await expect(page.getByText("Please choose a size")).toBeVisible();
});

test("choosing a size and add to cart should reflect cart count in the mini cart", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "S" }).click();
  await page.getByRole("button", { name: "ADD TO CART" }).click();
  await expect(page.getByText("Please choose a size")).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: "My cart ( 1 )" }),
  ).toBeVisible();
});

test("displays contents of the mini cart when mini cart button is clicked", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "S" }).click();
  await page.getByRole("button", { name: "ADD TO CART" }).click();
  await page.getByRole("button", { name: "L" }).click();
  await page.getByRole("button", { name: "ADD TO CART" }).click();
  await page.getByRole("button", { name: "L" }).click();
  await page.getByRole("button", { name: "ADD TO CART" }).click();
  await page.getByRole("button", { name: "My cart ( 3 )" }).click();

  await expect(page.getByText("1x")).toBeVisible();
  await expect(page.getByText("2x")).toBeVisible();
});
