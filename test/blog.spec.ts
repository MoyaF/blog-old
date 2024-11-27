import { expect, test } from "@playwright/test";

test("should display the Blog heading", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
});
